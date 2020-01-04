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
