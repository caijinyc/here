import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllRank } from '../../api';
import { formatDate, imageRatio } from '../../common/js/utl';

import { getMusicListDetailAction } from '../../store/actionCreator';

import './style.scss';

class Rank extends Component {
  constructor (props) {
    super(props);
    this.state = {
      rankList: null
    };
  }

  componentDidMount () {
    getAllRank().then((res) => {
      this.setState(() => ({
        rankList: res.data.list
      }));
    });
  }

  renderList = () => {
    const list = this.state.rankList;
    if (!list) {
      return null;
    } else {
      return list.map((item) => {
        return (
          <li key={item.id} onClick={() => this.props.handleGetMusicListDetail(item.id)}>
            <div className="img-container">
              <img src={item.coverImgUrl + imageRatio(130)} alt="" />
            </div>
            <p className="name">{item.name}</p>
            <p className="update-frequency">{item.updateFrequency}</p>
            <p className="update-time">
              最后更新:{' '}
              {formatDate(item.updateTime, {
                y: false,
                d: true,
                m: true
              })}
            </p>
          </li>
        );
      });
    }
  };

  render () {
    return (
      <div
        className={[
          'page-rank',
          this.props.showMusicList || this.props.showSingerInfo
            ? 'hide-page-rank'
            : ''
        ].join(' ')}
      >
        <ul className="rank-container">{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMusicList: state.showMusicList,
    showSingerInfo: state.showSingerInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetMusicListDetail (id) {
      dispatch(getMusicListDetailAction(id));
    }};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rank);
