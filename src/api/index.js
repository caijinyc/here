import axios from 'axios';
import { HOST } from '../common/js/config';

// 获取推荐歌单
export function getRecommendList (before = null) {
  if (before) {

  }
  // const url = HOST + `/top/playlist/highquality?${before}&limit=30`;
  const url = HOST + '/top/playlist/highquality?limit=30';
  return axios.get(url);
}

// 获取歌单详情
export function getMusicListDetail (id) {
  const url = HOST + `/playlist/detail?id=${id}`;
  return axios.get(url);
}

// 获取音乐播放地址
export function getMuiscDetail (id) {
  const url = HOST + `/song/url?id=${id}`;
  return axios.get(url);
}

// 获取歌曲歌词
export function getMusicLyric (id) {
  const url = HOST + `/lyric?id=${id}`;
  return axios.get(url);
}