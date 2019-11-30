import React, { Component } from 'react';

// import TitleBtn from '../TitleBtn';

import './style.scss';

// const { remote } = window.require('electron');
// const currentWindow = remote.getCurrentWindow();

class MyTitle extends Component {
  render () {
    return (
      // <div className="my-title" onDoubleClick={() => currentWindow.minimize()}>
      <div className="my-title" >
        <div className="title-btn-container">
          {/* <TitleBtn type="close" />
         <TitleBtn type="min" />
         <TitleBtn type="max" /> */}
        </div>
      </div>
    );
  }
}

export default MyTitle;
