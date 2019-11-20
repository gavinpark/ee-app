import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Rnd } from "react-rnd";
import '../App.css';
import { toggleDetailPanel } from '../redux/modules/ui';
import ArtworkInfoPanel from './ArtworkInfoPanel';

class ConstellationArtwork extends Component {
  renderArtworkInfoPanel() {
    return <div>
      <ArtworkInfoPanel access_num={this.props.access_num} activeWorkIndex={this.props.activeWorkIndex}/>
    </div>
  }
  render() {

    const artworkData = window.allWorks[this.props.access_num];
    console.log('artworkData: ');
    console.log(artworkData);
    return (
      <Rnd
        className="collectionObject"
        default={{
          x: 0,
          y: 0,
          width: 300,
        }}
        lockAspectRatio={true}
        minWidth={100}
      >
        <img draggable="false" className="artworkImage" src={require(".././images/low res/979_22(450).jpg")} alt=""></img>
        {this.props.isDetailPanelOpen && this.renderArtworkInfoPanel()}
        <img
          className="objectMoreButton"
          src={require(".././images/buttons/more_Button.svg")}
          alt=""
          onClick={this.props.toggleDetailPanel}
        ></img>
        <img className="objectExitButton" src={require(".././images/buttons/exit_Button.svg")} alt=""></img>
      </Rnd>

    );

  }
}


const mapStateToProps = (state) => {
  return {
    isDetailPanelOpen: state._ui.isDetailPanelOpen
  };
};

export default connect(mapStateToProps, {
  toggleDetailPanel,
})(ConstellationArtwork);