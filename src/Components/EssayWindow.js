import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EssayData from '.././data/EssayData.js';
import '../App.css';
import { Rnd } from "react-rnd";
import { toggleLanguage, toggleEssaySegment } from '../redux/modules/ui';

// TODO be able to remember language state when opening multiple windows

class EssayWindow extends Component {

    getLanguage() {
        if (this.props.isFrench) { 
            console.log('Essay information', this.props.essay)
            console.log('is this getting the header?', this.props.essayHeader)
            return (
                <div>
                    <div className="essayHeaderBox">
                        <div className="essayHeader">{this.props.essayHeader}</div>
                    </div>
                    <div>
                        <div className="objectENButton">EN</div>
                        <div className="objectFRButton greyOut" onClick={this.props.toggleLanguage}>FR</div>
                    </div>

                    <img
                        className="objectExitButton"
                        src={require(".././images/buttons/exit_Button.svg")}
                        alt=""
                        onClick={this.props.toggleEssaySegment}
                    ></img>
                    <div className="essayBodyBox">
                        <div className="essayBody">{this.props.essay}</div>
                    </div>
                </div>
            )
        } return (
            <div>
                <div className="essayHeaderBox">
                    <div className="essayHeader">{this.props.essay}</div>
                </div>
                <div>
                    <div className="objectENButton greyOut" onClick={this.props.toggleLanguage}>EN</div>
                    <div className="objectFRButton">FR</div>
                </div>

                <img
                    className="objectExitButton"
                    src={require(".././images/buttons/exit_Button.svg")}
                    alt=""
                    onClick={this.props.toggleEssaySegment}
                ></img>
                <div className="essayBodyBox">
                    <div className="essayBody">{this.props.essay}</div>

                </div>
            </div>
        )
    }
    render() {
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

                <div>
                    {this.getLanguage()}
                </div>
            </Rnd>

        );

    }
}
const mapStateToProps = (state) => {
    return {
        isFrench: state._ui.isFrench,
        isEssayOpen: state._ui.isEssayOpen
    };
};

export default connect(mapStateToProps, {
    toggleEssaySegment,
    toggleLanguage,
})(EssayWindow);