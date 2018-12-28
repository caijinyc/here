/**
 * 歌曲列表展示组件 MusicList 组件使用
 *
 * 功能：
 *   1. 负责显示传入的所有歌曲
 *   2. 点击歌曲进行播放
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getChangeCurrentMusic,
  getSingerInfoAction,
  getAlbumInfoAction
} from '../../store/actionCreator';

import './style.scss';

class ShowList extends Component {
  renderMusicList = () => {
    return this.props.list.map((item, index) => {
      let count = index + 1;
      if (count < 10) {
        count = '0' + count;
      }
      return (
        <li key={item.id} className="list-li">
          <div className="count">{count}</div>
          <div className="music-name">
            <span onClick={() => this.props.handleChangeCurrentMusic(item)}>
              {item.name}
            </span>
          </div>
          <div className="singer-name">
            <span onClick={() => this.props.handleGetSingerInfo(item.ar[0].id)}>
              {item.ar[0].name}
            </span>
          </div>
          <div className="album-name">
            <span onClick={() => this.props.handleGetAlbumInfo(item.al.id)}>
              {item.al.name}
            </span>
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="show-list-container">
        <ul>
          <li className="title">
            <div className="count" />
            <div className="music-name">
              <span>歌曲名</span>
            </div>
            <div className="singer-name">
              <span>歌手</span>
            </div>
            <div className="album-name">
              <span>专辑</span>
            </div>
          </li>
          {this.renderMusicList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playList: state.playList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeCurrentMusic(item) {
      dispatch(getChangeCurrentMusic(item));
    },
    handleGetSingerInfo(id) {
      dispatch(getSingerInfoAction(id));
    },
    handleGetAlbumInfo(albumId) {
      dispatch(getAlbumInfoAction(albumId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowList);

/**
 * 点击歌曲：
 * 1. 获得当前的播放列表
 * 2. 通过 findindex 查看列表中是否已经有点击的歌曲存在
 * 3. 如果已经有点击的歌曲存在，那就改变 currentIndex 以及 currentMusic 为已经存在的那首歌曲
 * 4. 如果没有，那就将被点击的歌曲插入到播放列表的最后一个，并播放
 */
