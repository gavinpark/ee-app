import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rnd } from "react-rnd";
import '../App.css';
import { toggleDetailPanel, increaseHighestZIndex, removeWorkFromConstellation, onHoverArtwork, offHoverArtwork, openCopyright } from '../redux/modules/ui';


class ConstellationArtwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomX: -1,
      randomY: -1,
      zIndex: 2,
    }
  }

  componentDidMount() { 
    this.getRandomXPosition();
    this.getRandomYPosition();
    this.bringItemToHighestZIndex();
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

  // renderArtworkInfoPanel() {
  //   return <div>
  //     <ArtworkInfoPanel artworkData={this.props.artworkData}/>
  //   </div>
  // }

  openArtworkInfoPanel(access_num, rights){
    this.props.toggleDetailPanel(access_num);
    this.props.openCopyright(rights);
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

  removeWork = (access_num) => {
    this.props.removeWorkFromConstellation(access_num);
  } 

  render() {  
    const artworkData = window.allWorks[this.props.access_num];
    const isRelatedToHoveredKeywordClass = this.props.isRelatedToHoveredKeyword
    ? 'isRelatedToHoveredKeyword' :
    this.props.hoveredKeyword ? 'isNotRelatedToHoveredKeyword' : '';
    const removeCursor = {
      cursor: 'none',
    };
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
        resizeHandleStyles={{
          top: removeCursor,
          topRight: removeCursor,
          topLeft: removeCursor, 
          right: removeCursor,
          left: removeCursor, 
          bottom: removeCursor,        }}
      >
        <div
          onClick={this.bringItemToHighestZIndex}
          className={isRelatedToHoveredKeywordClass}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOff}
        >
          <img draggable="false" className="artworkImage draggable" src={'http://ellengallery.concordia.ca/resi/images/' + artworkData.link[0]} alt=""></img>
          <img
              className="objectMoreButton cursorPoint"
              src="http://ellengallery.concordia.ca/resi/static/media/more_Button.svg"
              alt=""
              onClick={() => {this.openArtworkInfoPanel(artworkData.access_num, artworkData.have_rights)}}
              // onClick={() => {this.openArtworkInfoPanel(artworkData.access_num)}}
          ></img>
          <img
            className="objectExitButton cursorPoint"
            src="http://ellengallery.concordia.ca/resi/static/media/exit_Button.svg"
            alt=""
            onClick={() => { this.removeWork(artworkData.access_num) }}
          ></img>
          <img
          className="objectExpand"
          src="http://ellengallery.concordia.ca/resi/static/media/expand_Button.svg"
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
    hoveredKeyword: state._ui.hoveredKeyword,
  };
};

export default connect(mapStateToProps, {
  toggleDetailPanel, increaseHighestZIndex, removeWorkFromConstellation, onHoverArtwork, offHoverArtwork, openCopyright
})(ConstellationArtwork);