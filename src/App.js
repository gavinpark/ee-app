import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Components/Landing.js';
import './App.css';
import MainInterface from './Components/MainInterface.js';
import ArtworkInfoPanel from './Components/ArtworkInfoPanel.js';
import { findRandomArtWork } from './redux/modules/ui';

class App extends Component {
  componentDidMount() {
    this.props.findRandomArtWork();
  }
  render() {
    return (
      <div>

        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>

        <BrowserRouter>
          <div>
            <Route path="/" component={Landing} exact />
          </div>
          <Route path="/main" component={MainInterface} />
          <Route path="/artwork-info-panel" component={ArtworkInfoPanel} />
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, {
  findRandomArtWork,
})(App);
