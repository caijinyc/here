import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lyric from 'lyric-parser';
import { If, Then, Else } from 'react-if';
import { toggleShowMusicDetail, getAlbumInfoAction } from '../../store/actionCreator';
import RenderSingrs from '../RenderSingers';
import { imageRatio } from '../../common/js/utl';

import './style.scss';

class MusicDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lyric: null,
      noLyric: false,
      currentLineNum: 0,
      musicTime: 0
    };
  }

  componentWillReceiveProps (nextProps) {
    // 如果下一个 props 没有 currentMusic 就直接返回
    if (!nextProps.currentMusicLyric) {
      return;
    }

    // 歌词为 暂无歌词时 设置为暂无歌词 --> 返回
    if (
      'nolyric' in nextProps.currentMusicLyric ||
      !('lrc' in nextProps.currentMusicLyric)
    ) {
      this.setState(() => ({
        noLyric: true
      }));
      return;
    }

    // 当上一个props 的歌词和 这个 props 的歌词一样时，直接返回
    const r =
      JSON.stringify(nextProps.currentMusicLyric) ===
      JSON.stringify(this.props.currentMusicLyric);
    if (r) {
      return;
    }

    // 这个时候歌词已经发生了变化
    if (this.state.lyric !== null) {
      // 如果之前已经有被处理过的歌词的话，先将原来的歌词暂停
      this.state.lyric.stop();
    }
    // 初始化新的歌词，并进行替换
    const lyric = new Lyric(
      nextProps.currentMusicLyric.lrc.lyric,
      this.handleLyric
    );
    this.setState(
      () => ({
        lyric,
        noLyric: false
      }),
      () => {
        // 初始化完成之后，播放当前歌词
        this.state.lyric.play();
        this.refs.lyricList.scrollTo(0, 0);
      }
    );
  }

  displayMusicDetailGetMusicTime = (time) => {
    this.setState(() => ({
      musicTime: time
    }), () => {
      if (this.state.lyric) {
        this.seek(this.state.musicTime);
      };
    });
  }

  togglePlay = () => {
    this.state.lyric.togglePlay();
  };

  seek = (startTime) => {
    this.state.lyric.seek(startTime * 1000);
  };

  renderLyric = () => {
    if (!this.state.lyric) {
      return;
    }
    return this.state.lyric.lines.map((item, index) => {
      return (
        <li
          key={index}
          className={[
            this.state.currentLineNum === index ? 'highlight' : '',
            'lyric-list'
          ].join(' ')}
        >
          {item.txt}
        </li>
      );
    });
  };

  handleLyric = ({ lineNum }) => {
    if (this.state.noLyric) {
      return;
    }
    this.setState(() => ({
      currentLineNum: lineNum
    }));
    if (lineNum > 5) {
      const parentDom = document.querySelector('.lyric-container');
      // const distance = parentDom.scrollHeight - (parentDom.childNodes[lineNum].offsetTop - 72);
      const distance =
        parentDom.childNodes[lineNum].offsetTop -
        72 -
        (parentDom.childNodes[5].offsetTop - 72);
      this.refs.lyricList.scrollTo(0, distance);
    } else {
      this.refs.lyricList.scrollTo(0, 0);
    }
  };

  render () {
    const { currentMusic, showMusicDetail } = this.props;
    return (
      <div className={showMusicDetail ? 'music-detail' : 'hide-music-detail'}>
        <button
          className="hide-music-detail-btn"
          onClick={this.props.handletoggleShowMusicDetail}
        >
          <i className="iconfont icon-cha" />
        </button>
        <div className="detail-container">
          <div className="left-contanier">
            <div className="img">
              <img src={currentMusic.imgUrl + imageRatio(250)} alt="" />
            </div>
          </div>
          <div className="music-right-container">
            <div className="music-info">
              <p className="music-name">{currentMusic.musicName}</p>
              <p className="singer-name" onClick={this.props.handletoggleShowMusicDetail}>
                歌手：
                <RenderSingrs singers={currentMusic.singers}/>
              </p>
              <p className="album-name" onClick={() => this.props.handleGetAlbumInfo(currentMusic.album.id)}>专辑：{currentMusic.album.name}</p>
            </div>
            <div className="lyric">
              <If condition={!this.state.noLyric}>
                <Then>
                  <ul className="lyric-container" ref="lyricList">
                    {this.renderLyric()}
                  </ul>
                </Then>
                <Else>
                  <p className="noLyric">暂无歌词</p>
                </Else>
              </If>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMusicDetail: state.showMusicDetail,
    currentMusic: state.currentMusic,
    currentMusicLyric: state.currentMusicLyric
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handletoggleShowMusicDetail () {
      dispatch(toggleShowMusicDetail());
    },
    handleGetAlbumInfo (albumId) {
      this.handletoggleShowMusicDetail();
      dispatch(getAlbumInfoAction(albumId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(MusicDetail);
