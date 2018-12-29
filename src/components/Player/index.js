/**
 * Player 组件
 * 只负责歌曲的播放，以及控制歌曲的播放模式
 * 不用关心歌曲列表，以及歌曲的播放顺序的逻辑处理
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { If, Then, Else } from 'react-if';
import {
  getChangePlayingStatusAction,
  playPrevMusicAction,
  playNextMusicAction,
  getChangePlayModeAction,
  getSingerInfoAction,
  toggleShowMusicDetail
} from '../../store/actionCreator';
import { PLAY_MODE_TYPES } from '../../common/js/config';

import ProgressBar from '../../base/ProgressBar';
import PlayTime from '../../base/PlayTime';
import PlayList from '../../base/PlayList';
import MusicDetail from '../../base/MusicDetail';

import './style.scss';

const DEFAULT_TIME = 0;
const PLAYING_STATUS = {
  playing: true,
  paused: false
};
const DEFAULT_VOLUME = 0.35;

class Player extends Component {
  constructor(props) {
    super(props);
    this.playListRef = React.createRef();
    this.state = {
      duration: DEFAULT_TIME,
      currentTime: DEFAULT_TIME,
      move: false,
      percent: 0,
      volume: DEFAULT_VOLUME,
      showPlayList: false
    };
  }

  componentDidMount() {
    this.refs.audio.volume = this.state.volume;
  }

  componentWillReceiveProps({ playing }) {
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
    this.setState(() => {
      return {
        volume: percent
      };
    });
  };

  handleChangePlayingStatus(status) {
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

  render() {
    const { currentMusic } = this.props;

    return (
      <div className="player-container">
        <div className="player-left-container">
          {this.renderPlayerControl()}
          <div className="music-img" onClick={this.handleShowMusicDetial}>
            <img src={currentMusic ? currentMusic.imgUrl : ''} alt="" />
          </div>
        </div>
        <div className="player-middle-container">
          <div className="music-info">
            <p className="music-name">
              {currentMusic ? currentMusic.musicName : ''}
            </p>
            <p className="singer-name" onClick={() => this.props.handleGetSingerInfoAction(currentMusic.singer.id) }>
              {currentMusic ? currentMusic.singer.name : ''}
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
          </div>
          <div className="audio-volume">
            <i className="iconfont icon-volume-up" />
            <ProgressBar
              percent={this.state.volume}
              percentChange={this.volumeChange}
              percentChangeEnd={this.volumeChange}
            />
          </div>
        </div>
        <If condition={this.props.showMusicDetail}>
          <div>
          <div className="music-detail-background">
            <img src={currentMusic ? currentMusic.imgUrl : ''} alt="" />
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
    playMode: state.playMode,
    showMusicDetail: state.showMusicDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePlayingStatus(status) {
      dispatch(getChangePlayingStatusAction(status));
    },
    changePlayMode(value) {
      dispatch(getChangePlayModeAction(value));
    },
    playPrevMusic() {
      dispatch(playPrevMusicAction());
    },
    playNextMusic() {
      dispatch(playNextMusicAction());
    },
    toggleShowMusicDetail() {
      dispatch(toggleShowMusicDetail());
    },
    handleGetSingerInfoAction(singerId) {
      dispatch(getSingerInfoAction(singerId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

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
