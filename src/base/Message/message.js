import React, { Component } from 'react';
import './style.scss';

export default class Message extends Component {
  componentDidMount () {
    const { duration } = this.props;
    setTimeout(() => {
      this.props.removeMessage();
    }, duration);
  }

  render () {
    return (
      <div className="hint-message">
        {this.props.content}
      </div>
    );
  }
}

Message.defaultProps = {
  duration: 1500
};

