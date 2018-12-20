import React, { Component } from 'react';
// import {  Route, Link } from 'react-router-dom';
import { getRecommendList } from '../../api/recommend';

import './style.scss';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: []
    };
  }

  componentWillMount () {
    getRecommendList().then(({ data }) => {
      console.log('res', data);
      this.setState(() => ({
        recommendList: data.playlists
      }));
    });
  }

  renderRecommendList = () => {
    return this.state.recommendList.map(item => {
      return (
        <li>
          <div className="list-img-container">
            <i className="iconfont icon-play"></i>
            <img className="list-img" src={item.coverImgUrl} alt=""/>
          </div>
          <p className="list-name">{item.name}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="recommend-container">
        <ul className="music-list">
          {this.renderRecommendList()}
        </ul>
      </div>
    );
  }
}

export default Recommend;
