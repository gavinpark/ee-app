import React, { Component } from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import EssayData from '.././data/EssayData.js';
import DatabaseItem from './DatabaseItem';
import EssayButton from './EssayButton';
import '../App.css';
import { addWorkToConstellation, shuffle, toggleDetailPanel } from '../redux/modules/ui';

// new fieldnames are 
// access_num,access_date,artist,title,date,keywords,subject,color,medium,description,object_name,technique,have_rights,rights_holder,credit,object_rights,birthdate,deathdate,note,link,references,source,status,acquisition_mode

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
  // console.log('DATABASE numOfBlocksInViewport:', numOfBlocksInViewport);
  // console.log('DATABASE smallerMultiple:', smallerMultiple);
  return smallerMultiple + numOfBlocksInViewport;
};

class DatabasePanel extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const isUpdated = !_.isEqual(nextProps.relatedWorks, this.props.relatedWorks);
    return isUpdated;
  }

  render() {

    let countOfExistingBlocks = 0;
    const databaseItemsArray = this.props.relatedWorks.map((work) => {
      const artworkData = window.allWorks[work.access_num];
      const { similarityScore } = work;
      if (similarityScore === 0) {
        countOfExistingBlocks += 1;
      } else if (similarityScore === 1) {
        countOfExistingBlocks += 1;
      } else if (similarityScore === 2) {
        countOfExistingBlocks += 4;
      } else {
        countOfExistingBlocks += 4
      }
      return {
        type: 'work',
        data: work
      }
    });

    const essayArray = EssayData.map((essay, index) => {
      return {
        type: 'essay',
        data: essay,
        index,
      }
    });

    let viewportNumberofColumnBlocks = 5;
    let numBufferFillIns = 15;
    let viewportNumberofRowBlocks = 9
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      viewportNumberofColumnBlocks = 5;
      numBufferFillIns = 14;
    } else if (windowWidth <= 1200 && windowWidth >= 900) {
      viewportNumberofColumnBlocks = 3;
      numBufferFillIns = 10;
    } else if (windowWidth <= 900 && windowWidth >= 600) {
      viewportNumberofColumnBlocks = 3;
      viewportNumberofRowBlocks = 6;
      numBufferFillIns = 10;
    } else if (windowWidth <= 600 && windowWidth >= 0) {
      viewportNumberofColumnBlocks = 2;
      viewportNumberofRowBlocks = 10;
      numBufferFillIns = 5;
    }

    const numToFillIn = findNextHighestMultiple(countOfExistingBlocks, viewportNumberofColumnBlocks * viewportNumberofRowBlocks) - countOfExistingBlocks;
    const fillIns = generateEmpties(numToFillIn);
    const finalArray = shuffle([...databaseItemsArray, ...essayArray, ...fillIns]);
    const bufferFillIns = generateEmpties(numBufferFillIns);
    // console.log('DATABASE CountOfExistingBlocks', countOfExistingBlocks);
    // console.log('DATABASE numBufferFillIns', numBufferFillIns);
    // console.log('DATABASE numToFillIn', numToFillIn);

    //     return (
    //     <EssayButton essay={essay} index={obj.index} {...this.props}> </EssayButton>
    //   }
    // })}
    return (
      <div className="databasePanel">

        {finalArray.map((obj) => {
          if (obj.type === 'work') {
            const artwork = obj.data;
            const artworkData = window.allWorks[artwork.access_num];
            return <DatabaseItem artworkData={artworkData} artwork={artwork} {...this.props}></DatabaseItem>
          }
          if (obj.type === 'essay') {
            const essay = obj.data;

            return <EssayButton essay={essay} index={obj.index} {...this.props}> </EssayButton>
          }
        })}
        {fillIns}
        {bufferFillIns}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    relatedWorks: state._ui.relatedWorks,
    isDetailPanelOpen: state._ui.isDetailPanelOpen,
  };
};

export default connect(mapStateToProps, {
  addWorkToConstellation,
  toggleDetailPanel
})(DatabasePanel);
