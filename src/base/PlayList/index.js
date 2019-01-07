/**
 * 播放列表：
 *  显示当前的播放列表
 * @param {Array} 使用 redux 中的 playlist 作为显示的数据
 * @param {Number} 使用 redux 中的 currentIndex 作为正在播放歌曲的索引
 * @param {Boolean} 接收传入的 hidePlayList
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { If, Then, Else } from 'react-if';
import {
  getChangeCurrentMusic,
  getDeleteMusicAction,
  emptyPlayList
} from '../../store/actionCreator';
import RenderSingrs from '../RenderSingers';

import './style.scss';

class PlayList extends Component {
  getAlert () {
    alert('getAlert from Child');
  }

  // scroll 滚动到当前播放的歌曲
  scrollToCurrentMusic = () => {
    if (this.props.playList.length === 0 || !this.refs.playListUl) {
      return;
    }
    const distance = this.props.currentIndex * 51;
    this.refs.playListUl.scrollTo(0, distance);
  };

  /**
   * 1. 点击歌曲需要播放歌曲
   *    改变 currentIndex，以及 currentMusic 即可
   * 2. 点击歌手名跳转到歌手列表
   *    待定
   */
  renderPlayList = () => {
    return this.props.playList.map((item, index) => {
      return (
        <li
          key={item.id}
          className={this.props.currentIndex === index ? 'action' : ''}
          onDoubleClick={() => this.props.handleChangeCurrentMusic(item)}
        >
          <div className="music-name">
            <span onClick={() => this.props.handleChangeCurrentMusic(item)}>
              {item.musicName}
            </span>
          </div>
          <div className="singer-name">
            <RenderSingrs singers={item.singers}/>
          </div>
          <i
            className="iconfont icon-del"
            onClick={() => this.props.handleDeleteMusic(item)}
          />
        </li>
      );
    });
  };

  render () {
    const length = this.props.playList.length;
    return (
      <div
        className="play-list"
        onClick={(e) => {
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        {/* e.nativeEvent.stopImmediatePropagation(); 阻止事件冒泡 */}
        <div className="list-info">
          <span className="music-count">共 {length} 首</span>
          <span className="collect" />
          <span className="delete" onClick={this.props.emptyPlayList}>
            全部清空
          </span>
        </div>
        <If condition={length === 0}>
          <Then>
            <div className="without-music">你还没有添加歌曲</div>
          </Then>
          <Else>
            <ul ref="playListUl">{this.renderPlayList()}</ul>
          </Else>
        </If>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playList: state.playList,
    currentIndex: state.currentIndex
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeCurrentMusic (item) {
      const action = getChangeCurrentMusic(item);
      dispatch(action);
    },
    handleDeleteMusic (item) {
      const action = getDeleteMusicAction(item);
      dispatch(action);
    },
    emptyPlayList () {
      dispatch(emptyPlayList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(PlayList);
