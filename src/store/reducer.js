import * as types from './actionTypes';

import { PLAY_MODE_TYPES } from '../common/js/config';

// 给一个初始的 state
const defaultState = {
  // 当前展示的歌单列表
  musicList: null,
  
  // 控制歌单列表的显示
  showMusicList: false,

  // 控制歌曲详情的显示
  showMusicDetail: false,
  
  // 当前播放的歌曲
  currentMusic: {
    id: 442009238,
    singer: [
      {
        id: 12195169,
        name: 'Atta Girl',
        tns: [],
        alias: []
      }
    ],
    musicName: '上野公园',
    albumName: 'Everyone Loves You When You Were Still A Kid',
    albumImgUrl: 'http://p2.music.126.net/64JozXeLm7ErtXpwGrwwEw==/109951162811190850.jpg',
    musicUrl: ''
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
};

// state 里面存放了所有的数据
// reducer 可以接收 state，但是绝对不可以修改 state
export default (state = defaultState, action) => {
  if (action.type === types.CHANGE_CURRENT_MUSIC_LIST) {
    const newState = deepCopy(state);
    newState.musicList = action.value;
    newState.showMusicList = true;
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
    return newState;
  }
  if (action.type === types.CHANGE_CURRENT_INDEX) {
    const newState = deepCopy(state);
    newState.currentIndex = action.index;
    return newState;
  }
  if (action.type === types.CHANGE_PLAY_MODE) {
    const newState = deepCopy(state);
    newState.playMode = action.value;
    return newState;
  }
  if (action.type === types.CHANGE_SHOW_MUSIC_DETAIL) {
    const newState = deepCopy(state);
    newState.showMusicDetail = !newState.showMusicDetail;
    return newState;
  }
  if (action.type === types.CHANGE_CURRENT_MUSIC_LYRIC) {
    const newState = deepCopy(state);
    newState.currentMusicLyric = action.value;
    return newState;
  }
  return state;
};


function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
}