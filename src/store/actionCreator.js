import * as types from './actionTypes';
import { getMuiscDetail } from '../api';

export const getChangeCurrentMusicListAction = value => ({
  type: types.CHANGE_CURRENT_MUSIC_LIST,
  value
});

/**
 * 隐藏/显示歌曲列表
 */
export const getHideMusicListAction = () => ({
  type: types.HIDE_MUSIC_LIST
});

/**
 * 改变当前播放歌曲信息
 * @param {Object} value
 */
export const changeCurrentMusicAction = value => ({
  type: types.CHANGE_CURRENT_MUSIC,
  value
});

/**
 * 改变当前播放列表
 */
export const getChangePlayListAction = value => ({
  type: types.CHANGE_PLAY_LIST,
  value
});

/**
 * 改变当前播放索引 currentIndex
 */
export const getChangeCurrentIndex = index => ({
  type: types.CHANGE_CURRENT_INDEX,
  index
});

/**
 * 改变音乐播放状态
 * @param {Boolean} status
 */
export const getChangePlayingStatusAction = status => ({
  type: types.CHANGE_PLAYING_STATUS,
  status
});

/**
 * **点击歌曲播放逻辑：**
 * 1. 点击歌曲的时候使用 getChangeCurrentMusic
 * 2. 使用 redux-thunk 中间件，在 actoin 中发出获取歌曲 url 的请求
 * 3. 获取 url 之后在 action 中直接调用 actionCreator 中的 changeCurrentMusicAction
 *    来对 redux 中的 currentMusic 进行修改
 */
export const getChangeCurrentMusic = value => {
  return dispatch => {
    let musicDetail = null;
    getMuiscDetail(value.id).then(({ data: { data } }) => {
      musicDetail = {
        id: value.id,
        singer: value.ar,
        musicName: value.name,
        albumName: value.al.name,
        albumImgUrl: value.al.picUrl,
        musicUrl: data[0].url,
        duration: value.time
      };
      dispatch(changeCurrentMusicAction(musicDetail));
    });
  };
};

export const playPrevMusicAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    let { playList, currentIndex } = state;
    if (playList.length === 0) {
      return;
    }
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = playList.length - 1;
    }
    dispatch(getChangeCurrentMusic(playList[currentIndex]));
    dispatch(getChangeCurrentIndex(currentIndex));
  };
};

export const playNextMusicAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    let { playList, currentIndex } = state;
    if (playList.length === 0) {
      return;
    }
    if (currentIndex < playList.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    dispatch(getChangeCurrentMusic(playList[currentIndex]));
    dispatch(getChangeCurrentIndex(currentIndex));
  };
};


