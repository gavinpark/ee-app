import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EssayData from '.././data/EssayData.js';
import '../App.css';
import { Rnd } from "react-rnd";
import { toggleLanguage, increaseHighestZIndex } from '../redux/modules/ui';

// TODO be able to remember language state when opening multiple windows

class EssayWindow extends Component {
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

    getRandomXPosition() {
        var min = 0;
        var x = document.getElementsByClassName('constellationPanel')[0].offsetHeight - 300;
        var randomX = Math.floor(Math.random() * (x - min)) + min;


        // return randomX;
        this.setState({
            randomX,
        });
    }

    getRandomYPosition() {
        var min = 0;
        var y = document.getElementsByClassName('constellationPanel')[0].offsetWidth - 300;
        var randomY = Math.floor(Math.random() * (y - min)) + min;


        // return randomY;
        this.setState({
            randomY,
        });
    }
    getLanguage() {
        if (this.props.isFrench) {
            return (
                <div>
                    <div className="essayHeaderBox">
                        <div className="essayHeader">{EssayData[0].essayHeader}</div>
                    </div>
                    <div>
                        <div className="objectENButton">EN</div>
                        <div className="objectFRButton greyOut" onClick={this.props.toggleLanguage}>FR</div>
                    </div>

                    <img
                        className="objectExitButton"
                        src={require(".././images/buttons/exit_Button.svg")}
                        alt=""
                        onClick={this.props.toggleWelcome}
                    ></img>
                    <div className="essayBodyBox">
                        <div className="essayBody">{EssayData[0].essayText}</div>
                    </div>
                </div>
            )
        } return (
            <div>
                <div className="essayHeaderBox">
                    <div className="essayHeader">{EssayData[0].essayHeaderFR}</div>
                </div>
                <div>
                    <div className="objectENButton greyOut" onClick={this.props.toggleLanguage}>EN</div>
                    <div className="objectFRButton">FR</div>
                </div>

                <img
                    className="objectExitButton"
                    src={require(".././images/buttons/exit_Button.svg")}
                    alt=""
                    onClick={this.props.toggleWelcome}
                ></img>
                <div className="essayBodyBox">
                    <div className="essayBody">{EssayData[0].essayTextFR}</div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <Rnd
                className="essayContainer"
                style={{ zIndex: this.state.zIndex }}
                default={{
                    x: this.state.randomX,
                    y: this.state.randomY,
                    width: 500,
                    height: 400
                }}
                enableResizing={null}
            // style={{overflow: "scroll"}}
            >
                <div onClick={this.bringItemToHighestZIndex}>
                    {this.getLanguage()}
                </div>
            </Rnd>

        );

    }
}
const mapStateToProps = (state) => {
    return {
        isFrench: state._ui.isFrench,
        highestZIndex: state._ui.highestZIndex
    };
};

export default connect(mapStateToProps, {
    toggleLanguage, increaseHighestZIndex
})(EssayWindow);