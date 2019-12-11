import React, { Component } from 'react';
import '../App.css';
import { Rnd } from 'react-rnd';

class ConstellationKeyword extends Component {
    // getSeparateKeywords(){
    //     const keyword = artworkData.keywords.split(" ");
    //     return keyword
    // }
    // constructor(props) {
    //     this.state = {
    //         zIndex: 0,
    //     }

    //     componentDidMount = () => {
    //         this.findZIndex();
    //     }

    //     findZIndex = () => {
    //         // call this on the click handler for the RnD component too?
    //         // https://github.com/bokuweb/react-rnd
    //         this.setState({
    //             zIndex: this.props.highestZIndex + 1,
    //         });
    //     }
    // }
    constructor(props) {
        super(props);
        this.state = {
          randomX: null,
          randomY: null,
        }
      }
      componentDidMount() {
        this.getRandomXPosition();
        this.getRandomYPosition();
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
                position={{
                    x: this.state.randomX,
                    y: this.state.randomY,
                }}
            >
                <div className="keyword" key={word}>{word}</div>
            </Rnd>
        )
    }
}

export default ConstellationKeyword;