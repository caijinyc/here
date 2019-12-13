// 引入electron并创建一个Browserwindow
const { app, BrowserWindow, ipcMain, Menu, Tray, globalShortcut } = require('electron');
const path = require('path');
const api = require('../NeteaseCloudMusicApi/app');
const config = require('../projectConfig');

const GLOBAL_SHORTCUT = {
  'CommandOrControl+Alt+Right': 'nextMusic',
  'CommandOrControl+Alt+Left': 'prevMusic',
  'CommandOrControl+Alt+Up': 'volumeUp',
  'CommandOrControl+Alt+Down': 'volumeDown',
  'CommandOrControl+Alt+S': 'changePlayingStatus'
};

let forceQuit = false;
let apiServer;
let mainWindow;
let tray = null;

const template = [
  {
    label: '编辑',
    submenu: [
      {
        label: '剪切',
        accelerator: 'CmdOrCtrl+X',
        role: 'cut'
      },
      {
        label: '复制',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
      },
      {
        label: '粘贴',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
      },
      {
        label: '全选',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectall'
      }
    ]
  },
  {
    label: '查看',
    submenu: [
      {
        label: '重载',
        accelerator: 'CmdOrCtrl+R',
        click: function (item, focusedWindow) {
          if (focusedWindow) {
            // 重载之后, 刷新并关闭所有的次要窗体
            if (focusedWindow.id === 1) {
              BrowserWindow.getAllWindows().forEach(function (win) {
                if (win.id > 1) {
                  win.close();
                }
              });
            }
            focusedWindow.reload();
          }
        }
      },
      {
        label: '切换全屏',
        accelerator: (function () {
          if (process.platform === 'darwin') {
            return 'Ctrl+Command+F';
          } else {
            return 'F11';
          }
        })(),
        click: function (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
          }
        }
      },
      {
        label: '切换开发者工具',
        accelerator: (function () {
          if (process.platform === 'darwin') {
            return 'Alt+Command+I';
          } else {
            return 'Ctrl+Shift+I';
          }
        })(),
        click: function (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.toggleDevTools();
          }
        }
      }
    ]
  },
  {
    label: '窗口',
    role: 'window',
    submenu: [
      {
        label: '最小化',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: '关闭',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      },
      {
        label: '退出',
        accelerator: 'Cmd+Q',
        role: 'quit'
      }
    ]
  }
];

ipcMain.on('min', () => mainWindow.minimize());
ipcMain.on('max', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.on('show', () => {
  mainWindow.show();
  mainWindow.focus();
});

function createWindow () {
  // 创建浏览器窗口,宽高自定义具体大小你开心就好
  mainWindow = new BrowserWindow({
    width: 980,
    height: 850,
    minWidth: 950,
    minHeight: 700,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#021524'
  });

  // 开发环境使用 http 协议 生产环境使用 file 协议
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:3000/');
  } else {
    mainWindow.loadURL(`file://${__dirname}/index.html`);
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.setDocumentEdited(true);

  // 关闭window时触发下列事件.
  mainWindow.on('close', function (e) {
    if (forceQuit) {
      app.quit();
    } else {
      /**
       * If you close a browser window it will be destroyed, so you can't hide or show it again after that.
       * Since you want to hide it and show it again later your should add a listener for the close event that calls preventDefault()
       * and hides the window instead of closing it.
       */
      e.preventDefault();
      mainWindow.hide();
    }
  });

  // 托盘
  tray = new Tray(path.join(__dirname, '../assets/tray@4x.png'));
  tray.setToolTip('显示窗口');

  tray.on('click', () => {
    mainWindow.show();
  });


  Object.keys(GLOBAL_SHORTCUT).forEach((key) => {
    globalShortcut.register(key, () => {
      mainWindow.webContents.send('store-data', GLOBAL_SHORTCUT[key]);
    });
  });

}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', () => {
  createWindow();

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  apiServer = api.listen(config.api.port, () => {
    console.log(`server running @ http://localhost:${config.api.port}`);
  });
});

app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', (e) => {
  if (!mainWindow.isVisible()) {
    mainWindow.show();
  }
});

app.on('before-quit', (e) => {
  apiServer && apiServer.close();

  forceQuit = true;
  mainWindow = null;
});
