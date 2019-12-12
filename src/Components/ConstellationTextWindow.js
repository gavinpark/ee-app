import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EssayData from '.././data/EssayData.js';
import '../App.css';
import { Rnd } from "react-rnd";
import { closeEssaySegment, toggleConstellationText, increaseHighestZIndex } from '../redux/modules/ui';
// toggleLanguage, 


// *** TO RE-AD LANGUAGE FEAT: 
// 1. Uncomment toggleLanguage in import, and mapStatetoProps
// 2. Uncomment getLanguage() and replace html inside rnd render with call to function
// 3. I did not comment out anything in ui.js..so that should be fine
// 4. Double check that everywhere is turned back on: Welcome Window, Constellation Text Window, Copyright Window and Essay Window
// 5. look out for props in essay to make sure its pulling from the right spot

class ConstellationTextWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zIndex: 1,
        }
    }
    bringItemToHighestZIndex = () => {
        const nextHighestZindex = this.props.highestZIndex + 1;
        this.setState({
            zIndex: nextHighestZindex,
        })
        this.props.increaseHighestZIndex();
    }
    // getLanguage() {
    //     if (this.props.isFrench) {
    //         return (
    //             <div>
    //                 <div className="essayHeaderBox">
    //                     <div className="essayHeader">{EssayData[2].essayHeader}</div>
    //                 </div>
    //                 <div>
    //                     <div className="objectENButton">EN</div>
    //                     <div className="objectFRButton greyOut" onClick={this.props.toggleLanguage}>FR</div>
    //                 </div>

    //                 <img
    //                     className="objectExitButton"
    //                     src={require(".././images/buttons/exit_Button.svg")}
    //                     alt=""
    //                     onClick={this.props.toggleConstellationText}
    //                 ></img>
    //                 <div className="essayBodyBox">
    //                     <div className="essayBody">{EssayData[2].essayText}</div>
    //                 </div>
    //             </div>
    //         )
    //     } return (
    //         <div>
    //             <div className="essayHeaderBox">
    //                 <div className="essayHeader">{EssayData[2].essayHeaderFR}</div>
    //             </div>
    //             <div>
    //                 <div className="objectENButton greyOut" onClick={this.props.toggleLanguage}>EN</div>
    //                 <div className="objectFRButton">FR</div>
    //             </div>

    //             <img
    //                 className="objectExitButton"
    //                 src={require(".././images/buttons/exit_Button.svg")}
    //                 alt=""
    //                 onClick={this.props.toggleConstellationText}
    //             ></img>
    //             <div className="essayBodyBox">
    //                 <div className="essayBody">{EssayData[2].essayTextFR}</div>
    //             </div>
    //         </div>
    //     )
    // }
    render() {
        return (
            <Rnd
                className="essayContainer"
                style={{ zIndex: this.state.zIndex }}
                default={{
                    x: 300,
                    y: 350,
                    width: 500,
                    height: 600
                }}
                enableResizing={null}
            // style={{overflow: "scroll"}}
            >
                <div onClick={this.bringItemToHighestZIndex}>
                    {/* {this.getLanguage()} */}
                    <div className="essayHeaderBox">
                        <div className="essayHeader">{this.props.essayHeader}</div>
                    </div>

                    <img
                        className="objectExitButton"
                        src={require(".././images/buttons/exit_Button.svg")}
                        alt=""
                        onClick={() => { this.props.closeEssaySegment(this.props.index) }}
                    ></img>
                    <div className="essayBodyBox">
                        <div className="essayBody">{this.props.essayText}</div>
                        <div className="downloadBox">View Full Text</div>
                    </div>
                    <div className="essayFootnoteBox">
                        {this.props.footnote}
                    </div>
                </div>
            </Rnd>
        );

    }
}
const mapStateToProps = (state) => {
    return {
        // isFrench: state._ui.isFrench,
        isEssayOpen: state._ui.isEssayOpen,
        highestZIndex: state._ui.highestZIndex,
        isConstellationTextOpen: state._ui.isConstellationTextOpen
    };
};

export default connect(mapStateToProps, {
    closeEssaySegment,
    // toggleLanguage, 
    increaseHighestZIndex, toggleConstellationText
})(ConstellationTextWindow);