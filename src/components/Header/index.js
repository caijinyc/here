import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getHideMusicListAction,
  getHideSingerInfoAction
} from '../../store/actionCreator';

import './style.scss';

class Header extends Component {
  isActive = (pathname) => {
    if (this.props.location.pathname === pathname) {
      return 'active';
    } else {
      return '';
    }
  }

  render () {
    return (
      <header>
        <NavLink
          exact
          to="/"
          onClick={this.props.handleHideMusicListAndSingerInfo}
        >
          <div
            className="icon"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            <i className="iconfont icon-here-music" />
          </div>
        </NavLink>
        <nav>
          <NavLink
            exact
            activeClassName={this.isActive('/')}
            to="/"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            推荐
          </NavLink>
          <NavLink
            activeClassName={this.isActive('/rank')}
            to="/rank"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            排行榜
          </NavLink>
          <NavLink
            activeClassName={this.isActive('/search')}
            to="/search"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            搜索
          </NavLink>
          <NavLink
            activeClassName={this.isActive('/collect')}
            to="/collect"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            收藏
          </NavLink>
          <NavLink
            activeClassName={this.isActive('/about')}
            to="/about"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            关于
          </NavLink>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleHideMusicListAndSingerInfo () {
      dispatch(getHideMusicListAction());
      dispatch(getHideSingerInfoAction());
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);
