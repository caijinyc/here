/**
 * 歌曲播放进度条 Player 组件使用
 * 支持：
 *  1. 拖动进度条跳转进度
 *  2. 点击进度条跳转进度
 *  3. 显示播放进度
 * @percent 接收歌曲播放进度并显示
 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './style.scss';

class ProgressBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mouseDown: false,

      // 进度条距离游览器左边的距离
      // 作用：用来计算拖动的百分比
      controlBarOffestLeft: null
    };
  }

  componentDidMount () {
    this.setState(() => ({
      controlBarOffestLeft: offset(this.refs.controlBar, 'left')
    }));
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    // 监听窗口大小变化，实时改变进度条距离游览器左边的距离
    this.setState(() => ({
      controlBarOffestLeft: offset(this.refs.controlBar, 'left')
    }));
  };

  progressMouseDown = () => {
    document.addEventListener('mousemove', this.progressMouseMove, false);
    document.addEventListener('mouseup', this.progressMouseUp, false);
  };

  progressMouseMove = (e) => {
    // 获得拖动后的百分比 = 拖动的距离（鼠标距离游览器左边的距离 - 进度条距离左边的距离 = 实际的距离） / 进度条的长度
    let percent =
      (e.clientX - this.state.controlBarOffestLeft) /
      this.refs.controlBar.clientWidth;
    // 因为拖动时会超过进度条的范围，所以需要给一个临界值 0 和 1
    if (percent < 0) {
      percent = 0;
    } else if (percent > 1) {
      percent = 1;
    }

    // 告诉父组件当前移动的百分比
    this.props.percentChange(percent);
  };

  progressMouseUp = (e) => {
    document.removeEventListener('mousemove', this.progressMouseMove, false);
    document.removeEventListener('mouseup', this.progressMouseUp, false);

    // 同样的方式，获得最后拖动后的百分比 = 拖动的距离 / 进度条的长度
    let percent =
      (e.clientX - this.state.controlBarOffestLeft) /
      this.refs.controlBar.clientWidth;

    if (percent < 0) {
      percent = 0;
    } else if (percent > 1) {
      percent = 1;
    }
    this.props.percentChangeEnd(percent);
  };

  clickToChangePercent = (e) => {
    let percent =
      (e.clientX - this.state.controlBarOffestLeft) /
      this.refs.controlBar.clientWidth;

    if (percent < 0) {
      percent = 0;
    } else if (percent > 1) {
      percent = 1;
    }
    this.props.percentChangeEnd(percent);
  };

  render () {
    return (
      <div className="progress-bar" onClick={this.clickToChangePercent}>
        <div className="add-click-scope">
          <div className="control-bar" ref="controlBar">
            <div
              className="elapsed-bar"
              style={{ width: this.props.percent * 100 + '%' }}
            >
              <span className="btn" onMouseDown={this.progressMouseDown} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;

/**
 * https://blog.csdn.net/w390058785/article/details/80461845
 * 全面解析offsetLeft、offsetTop
 *
 * 作用：获取距离 body 的距离
 * @param {DOM} obj
 * @param {*} direction
 */
function offset (obj, direction) {
  // 将top,left首字母大写,并拼接成 offsetTop,offsetLeft
  const offsetDir =
    'offset' + direction[0].toUpperCase() + direction.substring(1);

  let realNum = obj[offsetDir];
  let positionParent = obj.offsetParent; // 获取上一级定位元素对象

  while (positionParent != null) {
    realNum += positionParent[offsetDir];
    positionParent = positionParent.offsetParent;
  }
  return realNum;
}
