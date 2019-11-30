import React, { Component } from 'react';
import { connect } from 'react-redux';
import { If, Then, Else } from 'react-if';
import { formatPlayCount, imageRatio } from '../../common/js/utl';
import {
  getChangePlayListAction,
  getChangeCurrentIndex,
  playNextMusicAction,
  getToggleCollectPlaylist
} from '../../store/actionCreator';
import './style.scss';
import ShowList from '../../base/ShowList';
import Dialog from '../../base/Dialog';

const COLLECT = 0,
  FOUND = 1;

class Collect extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentList: this.props.collector
        ? this.props.collector.foundList[0]
        : null,
      listType: FOUND,
      activeList: 0,
      showDialog: false,
      willDelList: null
    };
  }

  handleChangeCurrentList = (list, type) => {
    this.refs.pageCollect.scrollTo(0, 0);
    this.setState(() => ({
      currentList: list,
      listType: type
    }));
  };

  handleDelCollectPlaylist = (list) => {
    this.setState(() => ({
      showDialog: true,
      willDelList: list
    }));
  };

  handleClickDialog = (bol) => {
    if (bol) {
      this.props.handleToggleCollectPlaylist(this.state.willDelList);
    }
    this.setState(() => ({
      showDialog: false
    }));
  };

  renderCollectList = () => {
    const collector = this.props.collector;
    if (!collector) {
      return null;
    }
    return collector.collectList.map((item, index) => {
      return (
        <li key={item.id}>
          <i className="iconfont icon-yinleliebiao" />
          <span
            onClick={() =>
              this.handleChangeCurrentList(
                collector.collectList[index],
                COLLECT
              )
            }
          >
            {item.name}
          </span>
          <i
            className="iconfont icon-del"
            onClick={() => this.handleDelCollectPlaylist(item)}
          />
        </li>
      );
    });
  };

  renderFoundList = () => {
    const collector = this.props.collector;
    if (!collector) {
      return null;
    }
    return collector.foundList.map((item, index) => {
      if (index === 0) {
        return (
          <li
            key={item.name}
            onClick={() =>
              this.handleChangeCurrentList(collector.foundList[index], FOUND)
            }
          >
            <i className="iconfont icon-will-love" />
            <span>{item.name}</span>
          </li>
        );
      }
      return (
        <li
          key={item.name}
          onClick={() =>
            this.handleChangeCurrentList(collector.foundList[index], FOUND)
          }
        >
          <i className="iconfont icon-yinleliebiao" />
          <span>{item.name}</span>
        </li>
      );
    });
  };

  renderFoundListImg = (tracks) => {
    for (let i = 0; i < tracks.length; i++) {
      if (tracks[i].imgUrl) {
        return <img src={tracks[i].imgUrl + imageRatio(153)} alt="歌单图片" />;
      }
    }
  };

  renderCurrentList = () => {
    const list = this.state.currentList;
    if (!list) {
      return null;
    }
    return (
      <div>
        <div className="list-info">
          <div className="list-img">
            <If condition={this.state.listType === COLLECT}>
              <Then>
                <img src={list.coverImgUrl + imageRatio(153)} alt="歌单图片" />
              </Then>
              <Else>
                <div className="found-list">
                  <div className="filter" />
                  {this.renderFoundListImg(list.tracks)}
                  <i className="iconfont icon-will-love" />
                </div>
              </Else>
            </If>
          </div>
          <div className="list-info-right">
            <h1 className="name">{list.name}</h1>
            <If
              condition={
                typeof list.description === 'string' &&
                list.description.length > 0
              }
            >
              <p className="desc">简介：{list.description}</p>
            </If>
            <div className="count">
              <p className="track-count">
                歌曲数 <span>{list.tracks.length}</span>
              </p>
              <If condition={typeof list.playCount === 'number'}>
                <p className="track-count">
                  收听数 <span>{formatPlayCount(list.playCount)}</span>
                </p>
              </If>
            </div>
            <button
              className="play-btn"
              onClick={() => this.props.changeMusicList(list.tracks)}
            >
              <i className="iconfont icon-bofangicon" />
              <p>播放全部</p>
            </button>
          </div>
        </div>
        <div className="tracks-contianer">
          <ShowList
            showLikeBtn={false}
            showDislikeBtn={true}
            list={list.tracks}
          />
        </div>
      </div>
    );
  };

  render () {
    return (
      <div
        className={[
          'page-collect',
          this.props.showMusicList || this.props.showSingerInfo
            ? 'hide-page-collect'
            : ''
        ].join(' ')}
        ref="pageCollect"
      >
        <div className="left-nav">
          <div className="nav-collect-found-list">
            <p className="title">创建的歌单</p>
            <ul>{this.renderFoundList()}</ul>
          </div>
          <div className="nav-collect-list-container">
            <p className="title">收藏的歌单</p>
            <ul>{this.renderCollectList()}</ul>
          </div>
        </div>
        <div className="collect-container">{this.renderCurrentList()}</div>
        <If condition={this.state.showDialog}>
          <Dialog
            text="确定要删除此歌单吗？"
            handleClickBtn={this.handleClickDialog}
          />
        </If>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collector: state.collector,
    showMusicList: state.showMusicList,
    showSingerInfo: state.showSingerInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeMusicList (value) {
      dispatch(getChangePlayListAction(value));
      dispatch(getChangeCurrentIndex(-1));
      dispatch(playNextMusicAction());
    },
    handleToggleCollectPlaylist (list) {
      dispatch(getToggleCollectPlaylist(list));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collect);
