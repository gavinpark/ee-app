import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '.././data/EssayData.js';
import '../App.css';



class EssayWindow extends Component {
    render() {

        return (
            <div className="essayContainer">
                <div className="essayHeader">
                    <div className="description">{Data[0].essayHeader}</div>
                </div>
                <img className="objectExitButton" src={require(".././images/buttons/exit_Button.svg")} alt=""></img>
                <div className="essayBody">
                    <div className="description">{Data[0].essayText}</div>
                </div>

            </div>

        );

    }
}

export default EssayWindow;