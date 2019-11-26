import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Components/Landing.js';
import './App.css';
import './small.css';
import './large.css';
import MainInterface from './Components/MainInterface.js';
import ArtworkInfoPanel from './Components/ArtworkInfoPanel.js';
import { findRandomArtWork } from './redux/modules/ui';


// Add isartworkinfopanel open to redux!!!! 

class App extends Component {
  componentDidMount() {
    this.props.findRandomArtWork();
  }
  render() {
    const leftPanel = this.props.isLandingOpen ? <Landing /> : <MainInterface />
    return (
      <div>

        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>
        <BrowserRouter>
          <div>
            { this.props.isLandingOpen && <Landing />}
          </div>
          { !this.props.isLandingOpen && <MainInterface />}
        </BrowserRouter>
      </div>
    )
  }
}

// dont use react router Link here, use the same concept as we did in this file above with redux
{/* <Route path="/artwork-info-panel" component={ArtworkInfoPanel} /> */}

const mapStateToProps = (state) => {
  return {
    isLandingOpen: state._ui.isLandingOpen,
  };
};

export default connect(mapStateToProps, {
  findRandomArtWork,
})(App);
