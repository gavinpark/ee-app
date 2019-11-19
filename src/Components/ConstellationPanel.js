import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ConstellationArtwork from './ConstellationArtwork';
import EssayWindow from './EssayWindow';
import ConstellationKeyword from './ConstellationKeyword';
import '../App.css';

class ConstellationPanel extends Component {
  render() {

    return (
      <div className="constellationPanel">
        <div><EssayWindow /></div>
        <div><ConstellationArtwork /></div>
        <div><ConstellationKeyword /></div>
      </div>
    );

  }
}

export default ConstellationPanel;