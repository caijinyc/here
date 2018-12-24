import * as types from './actionTypes';

// 给一个初始的 state
const defaultState = {
  // 当前展示的歌单列表
  musicList: null,
  
  // 控制歌单列表的显示
  showMusicList: false,
  
  // 当前播放的歌曲
  currentMusic: null,

  // 播放状态
  playing: false,

  // 播放列表
  playList: [],

  // 当前播放索引
  currentIndex: 0
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
  return state;
};


function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
}