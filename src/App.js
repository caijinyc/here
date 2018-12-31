import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChangeCollectorAction } from './store/actionCreator';
import $db from './data';

import Recommend from './pages/Recommend';
import Search from './pages/Search';
import Collect from './pages/Collect';
import Rank from './pages/Rank';
import About from './pages/About';

import Header from './components/Header';
import Player from './components/Player';
import MusicList from './components/MusicList';
import SingerInfo from './components/SingerInfo';

import Loading from './base/Loading';

import MyTitle from './renderer/components/MyTitle';

import './App.scss';

class App extends Component {
  componentWillMount() {
    $db.find({ name: 'collector' }, (err, res) => {
      if (res.length === 0) {
        $db.insert(
          {
            name: 'collector',
            foundList: [
              {
                name: '我喜欢的音乐',
                tracks: []
              }
            ],
            collectList: []
          },
          (err, res) => {
            this.props.handlehangeCollector(res[0]);
          }
        );
      } else {
        this.props.handlehangeCollector(res[0]);
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <MusicList />
          <Player />
          <SingerInfo />
          <div className="app-background" />
          {/* exact 路径完全相等的时候才显示路由内的内容 */}
          <Route exact path="/" component={Recommend} />
          <Route exact path="/search" component={Search} />
          <Route path="/collect" component={Collect} />
          <Route path="/rank" component={Rank} />
          <Route path="/about" component={About} />
          {/* <Route path="/about" component={About} /> */}
          <MyTitle />
          {this.props.showLoading ? (
            <div className="app-loading-container">
              <Loading />
            </div>
          ) : null}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showLoading: state.showLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlehangeCollector(value) {
      dispatch(getChangeCollectorAction(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
