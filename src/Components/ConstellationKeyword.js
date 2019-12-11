import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Rnd } from 'react-rnd';
import { increaseHighestZIndex, onHoverKeyword, offHoverKeyword } from '../redux/modules/ui';

class ConstellationKeyword extends Component {

    constructor(props) {
        super(props);
        this.state = {
          randomX: null,
          randomY: null,
          zIndex: 1,
        }
      }
      componentDidMount() {
        this.getRandomXPosition();
        this.getRandomYPosition();
        // this.movezIndexToTop();
      }

      handleMouseOver = () => {
        this.props.onHoverKeyword(this.props.keyword)
      }

      handleMouseOff = () => {
        this.props.offHoverKeyword()
      }

      bringItemToHighestZIndex = () => {
        const nextHighestZindex = this.props.highestZIndex + 1;
        this.setState({
          zIndex: nextHighestZindex,
        })
        this.props.increaseHighestZIndex();
      }
      getRandomXPosition(){
        var min = 0;
        var x = document.getElementsByClassName('constellationPanel')[0].offsetHeight;
        var randomX = Math.floor(Math.random() * (x - min)) + min;
       
    
        // return randomX;
        this.setState({
          randomX,
        });
      }
      getRandomYPosition(){
        var min = 0;
        var y = document.getElementsByClassName('constellationPanel')[0].offsetWidth;
        var randomY = Math.floor(Math.random() * (y - min)) + min;
       
    
        // return randomY;
        this.setState({
          randomY,
        });
      }
    render() {
      const word = this.props.keyword;
      const isRelatedToHoveredArtworkClass = this.props.isRelatedToHoveredArtwork ? 'isRelatedToHoveredArtwork' : '';
        return (
            <Rnd
                enableResizing={null}
                style={{ zIndex: this.state.zIndex }}
                position={{
                    x: this.state.randomX,
                    y: this.state.randomY,
                }}
            >
                <div
                  className={`${isRelatedToHoveredArtworkClass} keyword`}
                  key={word}
                  onClick={this.bringItemToHighestZIndex}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOff}
                >{word}</div>
            </Rnd>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      highestZIndex: state._ui.highestZIndex,
  };
};

export default connect(mapStateToProps, {
  increaseHighestZIndex,
  onHoverKeyword,
  offHoverKeyword,
})(ConstellationKeyword);