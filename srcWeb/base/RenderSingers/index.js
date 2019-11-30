import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  getSingerInfoAction
} from '../../store/actionCreator';

class RenderSingers extends Component {
  renderSingers = () => {
    return this.props.singers.map((item, index) => {
      if (index !== this.props.singers.length - 1) {
        return (
          <span key={index}>
            <span className="highlight"
              onClick={() => this.props.handleGetSingerInfo(item.id)}
            >
              {item.name}
            </span>{' '}
            /{' '}
          </span>
        );
      } else {
        return (
          <span className="highlight" key={index} onClick={() => this.props.handleGetSingerInfo(item.id)}>
            {item.name}
          </span>
        );
      }
    });
  };

  render () {
    return (
      <Fragment>
        {Array.isArray(this.props.singers) ? this.renderSingers() : ''}
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetSingerInfo (id) {
      dispatch(getSingerInfoAction(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(RenderSingers);
