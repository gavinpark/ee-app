import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Rnd } from "react-rnd";
import '../App.css';
import { toggleDetailPanel } from '../redux/modules/ui';
import ArtworkInfoPanel from './ArtworkInfoPanel';


// TODO: ADD RANDOMIZE POSITION FEAT ON ESSAY/WELCOME BOXES AS WELL

// TODO: ADD BOUNDS TO RND 

class ConstellationArtwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomX: -1,
      randomY: -1,
    }
  }
  componentDidMount() {
    this.getRandomXPosition();
    this.getRandomYPosition();
  }
  getRandomXPosition(){
    var min = 0;
    var x = document.getElementsByClassName('constellationPanel')[0].offsetHeight - 300;
    var randomX = Math.floor(Math.random() * (x - min)) + min;
    console.log('max height ', x);
    console.log('random x ', randomX);

    // return randomX;
    this.setState({
      randomX,
    });
  }
  getRandomYPosition(){
    var min = 0;
    var y = document.getElementsByClassName('constellationPanel')[0].offsetWidth - 300;
    var randomY = Math.floor(Math.random() * (y - min)) + min;
    console.log('max width ', y);
    console.log('random y ', randomY);

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
  render() {
    const artworkData = window.allWorks[this.props.access_num];
    console.log('artworkData: ', artworkData);
    // return (
    return this.state.randomX > -1 && this.state.randomY > -1 && (
      <Rnd
        className="collectionObject"
        default={{
          x: this.state.randomX,
          y: this.state.randomY,
          width: 300,
        }}
        lockAspectRatio={true}
        minWidth={100}
      >
        <img draggable="false" className="artworkImage" src={require(".././images/979_22.jpg")} alt=""></img>
        {this.props.isDetailPanelOpen && this.renderArtworkInfoPanel()}
        <Link to="artwork-info-panel"><img
          className="objectMoreButton"
          src={require(".././images/buttons/more_Button.svg")}
          alt=""
          // onClick={this.props.toggleDetailPanel}
        ></img></Link>
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