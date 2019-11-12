import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ConstellationArtwork from './ConstellationArtwork';
import EssayWindow from './EssayWindow';
import '../App.css';

class ConstellationPanel extends Component {
  render() {

    return (
      <div className="constellationPanel">
        <div><ConstellationArtwork/></div>
        <div><EssayWindow/></div>
      </div>
    );

  }
}

export default ConstellationPanel;