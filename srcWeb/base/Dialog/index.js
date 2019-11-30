import React, { Component } from 'react';
import './style.scss';

export default class Dialog extends Component {
  render () {
    return (
      <div className="base-dialog">
        <div className="container">
          <p className="alert">{this.props.text}</p>
          <button className="btn-true" onClick={() => this.props.handleClickBtn(true)}>
            {this.props.trueBtnText}
          </button>
          <button className="btn-false" onClick={() => this.props.handleClickBtn(false)}>
            {this.props.falseBtnText}
          </button>
        </div>
      </div>
    );
  }
}

Dialog.defaultProps = {
  trueBtnText: '确定',
  falseBtnText: '取消'
};
