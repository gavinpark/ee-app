import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ConstellationArtwork from './ConstellationArtwork';
import '../App.css';

class ConstellationPanel extends Component {
  render() {

    return (
      <div className="constellationPanel">
        <Link to="artwork-info-panel">
        <div><ConstellationArtwork/></div>
        </Link>
      </div>
    );

  }
}

export default ConstellationPanel;