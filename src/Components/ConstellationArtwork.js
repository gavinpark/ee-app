import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rnd } from "react-rnd";
import '../App.css';
import { toggleDetailPanel, increaseHighestZIndex, removeWorkFromConstellation, onHoverArtwork, offHoverArtwork } from '../redux/modules/ui';
import ArtworkInfoPanel from './ArtworkInfoPanel';

// TODO: ADD RANDOMIZE POSITION FEAT ON ESSAY/WELCOME BOXES AS WELL

// TODO: ADD BOUNDS TO RND 

class ConstellationArtwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomX: -1,
      randomY: -1,
      zIndex: 1,
    }
  }

  componentDidMount() { 
    this.getRandomXPosition();
    this.getRandomYPosition();
  }

  bringItemToHighestZIndex = () => {
    const nextHighestZindex = this.props.highestZIndex + 1;
    this.setState({
      zIndex: nextHighestZindex,
    })
    this.props.increaseHighestZIndex();
  }

  getRandomXPosition() {
    var min = 0;
    var x = document.getElementsByClassName('constellationPanel')[0].offsetHeight - 300;
    var randomX = Math.floor(Math.random() * (x - min)) + min;

    // return randomX;
    this.setState({
      randomX,
    });
  }

  getRandomYPosition(){
    var min = 0;
    var y = document.getElementsByClassName('constellationPanel')[0].offsetWidth - 300;
    var randomY = Math.floor(Math.random() * (y - min)) + min;

    // return randomY;
    this.setState({
      randomY,
    });
  }

  renderArtworkInfoPanel() {
    return <div>
      <ArtworkInfoPanel artworkData={this.props.artworkData}/>
    </div>
  }

  openArtworkInfoPanel(access_num){
    this.props.toggleDetailPanel(access_num);
  }

  getArtworkVariableWidth(){
    
    if ( this.props.similarityScore <= 1){
      return (200)
    }
    if ( this.props.similarityScore === 2){
      return (300)
    }
    if ( this.props.similarityScore === 3){
      return (350)
    }
    if ( this.props.similarityScore >= 4){
      return (400)
    }
  }

  handleMouseOver = () => {
    this.props.onHoverArtwork(this.props.access_num);
  }

  handleMouseOff = () => {
    this.props.offHoverArtwork();
  }

  render() {  
    const artworkData = window.allWorks[this.props.access_num];
    const isRelatedToHoveredKeywordClass = this.props.isRelatedToHoveredKeyword ? 'isRelatedToHoveredKeyword' : '';
    return this.state.randomX > -1 && this.state.randomY > -1 && (
      <Rnd
        className="collectionObject"
        default={{
          x: this.state.randomX,
          y: this.state.randomY,
          width: this.getArtworkVariableWidth(),
        }}
        style={{ zIndex: this.state.zIndex }}
        lockAspectRatio={true}
        minWidth={100}
      >
        <div
          onClick={this.bringItemToHighestZIndex}
          className={isRelatedToHoveredKeywordClass}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOff}
        >
          <img draggable="false" className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + artworkData.link[0]} alt=""></img>
          <img
              className="objectMoreButton"
              src={require(".././images/buttons/more_Button.svg")}
              alt=""
              onClick={() => {this.openArtworkInfoPanel(artworkData.access_num, artworkData.link[0])}}
          ></img>
          <img
            className="objectExitButton"
            src={require(".././images/buttons/exit_Button.svg")}
            alt=""
            onClick={() => { this.props.removeWorkFromConstellation(artworkData.access_num) }}
          ></img>
        </div>
      </Rnd>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    relatedWorks: state._ui.relatedWorks,
    isDetailPanelOpen: state._ui.isDetailPanelOpen,
    highestZIndex: state._ui.highestZIndex,
  };
};

export default connect(mapStateToProps, {
  toggleDetailPanel, increaseHighestZIndex, removeWorkFromConstellation, onHoverArtwork, offHoverArtwork
})(ConstellationArtwork);