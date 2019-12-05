import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Data from '.././data/data.js';
import DatabaseItem from './DatabaseItem';
import EssayButton from './EssayButton';
import '../App.css';
import { addWorkToConstellation, shuffle } from '../redux/modules/ui';

// new fieldnames are 
// access_num,access_date,artist,title,date,keywords,subject,color,medium,description,object_name,technique,have_rights,rights_holder,credit,object_rights,birthdate,deathdate,note,link,references,source,status,acquisition_mode

class DatabasePanel extends Component {
  render() {
    const databaseItemsArray = this.props.relatedWorks.map((work) => {
      return {
        type: 'work',
        data: work
      }
    });
    // const essayArray = [{
    //   type: 'essay',
    //   data: {},
    // }];
    const essayArray = [];

    const finalArray = shuffle([...databaseItemsArray, ...essayArray]);

    return (
      <div className="databasePanel">


        {finalArray.map((obj) => {
          if (obj.type === 'work') {
            const artwork = obj.data;
            const artworkData = window.allWorks[artwork.access_num];
            return <DatabaseItem artworkData={artworkData} artwork={artwork} {...this.props}></DatabaseItem>
          }
          return <EssayButton data={obj.data} />
        })}


        {/* <div className="essayButton">Essay Segment 01</div>

        <div className="essayButton">Essay Segment 03</div>

        <div className="essayButton">Essay Segment 07</div> */}

      </div>
    );
  }


}
// export default DatabasePanel;


const mapStateToProps = (state) => {
  return {
    relatedWorks: state._ui.relatedWorks,
  };
};

// TODO: add action to actually select a new artwork
export default connect(mapStateToProps, {
  addWorkToConstellation,
})(DatabasePanel);
