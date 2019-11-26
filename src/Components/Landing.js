import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Data from '.././data/data.js';
import LandingItem from './LandingItem';
import '../App.css';

import { removeInitialArtwork } from '../redux/modules/ui';
import { openMainPage } from '../redux/modules/ui';
import { addWorkToConstellation } from '../redux/modules/ui';

// TODO - something needs to see how many spaces rows/cells are empty, take that number and create 'x' amount of empty spaces based on how many, then randomly scatter them within the array being returned. 
// window is 135 cells
// alternative would be to just have a background colour? fill the empty space with red? lets think about this...

const emptiesArray = new Array(135);
const empties = emptiesArray.fill('', 0, 135);
const emptyGrid = empties.map((empty) => { return <div className='description'>{empty}</div> })


class Landing extends Component {
  // map over all the relatedWorks and calculate the 'total real estate taken up in terms of actual
  // grid units, this way you can determine how many blank spaces to add based on the viewport width
  // you can do this on componentDidMount but you'll need to add an event listener for when user/
  // resizes window.
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
          return <LandingItem artworkData={artworkData} artwork={artwork} {...this.props}></LandingItem>
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
export default connect(mapStateToProps, {
  removeInitialArtwork,
  openMainPage,
  addWorkToConstellation,
})(Landing);