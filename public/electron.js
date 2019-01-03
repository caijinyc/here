// 引入electron并创建一个Browserwindow
const { app, BrowserWindow, ipcMain } = require('electron');
const api = require('../NeteaseCloudMusicApi/app');
const config = require('../config');

let forceQuit = false;
let apiServer;
let mainWindow;

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

function createWindow() {
  // Menu.setApplicationMenu(null);

  //创建浏览器窗口,宽高自定义具体大小你开心就好
  mainWindow = new BrowserWindow({
    width: 980,
    height: 900,
    minWidth: 980,
    minHeight: 800,
    // frame: false
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#021524'
  });

  /* 
   * 加载应用-----  electron-quick-start中默认的加载入口
  */
  // mainWindow.loadURL(`file://${__dirname}/index.html`);

  // 加载应用----适用于 react 项目
  mainWindow.loadURL('http://localhost:3000/');

  // 打开开发者工具，默认不打开
  // mainWindow.webContents.openDevTools();
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // 关闭window时触发下列事件.
  mainWindow.on('close', function(e) {
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
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', () => {
  createWindow();
  apiServer = api.listen(config.api.port, () => {

    console.log(`server running @ http://localhost:${config.api.port}`);
  });

});

app.on('window-all-closed', function() {
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
  e.preventDefault();
  apiServer && apiServer.close();
  
  forceQuit = true;
  mainWindow = null;
});
