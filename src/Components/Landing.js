import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Data from '.././data/data.js';
import LandingItem from './LandingItem';
import '../App.css';


const emptiesArray = new Array(135);
const empties = emptiesArray.fill('', 0, 135);
const emptyGrid = empties.map((empty) => { return <div className='description'>{empty}</div> })


class Landing extends Component {
  
  render() {
    // if there are no artworks, then fill the screen with an empty grid (viewport has 135 squares (9x15)):
    if (this.props.relatedWorks.length === 0) {
      return (
        <div className='databaseLanding'>
          {emptyGrid}
        </div>
      )
    }
    return (
      <div className='databaseLanding'>
        {this.props.relatedWorks.map((artwork, i) => {
          const artworkData = window.allWorks[artwork.access_num];
          return <LandingItem artworkData={artworkData} artwork={artwork}></LandingItem>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    relatedWorks: state._ui.relatedWorks,
  };
};

// TODO: add action to actually select a new artwork
export default connect(mapStateToProps)(Landing);