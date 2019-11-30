import React, { Component, Fragment } from 'react';
import Message from './message';

export default class Container extends Component {
  constructor (props) {
    super(props);

    this.state = {
      message: null
    };
  }

  addMessage = (content) => {
    this.setState(() => ({
      message: content
    }));
  };

  removeMessage = () => {

    this.setState(() => ({
      message: null
    }));
  };

  render () {
    return (
      <Fragment>
        {this.state.message ? (
          <Message
            content={this.state.message}
            removeMessage={this.removeMessage}
          />
        ) : null}
      </Fragment>
    );
  }
}
