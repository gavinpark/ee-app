import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
// import Data from '.././data/data.js';
import LandingItem from "./LandingItem";
import "../App.css";

import { removeInitialArtwork } from "../redux/modules/ui";
import { openMainPage } from "../redux/modules/ui";
import { addWorkToConstellation, shuffle } from "../redux/modules/ui";

const generateEmpties = (numberOfEmpties) => {
  const emptiesArray = new Array(numberOfEmpties);
  const empties = emptiesArray.fill("", 0, numberOfEmpties);
  return empties.map(empty => {
    return <div>{empty}</div>;
  });
}

const findNextHighestMultiple = (
  numofArtworkBlocks,
  numOfBlocksInViewport
) => {
  const smallerMultiple =
    Math.floor(numofArtworkBlocks / numOfBlocksInViewport) *
    numOfBlocksInViewport;
  console.log('numofArtworkBlocks:', numofArtworkBlocks);
  console.log('numOfBlocksInViewport:', numOfBlocksInViewport);
  console.log('smaller multiple:', smallerMultiple);
  return smallerMultiple + numOfBlocksInViewport;
};

class Landing extends Component {

  renderGrid = () => {
    let countOfExistingBlocks = 0;
    const mappedArtworks = this.props.relatedWorks.map(artwork => {
      const artworkData = window.allWorks[artwork.access_num];
      const { similarityScore } = artwork;
      if (similarityScore === 0) {
        countOfExistingBlocks += 1;
      } else if (similarityScore === 1) {
        countOfExistingBlocks += 1;
      } else if (similarityScore === 2) {
        countOfExistingBlocks += 4;
      } else if (similarityScore === 3) {
        countOfExistingBlocks += 9;
      } else {
        countOfExistingBlocks += 16;
      }
      console.log('countOfExistingBlocks', countOfExistingBlocks);
      return (
        <LandingItem
          artworkData={artworkData}
          artwork={artwork}
          {...this.props}
        ></LandingItem>
      );
    });

    // TODO: Gavin finish this if else for 'media query' based on windowWidth
    let viewportNumberofColumnBlocks = 15;
    let numBufferFillIns = 45;
    const windowWidth = window.innerWidth;
    
    if (windowWidth >= 1200) {
      viewportNumberofColumnBlocks = 15;
      numBufferFillIns = 45;
    } else if (windowWidth <= 1200 && windowWidth >= 900) {
      viewportNumberofColumnBlocks = 9;
      numBufferFillIns = 27;
    } else if (windowWidth <= 900 && windowWidth >= 600) {
      viewportNumberofColumnBlocks = 6;
      numBufferFillIns = 18;
    } else if (windowWidth <= 600 && windowWidth >= 0){
      viewportNumberofColumnBlocks = 3;
      numBufferFillIns = 12;
    }
  
    let viewportNumberofRowBlocks = 9;

    const numToFillIn = findNextHighestMultiple(countOfExistingBlocks, viewportNumberofColumnBlocks * viewportNumberofRowBlocks) - countOfExistingBlocks;
    const fillIns = generateEmpties(numToFillIn);
    const newArray = shuffle([...mappedArtworks, ...fillIns]);
    const bufferFillIns = generateEmpties(numBufferFillIns);
    
console.log('numBufferFillIns', numBufferFillIns);
console.log('BufferFillIns', bufferFillIns);
console.log('numToFillIn', numToFillIn);

    return (
      <div className="databaseLanding">
        {newArray}
        {bufferFillIns}
      </div>
    );
  };
  render() {
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
  addWorkToConstellation, 
  shuffle,
})(Landing);
