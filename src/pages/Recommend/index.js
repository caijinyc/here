import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecommendList, getMusicListDetail } from '../../api';
import { formatPlayCount } from '../../common/js/utl';
import { getChangeCurrentMusicListAction } from '../../store/actionCreator';

import './style.scss';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: []
    };
  }

  componentWillMount() {
    // 获取推荐歌单
    getRecommendList().then(({ data }) => {
      this.setState(() => ({
        recommendList: data.playlists
      }));
    });
  }

  // 获取歌单详情
  handleGetMusicListDetail = (id) => {
    getMusicListDetail(id).then(({ data }) => {
      // 将歌单传入 vuex 中的 musicList
      data.playlist.tracks = formatTracks(data.playlist.tracks);
      console.log('data', data.playlist);
      this.props.handleChangeCurrentMusicList(data.playlist);
    });
  };

  // 歌单列表展示
  renderRecommendList = () => {
    return this.state.recommendList.map((item) => {
      return (
        <li key={item.id}>
          <div
            className="list-img-container"
            onClick={() => this.handleGetMusicListDetail(item.id)}
          >
            <i className="iconfont icon-play" />
            <img className="list-img" src={item.coverImgUrl} alt="" />
            <div className="played-counts">
              <i className="iconfont icon-erji"></i>
              <span>{ formatPlayCount(item.playCount) }</span>
            </div>
            <div className="shadow"></div>
          </div>
          <p className="list-name">{item.name}</p>
        </li>
      );
    });
  };

  render() {
    return (
      <div className={['recommend-container', (this.props.showMusicList || this.props.showSingerInfo) ? 'hide-recommend-container' : ''].join(' ')}>
        <ul className="music-list">{this.renderRecommendList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMusicList: state.showMusicList,
    showSingerInfo: state.showSingerInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeCurrentMusicList(list) {
      const action = getChangeCurrentMusicListAction(list);
      dispatch(action);
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Recommend)
);

function formatTracks(list) {
  return list.map((item) => {
    return {
      id: item.id,
      musicName: item.name,
      imgUrl: item.al.picUrl,
      singer: {
        id: item.ar[0].id,
        name: item.ar[0].name
      },
      album: {
        id: item.al.id,
        name: item.al.name
      }
    };
  });
}
