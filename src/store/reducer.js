import * as types from './actionTypes';
import $db from '../data';

import { PLAY_MODE_TYPES } from '../common/js/config';

const DEFAULT_VOLUME = 0.35;

// 给一个初始的 state
const defaultState = {
  // 当前展示的歌单列表
  musicList: null,

  // 控制歌单列表的显示
  showMusicList: false,

  // 控制歌曲详情的显示
  showMusicDetail: false,

  // 控制歌手详情的显示
  showSingerInfo: false,

  // 歌手详情
  singerInfo: null,

  // 当前播放的歌曲
  currentMusic: {
    id: 442009238,
    musicName: '上野公园',
    musicUrl: '',
    imgUrl:
      'http://p2.music.126.net/64JozXeLm7ErtXpwGrwwEw==/109951162811190850.jpg',
    singers: [{
      id: 12195169,
      name: 'Atta Girl'
    }],
    album: {
      id: null,
      name: 'Everyone Loves You When You Were Still A Kid'
    }
  },

  currentMusicLyric: null,

  // 播放状态
  playing: false,

  // 播放列表
  playList: [],

  // 当前播放索引
  currentIndex: 0,

  // 播放模式
  playMode: PLAY_MODE_TYPES.SEQUENCE_PLAY,

  // 收藏
  collector: null,

  // 显示全局的 Loding
  showLoading: false,

  // 音量
  volume: DEFAULT_VOLUME
};

// state 里面存放了所有的数据
// reducer 可以接收 state，但是绝对不可以修改 state
export default (state = defaultState, action) => {
  if (action.type === types.CHANGE_CURRENT_MUSIC_LIST) {
    const newState = deepCopy(state);
    newState.musicList = action.value;
    if (action.value) {
      newState.showMusicList = true;
    }
    return newState;
  }
  if (action.type === types.HIDE_MUSIC_LIST) {
    const newState = deepCopy(state);
    newState.showMusicList = false;
    return newState;
  }
  if (action.type === types.CHANGE_CURRENT_MUSIC) {
    const newState = deepCopy(state);
    newState.currentMusic = action.value;
    newState.playing = true;
    return newState;
  }
  if (action.type === types.CHANGE_PLAYING_STATUS) {
    const newState = deepCopy(state);
    newState.playing = action.status;
    return newState;
  }
  if (action.type === types.CHANGE_PLAY_LIST) {
    const newState = deepCopy(state);
    newState.playList = action.value;
    cacheLastUseInfo({ playList: action.value });
    return newState;
  }
  if (action.type === types.CHANGE_CURRENT_INDEX) {
    const newState = deepCopy(state);
    newState.currentIndex = action.index;
    cacheLastUseInfo({ currentIndex: action.index, playList: newState.playList });
    return newState;
  }
  if (action.type === types.CHANGE_PLAY_MODE) {
    const newState = deepCopy(state);
    newState.playMode = action.value;
    return newState;
  }
  if (action.type === types.TOGGLE_SHOW_MUSIC_DETAIL) {
    const newState = deepCopy(state);
    newState.showMusicDetail = !newState.showMusicDetail;
    return newState;
  }
  if (action.type === types.CHANGE_CURRENT_MUSIC_LYRIC) {
    const newState = deepCopy(state);
    newState.currentMusicLyric = action.value;
    return newState;
  }
  if (action.type === types.CHANGE_SINGER_INFO) {
    const newState = deepCopy(state);
    newState.singerInfo = action.value;
    newState.showSingerInfo = true;
    return newState;
  }
  if (action.type === types.HIDE_SINGER_INFO) {
    const newState = deepCopy(state);
    newState.showSingerInfo = false;
    return newState;
  }
  if (action.type === types.CHANGE_COLLECTOR) {
    const newState = deepCopy(state);
    newState.collector = action.value;
    return newState;
  }
  if (action.type === types.REFRESH_COLLECTOR) {
    const newState = deepCopy(state);
    newState.collector = getNewCollector();
    return newState;
  }
  if (action.type === types.CHANGE_SHOW_LOADING) {
    const newState = deepCopy(state);
    newState.showLoading = action.value;
    return newState;
  }
  if (action.type === types.HIDE_ALL) {
    const newState = deepCopy(state);
    newState.showMusicList = false;
    newState.showSingerInfo = false;
    newState.showMusicDetail = false;
    return newState;
  }
  if (action.type === types.CHANGE_VOLUME) {
    const newState = deepCopy(state);
    newState.volume = action.value;
    cacheLastUseInfo({ volume: action.value });
    return newState;
  }
  return state;
};

function deepCopy (val) {
  return JSON.parse(JSON.stringify(val));
}

function getNewCollector () {
  let newCollector = null;
  $db.find({ name: 'collector' }, function (err, res) {
    newCollector = res[0];
  });
  return newCollector;
}

function cacheLastUseInfo (obj = {}) {
  let cache = null, needUpdate = false;
  $db.find({ name: 'cache' }, (err, res) => {
    cache = res[0];
    if (obj.volume !== undefined) {
      cache.cacheValue.volume = obj.volume;
      needUpdate = true;
    }
    if (obj.playList && JSON.stringify(obj.playList) !== JSON.stringify(cache.cacheValue.playList)) {
      cache.cacheValue.playList = obj.playList;
      needUpdate = true;
    }
    if (obj.currentIndex !== undefined && obj.currentIndex !== cache.cacheValue.currentIndex) {
      cache.cacheValue.currentIndex = obj.currentIndex;
      needUpdate = true;
    }
    if (needUpdate) {
      $db.update({ name: 'cache' }, cache);
    }
  });
}
