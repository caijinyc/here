import React, { Component } from 'react';
import './style.scss';

export default class Loading extends Component {
  render () {
    return (
      <div className="base-loding">
        <div className="bouncing-loader">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}