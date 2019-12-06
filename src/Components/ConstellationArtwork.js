import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rnd } from "react-rnd";
import '../App.css';
import { toggleDetailPanel, increaseHighestZIndex, removeWorkFromConstellation } from '../redux/modules/ui';
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
    console.log('in artwork info panel');
    this.props.toggleDetailPanel(access_num);
  }

  getArtworkVariableWidth(){
    
    if ( this.props.similarityScore <= 2){
      return (100)
    }
    if ( this.props.similarityScore === 3){
      return (200)
    }
    if ( this.props.similarityScore >= 4){
      return (300)
    }
  }
  render() {  
    const artworkData = window.allWorks[this.props.access_num];
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
        <div onClick={this.bringItemToHighestZIndex}>
          <img draggable="false" className="artworkImage" src={require(".././images/979_22.jpg")} alt=""></img>
          <img
              className="objectMoreButton"
              src={require(".././images/buttons/more_Button.svg")}
              alt=""
              onClick={() => {this.openArtworkInfoPanel(artworkData.access_num)}}
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
  toggleDetailPanel, increaseHighestZIndex, removeWorkFromConstellation
})(ConstellationArtwork);