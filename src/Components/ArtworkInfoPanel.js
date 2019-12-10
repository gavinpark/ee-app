import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { toggleCopyright, toggleDetailPanel } from '../redux/modules/ui';
import CopyrightWindow from './CopyrightWindow.js';
import { Link } from 'react-router-dom';
import ArtworkSwiper from './ArtworkSwiper'


class ArtworkInfoPanel extends Component {
  determineTitleRowSize(artworkData){
    if(artworkData.title.length > 300){
      return("span4-row")
    }
    if((artworkData.title.length > 201) && (artworkData.title.length < 300)){
      return ("span3-row")
    }
    if((artworkData.title.length > 100) && (artworkData.title.length < 200)){
      return("span2-row")
    }
    else{
      return("")
    }
  }
  
  determineCreditRowSize(artworkData){
    if(artworkData.credit.length > 300){
      return("span4-row")
    }
    if((artworkData.credit.length > 201) && (artworkData.credit.length < 300)){
      return ("span3-row")
    }
    if((artworkData.credit.length > 100) && (artworkData.credit.length < 200)){
      return("span2-row")
    }
    else{
      return ("")
    }
  }

  determineKeyRowSize(artworkData){
    if(artworkData.keywords.length > 300){
      return("span4-row")
    }
    if((artworkData.keywords.length > 201) && (artworkData.keywords.length < 300)){
      return ("span3-row")
    }
    if((artworkData.keywords.length > 100) && (artworkData.keywords.length < 200)){
      return("span2-row")
    }
    else{
      return("")
    }
  }
  determineSubjectRowSize(artworkData){
    if(artworkData.subject.length > 300){
      return("span4-row")
    }
    if((artworkData.subject.length > 201) && (artworkData.subject.length < 300)){
      return ("span3-row")
    }
    if((artworkData.subject.length > 100) && (artworkData.subject.length < 200)){
      return("span2-row")
    }
    else{
      return("")
    }
  }
  determineRefRowSize(artworkData){
    if(artworkData.references.length > 300){
      return("span4-row")
    }
    if((artworkData.references.length > 201) && (artworkData.references.length < 300)){
      return ("span3-row")
    }
    if((artworkData.references.length > 100) && (artworkData.references.length < 200)){
      return("span2-row")
    }
    else{
      return("span2-row")
    }
  }

  hasRights(artworkData) {

    console.log('hello artworkData', artworkData)
    // return(<ArtworkSwiper/>)
    if (artworkData.have_rights === "Oui") {
      return (<ArtworkSwiper />)

    }
    else {
      return(
        <div></div>
      )
    } 
  }
render() {
  // here is how you would get the
  // data for the 'current active work'
  // (don't forget to pass the correct props into this component)
  // const artworkData = window.allWorks[this.props.selectedWorks[this.props.activeWorkIndex]];
  const artworkData = window.allWorks[this.props.selectedWorks[this.props.activeWorkIndex].accessNum]
  const emptiesArray = new Array(135);
  const empties = emptiesArray.fill('', 0, 135);
  const emptyGrid = empties.map((empty) => { return <div className='infoPanelDivDesktop'>{empty}</div> });

  console.log("artwork data|||||||:", artworkData);
  return (
    <div className="databaseInfo">

      {emptyGrid}
      {this.hasRights(artworkData)}

      <table>

        <th>Artist</th>
        <td>{artworkData.artist}</td>

        <th className={this.determineTitleRowSize(artworkData)}>Title</th>
        <td className={this.determineTitleRowSize(artworkData)}>{artworkData.title}</td>

        <th>Date of Production</th>
        <td>{artworkData.date}</td>

        <th>Accession Number </th>
        <td>{artworkData.access_num}</td>

        <th>Accession Date</th>
        <td>{artworkData.access_date}</td>

        <th>Dimensions</th>
        <td>{artworkData.length}cm</td>

        <th>Status</th>
        <td>{artworkData.status}</td>

        <th className={this.determineCreditRowSize(artworkData)}>Credit</th>
        <td className={this.determineCreditRowSize(artworkData)}>{artworkData.credit}</td>

        <th>Medium</th>
        <td>{artworkData.medium}</td>

        <th>Description</th>
        <td>{artworkData.description}</td>
  

        <th className={this.determineKeyRowSize(artworkData)}>Keywords</th>
        <td className={this.determineKeyRowSize(artworkData)}>{artworkData.keywords}</td>

        <th className={this.determineSubjectRowSize(artworkData)}>Subject</th>
        <td className={this.determineSubjectRowSize(artworkData)}>{artworkData.subject}</td>

        <th className={this.determineRefRowSize(artworkData)}>References</th>
        <td className={this.determineRefRowSize(artworkData)}>{artworkData.references}</td>


      </table>


      {this.props.isCopyrightOpen && <CopyrightWindow toggleCopyright={this.props.toggleCopyright} />}
      <div className="copyrightButton" onClick={this.props.toggleCopyright}> © </div>

      <div className="infoExitBox">
        <img className="infoExitSvg" onClick={this.props.toggleDetailPanel} src={require(".././images/buttons/info_Exit_Button.svg")} alt=""></img>
      </div>

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