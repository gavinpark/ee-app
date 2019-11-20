import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import {toggleCopyright, toggleDetailPanel} from '../redux/modules/ui';
import CopyrightWindow from './CopyrightWindow.js';

class ArtworkInfoPanel extends Component {
  render() {
    // here is how you would get the
    // data for the 'current active work'
    // (don't forget to pass the correct props into this component)
    // const artworkData = window.allWorks[this.props.selectedWorks[this.props.activeWorkIndex]];
    const artworkData = window.allworks[this.props.selectedWorks[this.props.activeWorkIndex]];
    return (
      <div className="databaseInfo">
        <div className="infoPanelImage">
          <img className="artworkImage" src={require(".././images/979_22.jpg")} alt=""></img>
        </div>

       
        {this.props.isCopyrightOpen && <CopyrightWindow toggleCopyright={this.props.toggleCopyright} />}
        <div className="copyrightButton" onClick={this.props.toggleCopyright}> C </div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        
        
          <div className="infoExitButton">
            <img src={require(".././images/buttons/info_Exit_Button.svg")} alt="" onClick={this.props.toggleDetailPanel}></img>
            </div>
      
      

          <div className="dataHeader">Artist</div>
          <div className="dataField">{artworkData.artist}</div>
          <div className="dataHeader">Title</div>
          <div className="dataField">{artworkData.title}</div>
          <div className="dataHeader">Date of production</div>
          <div className="dataField">{artworkData.date}</div>
          <div className="dataHeader">Accession Number</div>
          <div className="dataField">{artworkData.access_num}</div>
          <div className="dataHeader">Accession Date</div>
          <div className="dataField">{artworkData.access_date}</div>
          <div className="dataHeader">Credit</div>
          <div className="dataField">{artworkData.credit}</div>
          <div className="dataHeader">Medium</div>
          <div className="dataField">{artworkData.medium}</div>
          <div className="dataHeader">Description</div>
          <div className="dataField">{artworkData.description}</div>
          <div className="dataHeader">Keywords</div>
          <div className="dataField">{artworkData.keywords}</div>
          <div className="dataHeader">Subject</div>
          <div className="dataField">{artworkData.subject}</div>
          <div className="dataHeader">References</div>
          <div className="dataField">{artworkData.references}</div>
        
        
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>
        <div className="span2Row"></div>

   



      </div>
    );

  }
}
const mapStateToProps = (state) => {
  return {
    // haveCopyrightWindowsBeenViewed: state._ui.haveCopyrightWindowsBeenViewed,
    isCopyrightOpen: state._ui.isCopyrightOpen,
    isDetailPanelOpen: state._ui.isDetailPanelOpen,
    activeWorkIndex: state._ui.activeWorkIndex,
    selectedWorks: state._ui.selectedWorks,
  };
};

export default connect(mapStateToProps, {
  // closeCopyrightWindow,
  toggleCopyright,
  toggleDetailPanel
})(ArtworkInfoPanel);