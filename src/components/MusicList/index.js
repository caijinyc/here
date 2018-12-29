/**
 * 歌曲展示组件，
 * 用于显示歌曲列表中的所有歌曲
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getChangePlayListAction,
  getChangeCurrentIndex,
  playNextMusicAction,
  getChangeCollectorAction
} from '../../store/actionCreator';
import { If } from 'react-if';
import { formatDate, findIndex } from '../../common/js/utl';
import $db from '../../data';

import ShowList from '../../base/ShowList';

import './style.scss';

class MusicList extends Component {
  handleCollectList = () => {
    const musicList = this.props.musicList;
    $db.find({ name: 'collector' }, (err, res) => {
      const collector = res[0];
      const index = findIndex(collector.collectList, musicList);
      if (index < 0) {
        collector.collectList.push(musicList);
        $db.update({ name: 'collector' }, collector, () => {
          this.props.handlehangeCollector(collector);
        });
      } else {
        return null;
      }
    });
  };

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
        <If condition={musicList.type === '专辑'}>
          <div className="album-info">
            <p className="artist">
              {musicList.artist
                ? musicList.artist.name
                  ? musicList.artist.name
                  : ''
                : ''}
            </p>
            <If condition={typeof musicList.publishTime === 'number'}>
              <p className="publish-time">
                {formatDate(musicList.publishTime)}
              </p>
            </If>
            <If
              condition={
                typeof musicList.company === 'string' &&
                musicList.company.length > 0
              }
            >
              <p className="company">发行：{musicList.company}</p>
            </If>
          </div>
        </If>
        <p className="description">{description}</p>
        <div className="control">
          <i
            className="iconfont icon-play1"
            onClick={() =>
              this.props.changeMusicList(
                formatTracks(this.props.musicList.tracks)
              )
            }
          />
          <i
            className="iconfont icon-folder"
            onClick={this.handleCollectList}
          />
        </div>
      </div>
    );
  }

  render() {
    const musicList = this.props.musicList;
    return (
      <div
        className={
          this.props.showMusicList && !this.props.showSingerInfo
            ? 'music-list-container'
            : 'hide-music-list-container'
        }
      >
        {this.renderListInfo()}
        <ShowList
          className="show-list-container"
          list={musicList ? formatTracks(musicList.tracks) : []}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    musicList: state.musicList,
    showMusicList: state.showMusicList,
    showSingerInfo: state.showSingerInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeMusicList(value) {
      dispatch(getChangePlayListAction(value));
      dispatch(getChangeCurrentIndex(-1));
      dispatch(playNextMusicAction());
    },
    handlehangeCollector(value) {
      dispatch(getChangeCollectorAction(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicList);

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
