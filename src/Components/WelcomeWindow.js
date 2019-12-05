import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EssayData from '.././data/EssayData.js';
import '../App.css';
import { Rnd } from "react-rnd";
import { toggleLanguage } from '../redux/modules/ui';

// TODO be able to remember language state when opening multiple windows


class WelcomeWindow extends Component {
    getLanguage() {
        if (this.props.isFrench) {
            return (
                <div>
                    <div className="essayHeaderBox">
                        <div className="essayHeader">{EssayData[0].essayHeader}</div>
                    </div>
                    <div>
                        <div className="objectENButton" >EN</div>
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
                    <div className="essayFootnoteBox">
                        <div className="footnoteEnd">{EssayData[0].footnote}</div>
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
                <div className="downloadBox">Download Full Text</div>
                <div className="essayFootnoteBox">
                        <div className="footnoteEnd">{EssayData[0].footnoteFR}</div>
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
        isFrench: state._ui.isFrench
    };
};

export default connect(mapStateToProps, {
    toggleLanguage,
})(WelcomeWindow);