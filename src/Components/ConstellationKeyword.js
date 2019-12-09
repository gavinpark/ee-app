import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Rnd } from 'react-rnd';
import { increaseHighestZIndex } from '../redux/modules/ui';

class ConstellationKeyword extends Component {
    // getSeparateKeywords(){
    //     const keyword = artworkData.keywords.split(" ");
    //     return keyword
    // }

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
        // this.movezIndexToTop();
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
        return (
            <Rnd
                enableResizing={null}
                style={{ zIndex: this.state.zIndex }}
                default={{
                    x: this.state.randomX,
                    y: this.state.randomY,
                }}
            >
                <div className="keyword" key={word} onClick={this.bringItemToHighestZIndex}>{word}</div>
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
  increaseHighestZIndex
})(ConstellationKeyword);