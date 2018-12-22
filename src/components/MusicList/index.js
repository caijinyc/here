/**
 * 歌曲展示组件，
 * 用于显示歌曲列表中的所有歌曲
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShowList from '../../base/ShowList';

import './style.scss';

class MusicList extends Component {
  renderListInfo() {
    const musicList = this.props.musicList;
    if (!musicList) {
      return null;
    }

    // 当简介的 length 超过 200 的时候扔掉多余的，在结尾加上 ...
    let description = musicList.description;
    if (description.length > 200) {
      description = description.substring(0, 180) + ' ...';
    }

    return (
      <div className="list-info">
        <div className="list-img">
          <img src={musicList.coverImgUrl} alt="" />
        </div>
        <p className="name">{musicList.name}</p>
        <p className="description">
          {description}
        </p>
        <div className="control">
          {/* <div className="play-icon"></div> */}
          <i className="iconfont icon-play1"></i>
          <i className="iconfont icon-addbox"></i>
          <i className="iconfont icon-folder"></i>
        </div>
      </div>
    );
  }
  
  render() {
    const musicList = this.props.musicList;
    return (
      <div
        className={
          this.props.showMusicList
            ? 'music-list-container'
            : 'hide-music-list-container'
        }
      >
        {this.renderListInfo()}
        <ShowList
          className="show-list-container"
          list={musicList ? musicList.tracks : []}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    musicList: state.musicList,
    showMusicList: state.showMusicList
  };
};

export default connect(
  mapStateToProps,
  null
)(MusicList);
