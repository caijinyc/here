import * as types from './actionTypes';
import { getMusicUrl, getMusicLyric, getSingerInfo, getAlbumInfo, getMusicDetail, getMusicListDetail } from '../api';
import $db from '../data';
import { findIndex } from '../common/js/utl';
import message from '../base/Message';

import { PLAY_MODE_TYPES } from '../common/js/config';

export const getChangeCollectorAction = (value) => ({
  type: types.CHANGE_COLLECTOR,
  value
});

export const getRefreshCollectorAction = (value) => ({
  type: types.REFRESH_COLLECTOR,
});

export const getChangeCurrentMusicListAction = (value) => ({
  type: types.CHANGE_CURRENT_MUSIC_LIST,
  value
});

/**
 * 获取歌单详情，并显示歌单
 * @param {number} id
 */
export const getMusicListDetailAction = (id) => {
  return (dispatch) => {
    dispatch(getChangeShowLoadingAction(true));
    getMusicListDetail(id).then(({ data }) => {
      // 将歌单传入 redux 中的 musicList
      data.playlist.tracks = formatMusicListTracks(data.playlist.tracks);
      dispatch(getChangeCurrentMusicListAction(data.playlist));
      dispatch(getChangeShowLoadingAction(false));
    }).catch(() => {
      dispatch(getChangeShowLoadingAction(false));
    });
  };
};

/**
 * 控制 Loading 的显示
 * @param {Boolean} value
 */
export const getChangeShowLoadingAction = (value) => ({
  type: types.CHANGE_SHOW_LOADING,
  value
});

/**
 * 隐藏 *歌曲列表*
 */
export const getHideMusicListAction = () => ({
  type: types.HIDE_MUSIC_LIST
});

/**
 * 隐藏 *歌手详情*
 */
export const getHideSingerInfoAction = () => ({
  type: types.HIDE_SINGER_INFO
});

/**
 * 隐藏 *歌手详情* *歌曲列表* *歌曲详情*
 */
export const getHideAllAction = () => ({
  type: types.HIDE_ALL
});

/**
 * 开关：显示 / 隐藏 *歌曲详情*
 */
export const toggleShowMusicDetail = () => ({
  type: types.TOGGLE_SHOW_MUSIC_DETAIL
});

/**
 * 改变当前播放歌曲信息
 * @param {Object} value
 */
export const changeCurrentMusicAction = (value) => ({
  type: types.CHANGE_CURRENT_MUSIC,
  value
});

/**
 * 改变歌手信息
 * @param {Object} value
 */
export const changeSingerInfoAction = (value) => ({
  type: types.CHANGE_SINGER_INFO,
  value
});

/**
 * 获取歌手信息
 */
export const getSingerInfoAction = (singerId) => {
  return (dispatch) => {
    dispatch(getChangeShowLoadingAction(true));
    dispatch(changeSingerInfoAction(null));
    getSingerInfo(singerId).then((res) => {
      dispatch(changeSingerInfoAction(res.data));
      dispatch(getChangeShowLoadingAction(false));
    }).catch(() => {
      dispatch(getChangeShowLoadingAction(false));
      message.info('暂时不能查询到此歌手');
      dispatch(getHideSingerInfoAction());
    });
  };
};

/**
 * 获取专辑内容
 */
export const getAlbumInfoAction = (albumId) => {
  return (dispatch) => {
    dispatch(getChangeShowLoadingAction(true));
    getAlbumInfo(albumId).then(({ data: {album, songs} }) => {
      const list = {
        name: album.name,
        id: album.id,
        description: album.description ? album.description : '',
        coverImgUrl: album.picUrl,
        tracks: formatAlbumTracks(songs),
        company: album.company,
        publishTime: album.publishTime,
        artist: album.artist,
        type: album.type
      };
      dispatch(getChangeShowLoadingAction(false));
      dispatch(getChangeCurrentMusicListAction(list));

      // 隐藏歌手详情，歌手详情遮挡住专辑内容
      dispatch(getHideSingerInfoAction());
    }).catch(() => {
      dispatch(getChangeShowLoadingAction(false));
    });
  };
};

/**
 * 改变当前播放列表
 */
export const getChangePlayListAction = (value) => ({
  type: types.CHANGE_PLAY_LIST,
  value
});

/**
 * 清空播放列表
 */
export const emptyPlayList = () => {
  return (dispatch) => {
    const EMPTY_PLAY_LIST = [];
    const STOP = false;
    dispatch(getChangePlayListAction(EMPTY_PLAY_LIST));
    dispatch(getChangePlayingStatusAction(STOP));
  };
};

/**
 * 改变当前播放索引 currentIndex
 */
export const getChangeCurrentIndex = (index) => ({
  type: types.CHANGE_CURRENT_INDEX,
  index
});

/**
 * 改变音量
 */
export const getChangeVolumeAction = (value) => ({
  type: types.CHANGE_VOLUME,
  value
});

/**
 * 改变音乐播放状态
 * @param {Boolean} status
 */
export const getChangePlayingStatusAction = (status) => ({
  type: types.CHANGE_PLAYING_STATUS,
  status
});

/**
 * 改变音乐播放模式
 */
export const getChangePlayModeAction = (value) => ({
  type: types.CHANGE_PLAY_MODE,
  value
});

export const changeCurrentMusicLyric = (value) => ({
  type: types.CHANGE_CURRENT_MUSIC_LYRIC,
  value
});

function getCurrentMusicLyric () {
  return (dispatch, getState) => {
    const state = JSON.parse(JSON.stringify(getState()));
    const currentMusic = state.currentMusic;
    const id = currentMusic.id;
    // 清空之前的歌词
    dispatch(changeCurrentMusicLyric(null));

    // 获取新的歌词
    getMusicLyric(id).then(({ data }) => {
      dispatch(changeCurrentMusicLyric(data));
    });
  };
}

/**
 * **点击歌曲播放逻辑：**
 * 1. 点击歌曲的时候使用 getChangeCurrentMusic
 * 2. 使用 redux-thunk 中间件，在 actoin 中发出获取歌曲 url 的请求
 * 3. 获取 url 之后在 action 中直接调用 actionCreator 中的 changeCurrentMusicAction
 *    来对 redux 中的 currentMusic 进行修改
 */
export const getChangeCurrentMusic = (value, loadCacheMusic = false) => {
  return (dispatch, getState) => {
    const state = getState();
    const list = state.playList;
    // 从歌曲列表中寻找当前歌曲的 index
    const index = findIndex(list, value);
    // 当点击的歌曲是正在播放的歌曲，直接返回
    if (index === state.currentIndex && !loadCacheMusic) {
      return;
    }
    if (index >= 0) {
      // 如果 index >= 0 就直接修改 currentIndex
      dispatch(getChangeCurrentIndex(index));
    } else {
      // 如果没有这首歌
      // 1. push 这首歌到 playList 中
      // 2. 改变 index
      list.push(value);
      dispatch(getChangePlayListAction(list));
      dispatch(getChangeCurrentIndex(list.length - 1));
    }
    dispatch(changeCurrentMusicAction(value));
    dispatch(getCurrentMusicLyric());
    getMusicUrl(value.id).then(({ data: { data } }) => {
      if (!data[0].url) {
        message.info('歌曲暂无版权，我帮你换首歌吧');
        if (index !== list.length - 1) {
          dispatch(playNextMusicAction());
        }
        return;
      }
      value.musicUrl = data[0].url;
      dispatch(changeCurrentMusicAction(value));

      // 因为是打开程序的时候加载上次关闭的时候播放的歌，但是不能播放，所以需要暂停
      if (loadCacheMusic) {
        const STOP = false;
        dispatch(getChangePlayingStatusAction(STOP));
      }

      // 搜索的歌曲会没有图片，所以去歌曲详情弄一张图片回来
      if (!value.imgUrl) {
        getMusicDetail(value.id).then(({data}) => {
          value.imgUrl = data.songs[0].al.picUrl;
          dispatch(changeCurrentMusicAction(value));
        });
      }
    });
  };
};

export const playPrevMusicAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    let { currentIndex } = state;
    const { playList } = state;
    const length = playList.length;
    if (length === 0 || length === 1) {
      return;
    }
    if (state.playMode === PLAY_MODE_TYPES.RANDOM_PLAY) {
      // 返回值不能等于原来的 index
      currentIndex = random(currentIndex, length);
    } else if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = length - 1;
    }
    dispatch(getChangeCurrentMusic(playList[currentIndex]));
    dispatch(getChangeCurrentIndex(currentIndex));
  };
};

export const playNextMusicAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    let { currentIndex } = state;
    const { playList } = state;
    const length = playList.length;
    if (length === 0 || length === 1) {
      return;
    }
    if (state.playMode === PLAY_MODE_TYPES.RANDOM_PLAY) {
      currentIndex = random(currentIndex, length);
    } else if (currentIndex < length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    dispatch(getChangeCurrentMusic(playList[currentIndex]));
    dispatch(getChangeCurrentIndex(currentIndex));
  };
};

export const getDeleteMusicAction = (item) => {
  return (dispatch, getState) => {
    const state = getState();
    let { currentIndex } = JSON.parse(JSON.stringify(state));
    const { playList } = JSON.parse(JSON.stringify(state));
    const index = findIndex(playList, item);
    playList.splice(index, 1);
    if (index < currentIndex) {
      currentIndex--;
      dispatch(getChangeCurrentIndex(currentIndex));
    } else if (index === currentIndex) {
      // 先播放下一首
      dispatch(playNextMusicAction());
      // 然后将 currentIndex 修改回来
      dispatch(getChangeCurrentIndex(currentIndex));
    }
    // 当 playList 已经没有的时候，删除掉当前音乐的 url
    // 音乐就会暂停播放
    if (playList.length === 0) {
      const { currentMusic } = JSON.parse(JSON.stringify(state));
      currentMusic.musicUrl = '';
      dispatch(changeCurrentMusicAction(currentMusic));
    }
    dispatch(getChangePlayListAction(playList));
  };
};

/**
 * 实现喜欢歌曲的功能
 */
export const getAddToLikeListAction = (value) => {
  return (dispatch, getState) => {
    let collector = null;
    $db.find({name: 'collector'}, (err, res) => {
      collector = res[0];
      const index = findIndex(collector.foundList[0].tracks, value);
      if (index < 0) {
        collector.foundList[0].tracks.unshift(value);
        message.info('已经加入到喜欢的歌曲中');
      } else {
        collector.foundList[0].tracks.splice(index, 1);
      }
      $db.update({ name: 'collector' }, collector, () => {
        dispatch(getChangeCollectorAction(collector));
      });
    });
  };
};

/**
 * 收藏 / 取消收藏 歌单
 */
export const getToggleCollectPlaylist = (list) => {
  return (dispatch) => {
    $db.find({ name: 'collector' }, (err, res) => {
      const collector = res[0];
      const index = findIndex(collector.collectList, list);
      if (index < 0) {
        collector.collectList.push(list);
        dispatch(getChangeCollectorAction(collector));
        $db.update({ name: 'collector' }, collector, () => {
          message.info('收藏歌单成功');
        });
      } else {
        collector.collectList.splice(index, 1);
        dispatch(getChangeCollectorAction(collector));
        $db.update({ name: 'collector' }, collector);
      }
    });
  };
};

/**
 * 加载缓存信息
 */
export const getLoadCacheAction = (cache) => {
  return (dispatch) => {
    dispatch(getChangePlayListAction(cache.playList));
    dispatch(getChangeVolumeAction(cache.volume));
    dispatch(getChangeCurrentIndex(cache.currentIndex));
    if (cache.currentIndex !== -1 && cache.playList.length !== 0) {
      dispatch(getChangeCurrentMusic(cache.playList[cache.currentIndex], true));
    }
  };
};

function random (index, length) {
  const res = Math.floor(Math.random() * length);
  if (res === index) {
    return random(index, length);
  }
  return res;
}

function formatAlbumTracks (list) {
  return list.map((item) => {
    const singers = item.ar.map((item) => {
      return {
        id: item.id,
        name: item.name
      };
    });
    return {
      id: item.id,
      musicName: item.name,
      imgUrl: item.al.picUrl,
      singers,
      album: {
        id: item.al.id,
        name: item.al.name
      }
    };
  });
}

function formatMusicListTracks (list) {
  return list.map((item) => {
    const singers = item.ar.map((item) => {
      return {
        id: item.id,
        name: item.name
      };
    });
    return {
      id: item.id,
      musicName: item.name,
      imgUrl: item.al.picUrl,
      singers,
      album: {
        id: item.al.id,
        name: item.al.name
      }
    };
  });
}
