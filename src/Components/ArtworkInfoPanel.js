import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { toggleCopyright, toggleDetailPanel } from '../redux/modules/ui';
import CopyrightWindow from './CopyrightWindow.js';
import { Link } from 'react-router-dom';
import ArtworkSwiper from './ArtworkSwiper'


class ArtworkInfoPanel extends Component {
  render() {
    // here is how you would get the
    // data for the 'current active work'
    // (don't forget to pass the correct props into this component)
    // const artworkData = window.allWorks[this.props.selectedWorks[this.props.activeWorkIndex]];
    const artworkData = window.allWorks[this.props.selectedWorks[this.props.activeWorkIndex]]
    console.log("artwork data:", artworkData);
    return (
      <div className="databaseInfo">


        <ArtworkSwiper />

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
          <td>{artworkData.length}</td>

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
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>

        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>

        <div className="infoPanelDivMobile"></div>
        <div className="infoPanelDivMobile"></div>
        <div className="infoPanelDivMobile"></div>
        <div className="infoPanelDivMobile"></div>
        <div className="infoPanelDivMobile"></div>
        <div className="infoPanelDivMobile"></div>
        <div className="infoPanelDivMobile"></div>



        <div className="infoExitBox">
          <img className="infoExitSvg" onClick={this.props.toggleDetailPanel} src={require(".././images/buttons/info_Exit_Button.svg")} alt=""></img>
        </div>


        {/* <div className="dataHeader">Artist</div>
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
          <div className="dataHeaderReferences">References</div>
          <div className="dataFieldReferences">{artworkData.references}</div> */}


        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>
        <div className="infoPanelDivDesktop"></div>


        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>
        <div className="infoPanelDivDesktop2"></div>

        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>
        <div className="infoPanelDivTablet"></div>

        <div className="infoPanelDivMobile"></div>
        <div className="infoPanelDivMobile"></div>
        <div className="infoPanelDivMobile"></div>
        <div className="infoPanelDivMobile"></div>


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