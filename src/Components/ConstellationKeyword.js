import React, { Component } from 'react';
import Data from '.././data/data.js';
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
        var x = document.getElementsByClassName('constellationPanel')[0].offsetHeight;
        var randomX = Math.floor(Math.random() * (x - min)) + min;
        console.log('max height - keyword ', x);
        console.log('random x - keyword', randomX);
    
        // return randomX;
        this.setState({
          randomX,
        });
      }
      getRandomYPosition(){
        var min = 0;
        var y = document.getElementsByClassName('constellationPanel')[0].offsetWidth;
        var randomY = Math.floor(Math.random() * (y - min)) + min;
        console.log('max width - keyword', y);
        console.log('random y - keyword', randomY);
    
        // return randomY;
        this.setState({
          randomY,
        });
      }
    render() {
        const artworkData = window.allWorks[this.props.access_num];
        // const keyword = artworkData.keywords.split(",");
        const keywords = artworkData.final_words;
        // console.log(keywords);

        return this.state.randomX > -1 && this.state.randomY > -1 &&(
            <div>
                {keywords.map(word => {
                  console.log(word)
                    return (
                        <Rnd
                            enableResizing={null}
                            default={{
                                x: this.state.randomX,
                                y: this.state.randomY,
                            }}
                        >
                            <div className="keyword" key={word}>{word}</div>
                        </Rnd>
                    )
                })
                }
            </div>
        )

    }
}

export default ConstellationKeyword;