import React, { Component } from 'react';
import { connect } from 'react-redux';
import message from '../../base/Message';
import { getChangeCollectorAction } from '../../store/actionCreator';
import $db from '../../data';

import './style.scss';

const fs = window.require('fs');
const { dialog } = window.require('electron').remote;

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankList: null
    };
  }

  handleExportCollector = () => {
    const filters = [
      {
        name: 'json',
        extensions: ['json'] // 文件后缀名类型， 如 md json
      }
    ];
    // https://electronjs.org/docs/api/dialog#dialogshowsavedialogbrowserwindow-options-callback
    dialog.showSaveDialog(
      {
        filters,
        defaultPath: 'here-music-collector'
      },
      (filename) => {
        if (!filename) {
          return;
        }
        // http://nodejs.cn/api/fs.html#fs_fs_writefile_file_data_options_callback
        fs.writeFile(filename, JSON.stringify(this.props.collector), (err) => {
          message.info('!Congratulation!   备份成功   !Congratulation!');
          if (err) throw err;
        });
      }
    );
  };

  handleImportCollector = () => {
    // https://electronjs.org/docs/api/dialog#dialogshowopendialogbrowserwindow-options-callback
    dialog.showOpenDialog(
      {
        properties: ['openFile']
      },
      (filename) => {
        if (!filename || filename.length === 0) return;
        fs.readFile(filename[0], (err, fd) => {
          if (err) {
            if (err.code === 'ENOENT') {
              console.error('文件不存在');
              return;
            }
            throw err;
          }
          try {
            const collector = JSON.parse(fd);
            if (collector.name !== 'collector') {
              message.info('!!请导入正确的备份文件!!');
              return;
            } else {
              $db.update({ name: 'collector' }, collector, () => {
              this.props.handleChangeCollector(collector);
              message.info('!Congratulation!   导入成功   !Congratulation!');
            });
            }
          } catch {
            message.info('!!请导入正确的备份文件!!');
          }
        });
      }
    );
  };

  renderExportCollector() {
    return (
      <li className="export-collector">
        <h1 className="title">导出我的收藏</h1>
        <p className="description">
          因为重装软件会导致收藏夹数据丢失，所以强烈建议在重装软件前导出收藏夹进行备份。
        </p>
        <button onClick={this.handleExportCollector}>导出到本地文件</button>
      </li>
    );
  }

  renderImportCollector() {
    return (
      <li className="import-collector">
        <h1 className="title">导入我的收藏夹</h1>
        <p className="description">
          导入备份文件，恢复到我的收藏（会覆盖当前的收藏夹）。
        </p>
        <button onClick={this.handleImportCollector}>导入备份文件</button>
      </li>
    );
  }

  renderAbout() {
    return (
      <li className="about">
        <h1 className="title">关于 Here Music</h1>
        <p className="description" />
      </li>
    );
  }

  render() {
    return (
      <div className="page-about">
        <ul className="page-about-container">
          {this.renderExportCollector()}
          {this.renderImportCollector()}
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
    handleChangeCollector(value) {
      dispatch(getChangeCollectorAction(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rank);
