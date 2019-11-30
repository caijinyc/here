/**
 * Player 组件
 * 只负责歌曲的播放，以及控制歌曲的播放模式
 * 不用关心歌曲列表，以及歌曲的播放顺序的逻辑处理
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// 使用 withRouter 之后就可以使用 this.props.history.push(value)
import { withRouter } from 'react-router-dom';
import { If, Then, Else } from 'react-if';
import {
  getChangePlayingStatusAction,
  playPrevMusicAction,
  playNextMusicAction,
  getChangePlayModeAction,
  toggleShowMusicDetail,
  getAddToLikeListAction,
  getHideAllAction,
  getChangeVolumeAction
} from '../../store/actionCreator';
import { PLAY_MODE_TYPES } from '../../common/js/config';
import { findIndex, imageRatio } from '../../common/js/utl';

import ProgressBar from '../../base/ProgressBar';
import PlayTime from '../../base/PlayTime';
import PlayList from '../../base/PlayList';
import MusicDetail from '../../base/MusicDetail';
import RenderSingers from '../../base/RenderSingers';

import './style.scss';

// const { ipcRenderer } = window.require('electron');

const DEFAULT_TIME = 0;
const PLAYING_STATUS = {
  playing: true,
  paused: false
};
const VOLUME_UP = 'VOLUME_UP';
const VOLUME_DOWN = 'VOLUME_DOWN';

class Player extends Component {
  constructor (props) {
    super(props);
    this.state = {
      duration: DEFAULT_TIME,
      currentTime: DEFAULT_TIME,
      move: false,
      percent: 0,
      showPlayList: false
    };
  }

  componentDidMount () {
    this.refs.audio.volume = this.props.volume;

    // 全局快捷键按键
    // ipcRenderer.on('store-data', (event, store) => {
    //   this.handleGlobalShortcut(store);
    // });

    // 快捷键
    document.addEventListener('keydown', this.handleShortcut);
  }

  handleGlobalShortcut = (e) => {
    if (e === 'volumeUp') {
      this.handleChangeVolume(VOLUME_UP);
      return;
    }
    if (e === 'volumeDown') {
      this.handleChangeVolume(VOLUME_DOWN);
      return;
    }
    if (e === 'nextMusic') {
      this.props.playNextMusic();
      return;
    }
    if (e === 'prevMusic') {
      this.props.playPrevMusic();
      return;
    }
    if (e === 'changePlayingStatus') {
      if (this.props.playing) {
        this.handleChangePlayingStatus(PLAYING_STATUS.paused);
      } else {
        this.handleChangePlayingStatus(PLAYING_STATUS.playing);
      }
    }
  }

  handleShortcut = (e) => {
    if (e.target.tagName === 'INPUT') {
      return;
    }
    if (e.key === ' ') {
      e.preventDefault();
      if (this.props.playing) {
        this.handleChangePlayingStatus(PLAYING_STATUS.paused);
      } else {
        this.handleChangePlayingStatus(PLAYING_STATUS.playing);
      }
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.handleChangeVolume(VOLUME_UP);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.handleChangeVolume(VOLUME_DOWN);
      return;
    }
    if (e.key === 'ArrowRight' && e.metaKey) {
      e.preventDefault();
      this.props.playNextMusic();
      return;
    }
    if (e.key === 'ArrowLeft' && e.metaKey) {
      e.preventDefault();
      this.props.playPrevMusic();
      return;
    }
    if ((e.key === 'L' || e.key === 'l') && e.metaKey) {
      this.props.handleAddToLikeList(this.props.currentMusic);
      return;
    }
    if ((e.key === 'F' || e.key === 'f') && e.metaKey) {
      this.props.handleHideAll();
      this.props.history.push('/search');
      return;
    }
  }

  handleChangeVolume = (type) => {
    if (type === VOLUME_UP) {
      if (this.props.volume === 1) {
        return;
      } else {
        const volume = this.props.volume + 0.05 > 1 ? 1 : this.props.volume + 0.05;
        this.volumeChange(volume);
      }
    } else {
      if (this.props.volume === 0) {
        return;
      } else {
        const volume = this.props.volume - 0.05 < 0 ? 0 : this.props.volume - 0.05;
        this.volumeChange(volume);
      }
    }
  }

  componentWillReceiveProps ({ playing }) {
    if (!playing) {
      this.refs.audio.pause();
    }
  }

  // 音乐播放触发 audio 标签的 updatetime 事件
  // 这个时候获取 currentTime 得到音乐的时间
  handleUpdateTime = (e) => {
    if (this.state.move) {
      return;
    }
    const { currentTime, duration } = e.target;
    let percent = Math.floor((currentTime / duration) * 1000) / 1000;
    if (isNaN(percent)) {
      percent = 0;
    }
    this.setState(() => {
      return {
        currentTime,
        percent,
        duration
      };
    });
  };

  // 歌曲进度控制
  percentChange = (percent) => {
    if (this.props.showMusicDetail) {
      const currentTime = this.state.duration * percent;
      this.refs.musicDetail.seek(currentTime);
    }
    this.setState(() => {
      return {
        percent,
        move: true
      };
    });
  };

  // 歌曲进度控制
  percentChangeEnd = (percent) => {
    const currentTime = this.state.duration * percent;
    this.refs.audio.currentTime = currentTime;
    if (this.props.showMusicDetail) {
      this.refs.musicDetail.seek(currentTime);
    }
    this.setState(() => {
      return {
        currentTime,
        percent,
        move: false
      };
    });
  };

  // 音量控制
  volumeChange = (percent) => {
    this.refs.audio.volume = percent;
    this.props.handleChangeVolume(percent);
  };

  handleChangePlayingStatus (status) {
    if (this.props.playList.length === 0) {
      return;
    }
    this.props.changePlayingStatus(status);
    const audio = this.refs.audio;
    if (status === PLAYING_STATUS.playing) {
      audio.play();
    } else {
      audio.pause();
    }
    // 如果歌曲详情已经显示了，就对歌词进行暂停
    if (this.props.showMusicDetail) {
      this.refs.musicDetail.togglePlay();
    }
  }

  handleShowPlayList = () => {
    if (!this.state.showPlayList) {
      document.addEventListener('click', this.handleShowPlayList);
    } else {
      document.removeEventListener('click', this.handleShowPlayList);
    }
    this.setState((pervState) => ({
      showPlayList: !pervState.showPlayList
    }), () => {
      this.refs.playList.scrollToCurrentMusic();
    });
  };

  handleShowMusicDetial = () => {
    this.props.toggleShowMusicDetail();
    this.refs.musicDetail.displayMusicDetailGetMusicTime(this.state.currentTime);
  }

  handlePlayNextMusic = () => {
    if (this.props.playMode === PLAY_MODE_TYPES.LOOP_PLAY) {
      const currentTime = 0;
      this.refs.audio.currentTime = currentTime;
      this.refs.audio.play();
      this.setState(() => {
        return {
          currentTime
        };
      });
    } else {
      this.props.playNextMusic();
    }
  };

  renderPlayerControl = () => {
    return (
      <div className="player-control-container">
        <div className="play-control-btn">
          <div className="prev-music">
            <i
              className="iconfont icon-prev"
              onClick={this.props.playPrevMusic}
            />
          </div>
          <div className="play">
            <If condition={this.props.playing}>
              {/* 如果正在播放，显示暂停按钮 */}
              <Then>
                <i
                  className="iconfont icon-stop"
                  onClick={() =>
                    this.handleChangePlayingStatus(PLAYING_STATUS.paused)
                  }
                />
              </Then>
              {/* 如果音乐暂停，显示播放按钮 */}
              <Else>
                <i
                  className="iconfont icon-bofangicon"
                  onClick={() =>
                    this.handleChangePlayingStatus(PLAYING_STATUS.playing)
                  }
                />
              </Else>
            </If>
          </div>
          <div className="next-music">
            <i
              className="iconfont icon-test"
              onClick={this.props.playNextMusic}
            />
          </div>
        </div>
      </div>
    );
  };

  render () {
    const { currentMusic } = this.props;

    return (
      <div className="player-container">
        <div className="player-left-container">
          {this.renderPlayerControl()}
          <div className="music-img" onClick={this.handleShowMusicDetial}>
            <img src={currentMusic ? currentMusic.imgUrl + imageRatio(64) : ''} alt="" />
          </div>
        </div>
        <div className="player-middle-container">
          <div className="music-info">
            <p className="music-name" onClick={this.handleShowMusicDetial}>
              {currentMusic ? currentMusic.musicName : ''}
            </p>
            <p className="singer-name">
              {currentMusic ? <RenderSingers singers={currentMusic.singers} /> : ''}
            </p>
          </div>
          <div className="progress-bar-container">
            <ProgressBar
              percent={this.state.percent}
              percentChange={this.percentChange}
              percentChangeEnd={this.percentChangeEnd}
            />
          </div>
        </div>
        <div className="player-right-container">
          <div className="play-time-container">
            <PlayTime
              currentTime={this.state.currentTime}
              duration={this.state.duration}
            />
          </div>
          <div className="right-control-btn">
            <i
              className="iconfont icon-list"
              onClick={this.handleShowPlayList}
            />
            <div className="change-play-mode">
              <i
                className={[
                  'iconfont icon-next',
                  this.props.playMode === PLAY_MODE_TYPES.SEQUENCE_PLAY
                    ? ''
                    : 'hide'
                ].join(' ')}
                onClick={() =>
                  this.props.changePlayMode(PLAY_MODE_TYPES.RANDOM_PLAY)
                }
              />
              <i
                className={[
                  'iconfont icon-loop',
                  this.props.playMode === PLAY_MODE_TYPES.LOOP_PLAY
                    ? ''
                    : 'hide'
                ].join(' ')}
                onClick={() =>
                  this.props.changePlayMode(PLAY_MODE_TYPES.SEQUENCE_PLAY)
                }
              />
              <i
                className={[
                  'iconfont icon-random',
                  this.props.playMode === PLAY_MODE_TYPES.RANDOM_PLAY
                    ? ''
                    : 'hide'
                ].join(' ')}
                onClick={() =>
                  this.props.changePlayMode(PLAY_MODE_TYPES.LOOP_PLAY)
                }
              />
            </div>
            <If condition={Boolean(this.props.likesList && findIndex(this.props.likesList, currentMusic) < 0)}>
              <Then>
                <div className="like-music" onClick={() => this.props.handleAddToLikeList(currentMusic)}>
                  <i className="iconfont icon-will-love" title="添加到我喜欢的音乐"></i>
                </div>
              </Then>
              <Else>
                <div className="dislike-music" onClick={() => this.props.handleAddToLikeList(currentMusic)}>
                  <i className="iconfont icon-love" title="不喜欢这首歌啦~"></i>
                </div>
              </Else>
            </If>
          </div>
          <div className="audio-volume">
            <i className="iconfont icon-volume-up" />
            <ProgressBar
              percent={this.props.volume}
              percentChange={this.volumeChange}
              percentChangeEnd={this.volumeChange}
            />
          </div>
        </div>
        <If condition={this.props.showMusicDetail}>
          <div>
            <div className="music-detail-background">
              <img src={currentMusic ? currentMusic.imgUrl + imageRatio(250) : ''} alt="" />
            </div>
            <div className="player-background"></div>
          </div>
        </If>
        <MusicDetail ref="musicDetail" />
        <div
          className={`${
            this.state.showPlayList ? '' : 'hide-play-list'
          } play-list-container`}
        >
          <PlayList ref="playList" showPlayList={this.state.showPlayList}/>
        </div>
        <audio
          autoPlay
          src={currentMusic ? currentMusic.musicUrl : ''}
          ref="audio"
          onTimeUpdate={this.handleUpdateTime}
          onEnded={this.handlePlayNextMusic}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playList: state.playList,
    currentMusic: state.currentMusic,
    playing: state.playing,
    volume: state.volume,
    playMode: state.playMode,
    showMusicDetail: state.showMusicDetail,
    likesList: state.collector ? state.collector.foundList[0].tracks : null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePlayingStatus (status) {
      dispatch(getChangePlayingStatusAction(status));
    },
    changePlayMode (value) {
      dispatch(getChangePlayModeAction(value));
    },
    playPrevMusic () {
      dispatch(playPrevMusicAction());
    },
    playNextMusic () {
      dispatch(playNextMusicAction());
    },
    toggleShowMusicDetail () {
      dispatch(toggleShowMusicDetail());
    },
    handleAddToLikeList (value) {
      dispatch(getAddToLikeListAction(value));
    },
    /**
     * 隐藏 *歌手详情* *歌曲列表* *歌曲详情*
     */
    handleHideAll () {
      dispatch(getHideAllAction());
    },
    handleChangeVolume (value) {
      dispatch(getChangeVolumeAction(value));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Player)
);


/**
 * 点击歌曲播放逻辑：
 * 1. 点击歌曲的时候使用 getChangeCurrentMusic
 * 2. 使用 redux-thunk 中间件，在 actoin 中发出获取歌曲 url 的请求
 * 3. 获取 url 之后在 action 中直接调用 actionCreator 中的 changeCurrentMusicAction 来对 redux 中的 currentMusic 进行修改
 *
 * 点击下一首：
 * 1. 修改 currentIndex 也就是前播放列表 playList 中的歌曲索引
 *    1.
 * 2. 更改 redux 中的 currentMusic 修改为 playList[currentIndex]
 * 3. 重复 播放逻辑
 *
 * 播放完当前歌曲下一首：
 */
