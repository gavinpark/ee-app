import React, { Component } from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import EssayData from '.././data/EssayData.js';
import DatabaseItem from './DatabaseItem';
import EssayButton from './EssayButton';
import '../App.css';
import { addWorkToConstellation, shuffle } from '../redux/modules/ui';

// new fieldnames are 
// access_num,access_date,artist,title,date,keywords,subject,color,medium,description,object_name,technique,have_rights,rights_holder,credit,object_rights,birthdate,deathdate,note,link,references,source,status,acquisition_mode

const generateEmpties = (numberOfEmpties) => {
  const emptiesArray = new Array(numberOfEmpties);
  const empties = emptiesArray.fill("", 0, numberOfEmpties);
  return empties.map(empty => {
    return <div>{empty}</div>;
  });
}

class DatabasePanel extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const isUpdated = !_.isEqual(nextProps.relatedWorks, this.props.relatedWorks);
    return isUpdated;
  }

  render() {
    const databaseItemsArray = this.props.relatedWorks.map((work) => {
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

    const finalArray = shuffle([...databaseItemsArray, ...essayArray]);
    let viewportNumberofColumnBlocks = 5;
    let numBufferFillIns = 45;
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      viewportNumberofColumnBlocks = 5;
      numBufferFillIns = 45;
    } else if (windowWidth <= 1200 && windowWidth >= 900) {
      viewportNumberofColumnBlocks = 3;
      numBufferFillIns = 27;
    } else if (windowWidth <= 900 && windowWidth >= 600) {
      viewportNumberofColumnBlocks = 3;
      numBufferFillIns = 18;
    } else if (windowWidth <= 600 && windowWidth >= 0) {
      viewportNumberofColumnBlocks = 2;
      numBufferFillIns = 6;
    }
    const bufferFillIns = generateEmpties(numBufferFillIns);
    console.log('DATABASEnumBufferFillIns', numBufferFillIns);
    console.log('DATABASEBufferFillIns', bufferFillIns);
    console.log('DATABASEviewportNumberofColumnBlocks', viewportNumberofColumnBlocks);

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
        {bufferFillIns}

      </div>
    );
  }


}

const mapStateToProps = (state) => {
  return {
    relatedWorks: state._ui.relatedWorks,
  };
};

export default connect(mapStateToProps, {
  addWorkToConstellation,
})(DatabasePanel);
