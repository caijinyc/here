import React, { Component } from 'react';

// import TitleBtn from '../TitleBtn';

import './style.scss';


class MyTitle extends Component {
  render () {
    return (
      <div className="my-title">
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