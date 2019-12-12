import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
// import Data from '.././data/data.js';
import LandingItem from "./LandingItem";
import "../App.css";

import { removeInitialArtwork } from "../redux/modules/ui";
import { openMainPage } from "../redux/modules/ui";
import { addWorkToConstellation } from "../redux/modules/ui";

// TODO - something needs to see how many spaces rows/cells are empty, take that number and create 'x' amount of empty spaces based on how many, then randomly scatter them within the array being returned.
// window is 135 cells
// alternative would be to just have a background colour? fill the empty space with red? lets think about this...

const generateEmpties = (numberOfEmpties) => {
  const emptiesArray = new Array(numberOfEmpties);
  const empties = emptiesArray.fill("", 0, numberOfEmpties);
  return empties.map(empty => {
    return <div className="description">{empty}</div>;
  });
}

const findNextHighestMultiple = (
  numofArtworkBlocks,
  numOfBlocksInWidthOfViewport
) => {
  const smallerMultiple =
    Math.floor(numofArtworkBlocks / numOfBlocksInWidthOfViewport) *
    numOfBlocksInWidthOfViewport;
  return smallerMultiple + numOfBlocksInWidthOfViewport;
};

class Landing extends Component {
  // map over all the relatedWorks and calculate the 'total real estate taken up in terms of actual
  // grid units, this way you can determine how many blank spaces to add based on the viewport width
  // you can do this on componentDidMount but you'll need to add an event listener for when user/
  // resizes window.

  renderGrid = () => {
    let countOfExistingBlocks = 0;
    const mappedArtworks = this.props.relatedWorks.map(artwork => {
      const artworkData = window.allWorks[artwork.access_num];
      const { similarityScore } = artwork;
      if (similarityScore === 1) {
        countOfExistingBlocks += 1;
      } else if (similarityScore === 2) {
        countOfExistingBlocks += 4;
      } else if (similarityScore === 3) {
        countOfExistingBlocks += 9;
      } else {
        countOfExistingBlocks += 16;
      }

      return (
        <LandingItem
          artworkData={artworkData}
          artwork={artwork}
          {...this.props}
        ></LandingItem>
      );
    });
    
    // TODO: Gavin finish this if else for 'media query' based on windowWidth
    let viewportNumberOfGridBlocks = 15;
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      viewportNumberOfGridBlocks = 15
    } else if (windowWidth <= 1200 && windowWidth >= 900) {
      viewportNumberOfGridBlocks = 9;
    }
    // TODO gavin: here or inside the findNextHighestMultiple, you need to add another multiple of 15
    // such that it will fill at least the screen height - you can use window.innerHeight to check
    const numToFillIn = findNextHighestMultiple(countOfExistingBlocks, viewportNumberOfGridBlocks) - countOfExistingBlocks;
    const fillIns = generateEmpties(numToFillIn);
    return (
      <div className="databaseLanding">
        {mappedArtworks}
        {fillIns}
      </div>
    );
  };
  render() {
    // if there are no artworks, then fill the screen with an empty grid (viewport has 135 squares (9x15)):
    if (this.props.relatedWorks.length === 0) {
      return <div className="databaseLanding">{generateEmpties(135)}</div>;
    }

    return this.renderGrid();
  }
}

const mapStateToProps = state => {
  return {
    relatedWorks: state._ui.relatedWorks
  };
};

// TODO: add action to actually select a new artwork
export default connect(mapStateToProps, {
  removeInitialArtwork,
  openMainPage,
  addWorkToConstellation
})(Landing);
