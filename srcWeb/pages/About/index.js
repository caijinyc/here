import React, { Component } from 'react';
import { connect } from 'react-redux';
import message from '../../base/Message';
import { getChangeCollectorAction } from '../../store/actionCreator';
import $db from '../../data';

import './style.scss';

// const shell = window.require('electron').shell;
// const fs = window.require('fs');
// const { dialog } = window.require('electron').remote;

class Rank extends Component {
  constructor (props) {
    super(props);
    this.state = {
      rankList: null
    };
  }

  handleOpenExternalUrl = (url) => {
    // shell.openExternal(url);
    window.open(url, '_blank');
  };

  // handleExportCollector = () => {
  //   const filters = [
  //     {
  //       name: 'json',
  //       extensions: ['json'] // 文件后缀名类型， 如 md json
  //     }
  //   ];
  //   // https://electronjs.org/docs/api/dialog#dialogshowsavedialogbrowserwindow-options-callback
  //   dialog.showSaveDialog(
  //     {
  //       filters,
  //       defaultPath: 'here-music-collector'
  //     },
  //     (filename) => {
  //       if (!filename) {
  //         return;
  //       }
  //       // http://nodejs.cn/api/fs.html#fs_fs_writefile_file_data_options_callback
  //       fs.writeFile(filename, JSON.stringify(this.props.collector), (err) => {
  //         message.info('!Congratulation!   备份成功   !Congratulation!');
  //         if (err) { throw err; }
  //       });
  //     }
  //   );
  // };

  // handleImportCollector = () => {
  //   // https://electronjs.org/docs/api/dialog#dialogshowopendialogbrowserwindow-options-callback
  //   dialog.showOpenDialog(
  //     {
  //       properties: ['openFile']
  //     },
  //     (filename) => {
  //       if (!filename || filename.length === 0) { return; }
  //       fs.readFile(filename[0], (err, fd) => {
  //         if (err) {
  //           if (err.code === 'ENOENT') {
  //             return;
  //           }
  //           throw err;
  //         }
  //         try {
  //           const collector = JSON.parse(fd);
  //           if (collector.name !== 'collector') {
  //             message.info('!!请导入正确的备份文件!!');
  //             return;
  //           } else {
  //             $db.update({ name: 'collector' }, collector, () => {
  //               this.props.handleChangeCollector(collector);
  //               message.info('!Congratulation!   导入成功   !Congratulation!');
  //             });
  //           }
  //         } catch {
  //           message.info('!!请导入正确的备份文件!!');
  //         }
  //       });
  //     }
  //   );
  // };

  // renderExportCollector () {
  //   return (
  //     <li className="export-collector">
  //       <h1 className="title">导出我的收藏</h1>
  //       <p className="description">
  //         因为重装软件会导致收藏夹数据丢失，所以强烈建议在重装软件前导出收藏夹进行备份。
  //       </p>
  //       <button onClick={this.handleExportCollector}>导出到本地文件</button>
  //     </li>
  //   );
  // }
  //
  // renderImportCollector () {
  //   return (
  //     <li className="import-collector">
  //       <h1 className="title">导入我的收藏夹</h1>
  //       <p className="description">
  //         导入备份文件，恢复到我的收藏（会覆盖当前的收藏夹）。
  //       </p>
  //       <button onClick={this.handleImportCollector}>导入备份文件</button>
  //     </li>
  //   );
  // }

  renderAbout () {
    return (
      <li className="about">
        <h1 className="title">关于 Here Music</h1>
        <div className="description">
          <p className="here">
            Here Music :{' '}
            <span
              onClick={() =>
                this.handleOpenExternalUrl('https://github.com/caijinyc/here')
              }
            >
              https://github.com/caijinyc/here
            </span>
          </p>
          <p>
            因为软件暂时是个人开发维护，所以难免会有一些没有注意到的问题，请见谅。
          </p>
          <p>
            如果对 Here Music 有任何建议，或者有 Bug 需要反馈的话欢迎在{' '}
            <span
              onClick={() =>
                this.handleOpenExternalUrl(
                  'https://github.com/caijinyc/here/issues'
                )
              }
            >
              Issues
            </span>
            中提出。
          </p>
          <p>如果您喜欢 Here Music 的话，欢迎 Star 和 Fork 本项目。</p>
          <p className="license">Version 0.1.1 本软件基于 MIT 协议开源</p>
        </div>
      </li>
    );
  }

  render () {
    return (
      <div className="page-about">
        <ul className="page-about-container">
          {/* {this.renderExportCollector()}*/}
          {/* {this.renderImportCollector()}*/}
          {this.renderAbout()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMusicList: state.showMusicList,
    showSingerInfo: state.showSingerInfo,
    collector: state.collector
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeCollector (value) {
      dispatch(getChangeCollectorAction(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rank);
