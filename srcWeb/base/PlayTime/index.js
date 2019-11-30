/**
 * 用来处理并显示歌曲播放时间
 * @currentTime 播放时间
 * @duration 歌曲时长
 */
import React, { Component } from 'react';

import './style.scss';

class PlayTime extends Component {
  format (interval = 0) {
    if (isNaN(interval)) {
      interval = 0;
    }
    let minute = Math.floor(interval / 60);
    if (minute < 10) {
      minute = '0' + minute;
    }
    let second = Math.floor(interval % 60);
    if (second < 10) {
      second = '0' + second;
    }
    return minute + ':' + second;
  }

  render () {
    return (
      <div className="play-time">
        <span className="current-time">
          {this.format(this.props.currentTime)}
        </span>
        /<span className="duration">{this.format(this.props.duration)}</span>
      </div>
    );
  }
}

PlayTime.defaultProps = {
  currentTime: 0,
  duration: 0
};

export default PlayTime;
