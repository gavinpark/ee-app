import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EssayData from '.././data/EssayData.js';
import '../App.css';
import { Rnd } from "react-rnd";



class EssayWindow extends Component {
    render() {
        // const style = {
        //     overflowY: "auto"
        // }
        return (
            <Rnd
                className="essayContainer"
                default={{
                    x: 0,
                    y: 0,
                    width: 500,
                    height: 400
                }}
                enableResizing={null}
                // style={{overflow: "scroll"}}
            >
                <div className="essayHeader">
                    <div className="description">{EssayData[0].essayHeader}</div>
                </div>
                <img className="objectExitButton" src={require(".././images/buttons/exit_Button.svg")} alt=""></img>
                <div className="essayBody">
                    <div className="description">{EssayData[0].essayText}</div>
                </div>
            </Rnd>

        );

    }
}

export default EssayWindow;