import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import { Rnd } from "react-rnd";

class DescriptionWindow extends Component {
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
    getRandomXPosition() {
        var min = 0;
        var x = document.getElementsByClassName('constellationPanel')[0].offsetHeight;
        var randomX = Math.floor(Math.random() * (x - min)) + min;
        console.log('max height ', x);
        console.log('random x ', randomX);

        // return randomX;
        this.setState({
            randomX,
        });
    }
    getRandomYPosition() {
        var min = 0;
        var y = document.getElementsByClassName('constellationPanel')[0].offsetWidth;
        var randomY = Math.floor(Math.random() * (y - min)) + min;
        console.log('max width ', y);
        console.log('random y ', randomY);

        // return randomY;
        this.setState({
            randomY,
        });
    }

    // artworkData.subject
    render() {
        const artworkData = window.allWorks[this.props.access_num];
        console.log ('artworkdata !!!!!!!', artworkData.subject);
        const subject = artworkData.subject;
        // const subject = window.allWorks[this.props.access_num].subject;
        return this.state.randomX > -1 && this.state.randomY > -1 && (
            <div>
                {subject.map(text => {
                    return (
                        <Rnd
                            enableResizing={null}
                            default={{
                                x: this.state.randomX,
                                y: this.state.randomY,
                            }}
                        >
                            <div className="descriptionWindow" key={text}> {text} </div>
                        </Rnd>
                    )
                })
                }
            </div>

        )
    }
}

export default DescriptionWindow;