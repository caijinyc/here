import axios from 'axios';
import { HOST } from '../common/js/config';

export function getRecommendList (before = null) {
  if (before) {

  }
  // const url = HOST + `/top/playlist/highquality?${before}&limit=30`;
  const url = HOST + '/top/playlist/highquality?limit=30';
  return axios.get(url);
}