import axios from 'axios';
import { HOST } from '../common/js/config';

// 获取推荐歌单
export function getRecommendList (updateTime = null) {
  let url = '';
  if (updateTime) {
    url = HOST + `/top/playlist/highquality?before=${updateTime}&limit=30`;
  } else {
    url = HOST + '/top/playlist/highquality?limit=30';
  }
  return axios.get(url);
}

// 获取歌单详情
export function getMusicListDetail (id) {
  const url = HOST + `/playlist/detail?id=${id}`;
  return axios.get(url);
}

// 获取音乐播放地址
export function getMusicUrl (id) {
  const url = HOST + `/song/url?id=${id}`;
  return axios.get(url);
}

// 获取音乐详情（歌曲没有图片的时候要用）
export function getMusicDetail (id) {
  const url = HOST + `/song/detail?ids=${id}`;
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

// 获取专辑详情
// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%E8%8E%B7%E5%8F%96%E4%B8%93%E8%BE%91%E5%86%85%E5%AE%B9
export function getAlbumInfo (id) {
  const url = HOST + `/album?id=${id}`;
  return axios.get(url);
}

/**
 * 获取排行榜所有榜单
 * https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%E6%89%80%E6%9C%89%E6%A6%9C%E5%8D%95
 */
export function getAllRank () {
  const url = HOST + '/toplist';
  return axios.get(url);
}
