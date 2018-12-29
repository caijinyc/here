import axios from 'axios';
import {HOST} from '../common/js/config';

export const getHotSearch = () => {
  const url = HOST + '/search/hot';
  return axios.get(url);
};

export const getSearchResult = (searchName, type) => {
  const url = HOST + `/search?keywords=${searchName}&type=${type}&limit=80`;
  return axios.get(url);
};