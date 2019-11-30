import React, { Component } from 'react';
import { formatDate, imageRatio } from '../../common/js/utl';
import { connect } from 'react-redux';
import { If } from 'react-if';
import {
  getAlbumInfoAction,
  getSingerInfoAction,
  getMusicListDetailAction
} from '../../store/actionCreator';
import { getHotSearch, getSearchResult } from '../../api/search';

import ShowList from '../../base/ShowList';
import Loading from '../../base/Loading';

import './style.scss';

const SEARCH_TYPES = {
  SONGS: 1,
  ALBUMS: 10,
  SINGERS: 100,
  PLAYLIST: 1000
};
const KEYBOARY_ENTER_CODE = 13;

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hotSearch: null,
      searchVal: '',
      result: {
        songs: null,
        albums: null,
        singers: null,
        playlist: null
      },
      searchType: 'songs',
      showLoading: false
    };
  }

  componentDidMount () {
    getHotSearch().then(({ data: { result: { hots } } }) => {
      this.setState(() => ({
        hotSearch: hots
      }));
    });
  }

  changeCurrentSearchType = (searchType) => {
    if (searchType === this.state.searchType) {
      return;
    } else if (this.state.searchVal === '') {
      this.setState(() => ({
        searchType
      }));
      return;
    }
    this.setState(
      () => ({
        searchType
      }),
      () => {
        this.handleGetType();
      }
    );
  };

  toggleShowLoading = () => {
    this.setState((prevProps) => ({
      showLoading: !prevProps.showLoading
    }));
  }

  handleGetSongs = () => {
    this.toggleShowLoading();
    getSearchResult(this.state.searchVal, SEARCH_TYPES.SONGS).then(
      ({
        data: {
          result: { songs }
        }
      }) => {
        const r = JSON.parse(JSON.stringify(this.state.result));
        r.songs = formatTracks(songs);
        this.setState(() => ({
          result: r
        }));
        this.toggleShowLoading();
      }
    ).catch(() => {
      this.toggleShowLoading();
    });
  };

  handleGetAlbums = () => {
    this.toggleShowLoading();
    getSearchResult(this.state.searchVal, SEARCH_TYPES.ALBUMS).then(
      ({ data }) => {
        const r = JSON.parse(JSON.stringify(this.state.result));
        r.albums = data.result.albums;
        this.setState(() => ({
          result: r
        }));
        this.toggleShowLoading();
      }
    ).catch(() => {
      this.toggleShowLoading();
    });
  };

  handleGetSingers = () => {
    this.toggleShowLoading();
    getSearchResult(this.state.searchVal, SEARCH_TYPES.SINGERS).then(({ data }) => {
      const r = JSON.parse(JSON.stringify(this.state.result));
      r.singers = data.result.artists;
      this.setState(() => ({
        result: r
      }));
      this.toggleShowLoading();
    }).catch(() => {
      this.toggleShowLoading();
    });
  }

  handleGetPlaylist = () => {
    this.toggleShowLoading();
    getSearchResult(this.state.searchVal, SEARCH_TYPES.PLAYLIST).then(({ data }) => {
      const r = JSON.parse(JSON.stringify(this.state.result));
      r.playlist = data.result.playlists;
      this.setState(() => ({
        result: r
      }));
      this.toggleShowLoading();
    }).catch(() => {
      this.toggleShowLoading();
    });
  }

  handleKeydown = (e) => {
    if (e.keyCode === KEYBOARY_ENTER_CODE) {
      this.handleGetType();
    }
  };

  handleGetType () {
    this.setState(
      () => ({
        result: {
          songs: null,
          albums: null,
          singers: null,
          playlist: null
        }
      }),
      () => {
        switch (this.state.searchType) {
        case 'songs':
          this.handleGetSongs();
          break;
        case 'albums':
          this.handleGetAlbums();
          break;
        case 'singers':
          this.handleGetSingers();
          break;
        case 'playlist':
          this.handleGetPlaylist();
          break;
        default:
          break;
        }
      }
    );
  }

  handleClickHotSearch = (val) => {
    this.setState(
      () => ({ searchVal: val }),
      () => {
        this.handleGetType();
      }
    );
  };

  renderHotSearch = () => {
    const { hotSearch } = this.state;
    if (!hotSearch) {
      return null;
    } else {
      return hotSearch.map((item, index) => {
        if (index === 0) {
          return (
            <span
              onClick={() => this.handleClickHotSearch(item.first)}
              key={item.first}
              className="first-hot-search"
            >
              {item.first}
              <i>HOT</i>
            </span>
          );
        } else {
          return (
            <span
              onClick={() => this.handleClickHotSearch(item.first)}
              key={item.first}
            >
              {item.first}
            </span>
          );
        }
      });
    }
  };

  renderResult = () => {
    switch (this.state.searchType) {
    case 'songs':
      return this.renderResultSongs();
    case 'albums':
      return this.renderResultAlbums();
    case 'singers':
      return this.renderResultSingers();
    case 'playlist':
      return this.renderResultPlayList();
    default:
      break;
    }
  };

  renderResultSongs = () => {
    if (!this.state.result.songs) {
      return null;
    } else {
      return <ShowList showTitle={false} list={this.state.result.songs} />;
    }
  };

  renderResultAlbums = () => {
    if (!this.state.result.albums) {
      return null;
    } else {
      return (
        <ul className="result-albums">
          {this.state.result.albums.map((item) => {
            return (
              <li key={item.id}>
                <div
                  className="album-img"
                  onClick={() => this.props.handleGetAlbumInfo(item.id)}
                >
                  <img src={item.picUrl + imageRatio(60)} alt="专辑图片" />
                </div>
                <p
                  className="album-name"
                  onClick={() => this.props.handleGetAlbumInfo(item.id)}
                >
                  <span>{item.name}</span>
                </p>
                <p
                  className="singer-name"
                  onClick={() => this.props.handleGetSingerInfo(item.artist.id)}
                >
                  <span>{item.artist.name}</span>
                </p>
                <div className="publish-time">
                  {formatDate(item.publishTime)}
                </div>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  renderResultSingers = () => {
    if (!this.state.result.singers) {
      return null;
    } else {
      return (
        <ul className="result-singers">
          {this.state.result.singers.map((item) => {
            return (
              <li key={item.id} onClick={() => this.props.handleGetSingerInfo(item.id)}>
                <div className="img-container">
                  <img src={item.img1v1Url + imageRatio(100)} alt=""/>
                </div>
                <p className="name">{item.name}</p>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  renderResultPlayList = () => {
    if (!this.state.result.playlist) {
      return null;
    } else {
      return (
        <ul className="result-playlist">
          {this.state.result.playlist.map((item) => {
            return (
              <li key={item.id} onClick={() => this.props.handleGetMusicListDetail(item.id)}>
                <div className="img-container">
                  <img src={item.coverImgUrl + imageRatio(130)} alt=""/>
                </div>
                <p className="count">TRACKS: {item.trackCount}</p>
                <p className="name">{item.name}</p>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  render () {
    const { searchType } = this.state;
    return (
      <div
        className={[
          'page-search',
          this.props.showMusicList || this.props.showSingerInfo
            ? 'hide-page-search'
            : ''
        ].join(' ')}
      >
        <div className="search-container">
          <div className="search-input-container">
            <i className="iconfont icon-search" />
            <input
              autoFocus={true}
              value={this.state.searchVal}
              placeholder="搜点什么想听的吧.."
              onChange={(e) => {
                const val = e.target.value;
                this.setState(() => ({ searchVal: val }));
              }}
              onKeyDown={(e) => {
                this.handleKeydown(e);
              }}
            />
          </div>
          <div className="hot-search-container">{this.renderHotSearch()}</div>
          <div className="search-result">
            <nav>
              <span
                className={[
                  'songs',
                  searchType === 'songs' ? 'active' : ''
                ].join(' ')}
                onClick={() => this.changeCurrentSearchType('songs')}
              >
                歌曲
              </span>
              <span
                className={[
                  'albums',
                  searchType === 'albums' ? 'active' : ''
                ].join(' ')}
                onClick={() => this.changeCurrentSearchType('albums')}
              >
                专辑
              </span>
              <span
                className={[
                  'singers',
                  searchType === 'singers' ? 'active' : ''
                ].join(' ')}
                onClick={() => this.changeCurrentSearchType('singers')}
              >
                歌手
              </span>
              <span
                className={[
                  'playlist',
                  searchType === 'playlist' ? 'active' : ''
                ].join(' ')}
                onClick={() => this.changeCurrentSearchType('playlist')}
              >
                歌单
              </span>
            </nav>
            <div className="result">{this.renderResult()}</div>
          </div>
          <If condition={this.state.showLoading}>
            <div className="loading-container">
              <Loading />
            </div>
          </If>
        </div>
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
    handleGetSingerInfo (id) {
      dispatch(getSingerInfoAction(id));
    },
    handleGetAlbumInfo (albumId) {
      dispatch(getAlbumInfoAction(albumId));
    },
    handleGetMusicListDetail (id) {
      dispatch(getMusicListDetailAction(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

function formatTracks (list) {
  return list.map((item) => {
    const singers = item.artists.map((item) => {
      return {
        id: item.id,
        name: item.name
      };
    });
    return {
      id: item.id,
      musicName: item.name,
      imgUrl: null,
      singers,
      album: {
        id: item.album.id,
        name: item.album.name
      }
    };
  });
}
