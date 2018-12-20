import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './style.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="icon">HERE Music</div>
        <nav>
            <NavLink exact activeClassName="active" to="/">推荐歌单</NavLink>
            <NavLink activeClassName="active" to="/about">排行榜</NavLink>
            <NavLink activeClassName="active" to="/topics">快速搜索</NavLink>
            <NavLink activeClassName="active" to="/topics">关于</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
