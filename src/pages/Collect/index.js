import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChangeCollectorAction } from '../../store/actionCreator';
import './style.scss';

class Collect extends Component {
  renderCollectList = () => {
    console.log('his.props.collector', this.props.collector);
    const collector = this.props.collector;
    if (!collector) {
      return null;
    }
    return collector.collectList.map((item) => {
      return (
        <li key={item.id}><span>{item.name}</span></li>
      );
    });
  }
  
  render () {
    return (
      <div className="page-collect">
        <div className="left-nav">
          <div className="found-list">
            <p className="title">创建的歌单</p>
          </div>
          <div className="collect-list">
            <p className="title">收藏的歌单</p>
            <ul>
              {this.renderCollectList()}
            </ul>
          </div>
        </div>
        <div className="collect-container">
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collector: state.collector
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlehangeCollector (value) {
      dispatch(getChangeCollectorAction(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collect);

