import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getRecommendList, getMusicListDetail } from '../../api';
import { connect } from 'react-redux';
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
  handleGetMusicListDetail = id => {
    getMusicListDetail(id).then(({ data }) => {
      // 将歌单传入 vuex 中的 musicList
      this.props.handleChangeCurrentMusicList(data.playlist);
    });
  };

  // 歌单列表展示
  renderRecommendList = () => {
    return this.state.recommendList.map(item => {
      return (
        <li key={item.id}>
          <div
            className="list-img-container"
            onClick={() => this.handleGetMusicListDetail(item.id)}
          >
            <i className="iconfont icon-play" />
            <img className="list-img" src={item.coverImgUrl} alt="" />
          </div>
          <p className="list-name">{item.name}</p>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="recommend-container">
        <ul className="music-list">{this.renderRecommendList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
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
