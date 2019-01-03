import React, { Component } from 'react';
import './style.scss';

export default class Alert extends Component {
  render () {
    return (
      <div className="base-alert">
        <p className="alert">{this.props.text}</p>
        <button className="btn-true">{this.props.trueBtnText}</button>
        <button className="btn-false">{this.props.falseBtnText}</button>
      </div>
    );
  }
}