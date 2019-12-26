import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { toggleCopyright, toggleDetailPanel } from '../redux/modules/ui';
import CopyrightWindow from './CopyrightWindow.js';
import ArtworkSwiper from './ArtworkSwiper'


class ArtworkInfoPanel extends Component {
  determineTitleRowSize(artworkData) {
    if (artworkData.title.length > 160) {
      return ("span4-row")
    }
    if ((artworkData.title.length > 81) && (artworkData.title.length < 160)) {
      return ("span3-row")
    }
    if ((artworkData.title.length > 40) && (artworkData.title.length < 80)) {
      return ("span2-row")
    }
    else {
      return ("")
    }
  }

  determineCreditRowSize(artworkData) {
    if (artworkData.credit.length > 45) {
      return ("span4-row")
    }
    if ((artworkData.credit.length > 20) && (artworkData.credit.length < 40)) {
      return ("span2-row")
    }
    else {
      return ("span2-row")
    }
  }

  determineMedRowSize(artworkData) {
    if (artworkData.medium.length > 160) {
      return ("span4-row")
    }
    if ((artworkData.medium.length > 81) && (artworkData.medium.length < 160)) {
      return ("span3-row")
    }
    if ((artworkData.medium.length > 30) && (artworkData.medium.length < 80)) {
      return ("span2-row")
    }
    else {
      return ("")
    }
  }

  determineKeyRowSize(artworkData) {
    if (artworkData.keywords.length > 140) {
      return ("span4-row")
    }
    if ((artworkData.keywords.length > 71) && (artworkData.keywords.length < 140)) {
      return ("span3-row")
    }
    if ((artworkData.keywords.length > 35) && (artworkData.keywords.length < 70)) {
      return ("span2-row")
    }
    else {
      return ("")
    }
  }
  determineSubjectRowSize(artworkData) {
    if (artworkData.subject.length > 160) {
      return ("span4-row")
    }
    if ((artworkData.subject.length > 81) && (artworkData.subject.length < 160)) {
      return ("span3-row")
    }
    if ((artworkData.subject.length > 40) && (artworkData.subject.length < 80)) {
      return ("span2-row")
    }
    else {
      return ("")
    }
  }
  determineDescRowSize(artworkData) {
    if (artworkData.description.length > 161) {
      return ("span4-row")
    }
    if ((artworkData.description.length > 81) && (artworkData.description.length < 160)) {
      return ("span3-row")
    }
    if ((artworkData.description.length > 35) && (artworkData.description.length < 80)) {
      return ("span2-row")
    }
    else {
      return ("")
    }
  }
  determineRefRowSize(artworkData) {
    if (artworkData.references.length > 161) {
      return ("span4-row")
    }
    if ((artworkData.references.length > 81) && (artworkData.references.length < 160)) {
      return ("span3-row")
    }
    if ((artworkData.references.length > 40) && (artworkData.references.length < 80)) {
      return ("span2-row")
    }
    else {
      return ("span2-row")
    }
  }

  determineHeight(artworkData) {
    if (artworkData.height === "") {
      return ("")
    }
    else {
      return (artworkData.height + "cm")
    }
  }
  determineLength(artworkData) {
    if (artworkData.length === "") {
      return ("")
    }
    else {
      return ('\xa0' + "x" + '\xa0' + artworkData.length + "cm")
    }
  }

  determineWidth(artworkData) {
    if (artworkData.width === "") {
      return ("")
    }
    else {
      return ('\xa0' + "x" + '\xa0' + artworkData.width + "cm")
    }
  }

  determineDepth(artworkData) {
    if (artworkData.depth === "") {
      return ("")
    }
    else {
      return ('\xa0' + "x" + '\xa0' + artworkData.depth + "cm")
    }
  }

  hasRights(artworkData) {
    if (artworkData.have_rights === "Oui") {
      return (<ArtworkSwiper link={artworkData.link} {...this.props} />)
    }
    // else{
    //   return("")
    // }
    if(artworkData.have_rights === "Non" || artworkData.have_rights === ""){
      if(this.props.isCopyrightOpen){
        return("")
      }else{
        return(<CopyrightWindow toggleCopyright={this.props.toggleCopyright} />)
      }
    }
  }
  getMedium(artworkData) {
    if (artworkData.medium && artworkData.support) {
      return (artworkData.medium + ' on ' + artworkData.support)
    }
    if (artworkData.medium && artworkData.support === '') {
      return (artworkData.medium)
    }
  }
  getCredit(artworkData) {
    if (artworkData.credit === '') {
      return ("Collection of the Leonard & Bina Ellen Art Gallery. Please contact the gallery for full credit. All rights reserved.")

    } 
    else {
      return ("Collection of the Leonard & Bina Ellen Art Gallery." + '\n' + artworkData.credit + '\n' + "Photo:" + '\xa0' + artworkData.photographer)
    }
  }
  render() {
    // here is how you would get the
    // data for the 'current active work'
    // (don't forget to pass the correct props into this component)
    // const artworkData = window.allWorks[this.props.selectedWorks[this.props.activeWorkIndex]];
    const artworkData = window.allWorks[this.props.openedArtwork];

    const emptiesArray = new Array(135);
    const empties = emptiesArray.fill('', 0, 135);
    const emptyGrid = empties.map((empty) => { return <div className='infoPanelDivDesktop'>{empty}</div> });

    return (
      <div className="databaseInfo">
        {/* <ArtworkSwiper link={artworkData.link} {...this.props}/> */}
        {this.hasRights(artworkData)}

        {emptyGrid}

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

          <th >Dimensions</th>
          <td>{this.determineHeight(artworkData)}{this.determineLength(artworkData)}{this.determineWidth(artworkData)}{this.determineDepth(artworkData)}</td>

          <th>Status</th>
          <td>{artworkData.status}</td>

          <th className={this.determineCreditRowSize(artworkData)}>Credit</th>
          <td className={this.determineCreditRowSize(artworkData)}>{this.getCredit(artworkData)}</td>

          <th className={this.determineMedRowSize(artworkData)}>Medium</th>
          <td className={this.determineMedRowSize(artworkData)}>{this.getMedium(artworkData)}</td>

          <th className={this.determineDescRowSize(artworkData)}>Description</th>
          <td className={this.determineDescRowSize(artworkData)}>{artworkData.description}</td>


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
    openedArtwork: state._ui.openedArtwork,
  };
};

export default connect(mapStateToProps, {
  // closeCopyrightWindow,
  toggleCopyright,
  toggleDetailPanel
})(ArtworkInfoPanel);