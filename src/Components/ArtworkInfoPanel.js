import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { toggleCopyright, toggleDetailPanel } from '../redux/modules/ui';
import CopyrightWindow from './CopyrightWindow.js';
import { Link } from 'react-router-dom';
import ArtworkSwiper from './ArtworkSwiper'


class ArtworkInfoPanel extends Component {
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

        <th>Title</th>
        <td>{artworkData.title}</td>

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

        <th>Credit</th>
        <td>{artworkData.credit}</td>

        <th>Medium</th>
        <td>{artworkData.medium}</td>

        <th>Description</th>
        <td>{artworkData.description}</td>

        <th>Keywords</th>
        <td>{artworkData.keywords}</td>

        <th>Subject</th>
        <td>{artworkData.subject}</td>

        <th>References</th>
        <td>{artworkData.references}</td>


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