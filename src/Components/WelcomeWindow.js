import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EssayData from '.././data/EssayData.js';
import '../App.css';
import { Rnd } from "react-rnd";
import { increaseHighestZIndex } from '../redux/modules/ui';
// toggleLanguage, 

// *** TO RE-AD LANGUAGE FEAT: 
// 1. Uncomment toggleLanguage in import, and mapStatetoProps
// 2. Uncomment getLanguage() and replace html inside rnd render with call to function
// 3. I did not comment out anything in ui.js..so that should be fine
// 4. Double check that everywhere is turned back on: Welcome Window, Constellation Text Window, Copyright Window and Essay Window
// 5. look out for props in essay to make sure its pulling from the right spot

class WelcomeWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zIndex: 3,
        }
    }
    componentDidMount() {
        // this.movezIndexToTop();
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
    //                     <div className="essayHeader">{EssayData[0].essayHeader}</div>
    //                 </div>
    //                 <div>
    //                     <div className="objectENButton">EN</div>
    //                     <div className="objectFRButton greyOut" onClick={this.props.toggleLanguage}>FR</div>
    //                 </div>

    //                 <img
    //                     className="objectExitButton"
    //                     src={require(".././images/buttons/exit_Button.svg")}
    //                     alt=""
    //                     onClick={this.props.toggleWelcome}
    //                 ></img>
    //                 <div className="essayBodyBox">
    //                     <div className="essayBody">{EssayData[0].essayText}</div>
    //                 </div>
    //                 <div className="essayFootnoteBox">
    //                     <div className="footnoteEnd">{EssayData[0].footnote}</div>
    //                 </div>
    //             </div>
    //         )
    //     } return (
    //         <div>
    //             <div className="essayHeaderBox">
    //                 <div className="essayHeader">{EssayData[0].essayHeaderFR}</div>
    //             </div>
    //             <div>
    //                 <div className="objectENButton greyOut" onClick={this.props.toggleLanguage}>EN</div>
    //                 <div className="objectFRButton">FR</div>
    //             </div>

    //             <img
    //                 className="objectExitButton"
    //                 src={require(".././images/buttons/exit_Button.svg")}
    //                 alt=""
    //                 onClick={this.props.toggleWelcome}
    //             ></img>
    //             <div className="essayBodyBox">
    //                 <div className="essayBody">{EssayData[0].essayTextFR}</div>

    //             </div>
    // <div className="downloadBox">Download Full Text</div>
    // <div className="essayFootnoteBox">
    //     <div className="footnoteEnd">{EssayData[0].footnoteFR}</div>
    // </div>
    //         </div>
    //     )
    // }

    render() {
        return (
            <Rnd
                className="essayContainer"
                style={{ zIndex: this.state.zIndex }}
                default={{
                    x: 100,
                    y: 100,
                    width: 500,
                    height: 600
                }}
                enableResizing={null}
            // style={{overflow: "scroll"}}
            >
                <div onClick={this.bringItemToHighestZIndex}>
                    {/* {this.getLanguage()} */}
                    <div className="essayHeaderBox">
                        <div className="essayHeader">{EssayData[0].essayHeader}</div>
                    </div>

                    <img
                        className="objectExitButton"
                        src={require(".././images/buttons/exit_Button.svg")}
                        alt=""
                        onClick={this.props.toggleWelcome}
                    ></img>
                    <div className="essayBodyBox">
                    <div className="essayBody">
                            {EssayData[0].essayText[0]}
                            <br />
                            <br />
                            {EssayData[0].essayText[1]}
                            <br />
                            <br />
                            {EssayData[0].essayText[2]}
                            <br />
                            <br />
                            {EssayData[0].essayText[3]}
                            <div className="downloadBox">View Full Text</div>
                        </div>

                    </div>
                    <div className="essayFootnoteBox">
                        <div className="footnoteEnd">{EssayData[0].footnote}</div>
                    </div>
                </div>
            </Rnd>
        );

    }
}
const mapStateToProps = (state) => {
    return {
        // isFrench: state._ui.isFrench,
        highestZIndex: state._ui.highestZIndex,
    };
};

export default connect(mapStateToProps, {
    // toggleLanguage, 
    increaseHighestZIndex
})(WelcomeWindow);