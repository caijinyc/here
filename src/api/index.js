import axios from 'axios';
import { HOST } from '../common/js/config';

export function getRecommendList (before = null) {
  if (before) {

  }
  // const url = HOST + `/top/playlist/highquality?${before}&limit=30`;
  const url = HOST + '/top/playlist/highquality?limit=30';
  return axios.get(url);
}

export function getMusicListDetail (id) {
  const url = HOST + `/playlist/detail?id=${id}`;
  return axios.get(url);
}

export function getMuiscDetail (id) {
  const url = HOST + `/song/url?id=${id}`;
  return axios.get(url);
}