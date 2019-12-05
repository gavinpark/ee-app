import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Data from '.././data/data.js';
import DatabaseItem from './DatabaseItem';
import '../App.css';
import { addWorkToConstellation } from '../redux/modules/ui';
import Marquee from '.././lib/Marquee.js'


// new fieldnames are 
// access_num,access_date,artist,title,date,keywords,subject,color,medium,description,object_name,technique,have_rights,rights_holder,credit,object_rights,birthdate,deathdate,note,link,references,source,status,acquisition_mode

class DatabasePanel extends Component {
  render() {
    return (
      <Marquee>
        <div className="databasePanel">

          {this.props.relatedWorks.map((artwork, i) => {
            const artworkData = window.allWorks[artwork.access_num];
            return <DatabaseItem artworkData={artworkData} artwork={artwork} {...this.props}></DatabaseItem>
          })}
        </div>
      </Marquee>




      //  <div className="essayButton">Essay Segment 01</div>

      //  <div className="essayButton">Essay Segment 03</div>

      //  <div className="essayButton">Essay Segment 07</div>




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
