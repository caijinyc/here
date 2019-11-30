import React, { Component } from 'react';
import './style.scss';

const { ipcRenderer: ipc } = window.require('electron');

const STYLE = {
  min: {
    backgroundColor: 'green',
    right: '100px'
  },
  max: {
    backgroundColor: 'yellow',
    right: '60px'
  },
  close: {
    backgroundColor: 'black',
    right: '20px'
  }
};

class TitleBtn extends Component {
  handleBtnClick = () => {
    ipc.send(this.props.type);
  }

  render () {
    return <div className="title-btn" style={STYLE[this.props.type]} onClick={this.handleBtnClick}></div>;
  }
}

export default TitleBtn;
