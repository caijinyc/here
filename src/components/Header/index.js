import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHideMusicListAction } from '../../store/actionCreator';

import './style.scss';

class Header extends Component {
  render() {
    return (
      <header>
          <NavLink
            exact
            activeClassName="active"
            to="/"
            onClick={this.props.handleHideMusicList}
          >
            <div className="icon" onClick={this.props.handleHideMusicList}>
              HERE Music
            </div>
          </NavLink>
        <nav>
          <NavLink
            exact
            activeClassName="active"
            to="/"
            onClick={this.props.handleHideMusicList}
          >
            推荐歌单
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            排行榜
          </NavLink>
          <NavLink activeClassName="active" to="/topics">
            快速搜索
          </NavLink>
          <NavLink activeClassName="active" to="/topics">
            关于
          </NavLink>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleHideMusicList() {
      const action = getHideMusicListAction();
      dispatch(action);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
