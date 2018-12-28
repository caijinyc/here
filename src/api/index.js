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

// 获取歌手单曲
// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%E8%8E%B7%E5%8F%96%E6%AD%8C%E6%89%8B%E5%8D%95%E6%9B%B2
export function getSingerInfo (id) {
  const url = HOST + `/artists?id=${id}`;
  return axios.get(url);
}

// 获取歌手专辑
// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%E8%8E%B7%E5%8F%96%E6%AD%8C%E6%89%8B%E4%B8%93%E8%BE%91
export function getSingerAlbums (id) {
  const url = HOST + `/artist/album?id=${id}`;
  return axios.get(url);
}