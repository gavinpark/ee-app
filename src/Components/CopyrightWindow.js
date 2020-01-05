import React, { Component } from 'react';
import { connect } from 'react-redux';
import EssayData from '.././data/EssayData.js';
import '../App.css';
import { Rnd } from "react-rnd";
import { toggleCopyright } from '../redux/modules/ui';
// toggleLanguage, 

// *** TO RE-AD LANGUAGE FEAT: 
// 1. Uncomment toggleLanguage in import, and mapStatetoProps
// 2. Uncomment getLanguage() and replace html inside rnd render with call to function
// 3. I did not comment out anything in ui.js..so that should be fine
// 4. Double check that everywhere is turned back on: Welcome Window, Constellation Text Window, Copyright Window and Essay Window
// 5. look out for props in essay to make sure its pulling from the right spot

class CopyrightWindow extends Component {
    // getLanguage() {
    //     if (this.props.isFrench) {
    //         return (
    //             <div>
    //                 <div className="essayHeaderBox">
    //                     <div className="essayHeader">{EssayData[1].essayHeader}</div>
    //                 </div>
    //                 <div>
    //                     <div className="objectENButton">EN</div>
    //                     <div className="objectFRButton greyOut" onClick={this.props.toggleLanguage}>FR</div>
    //                 </div>

    //                 <img
    //                     className="objectExitButton"
    //                     src={require(".././images/buttons/exit_Button.svg")}
    //                     alt=""
    //                     onClick={this.props.toggleCopyright}
    //                 ></img>
    //                 <div className="essayBodyBox">
    //                     <div className="essayBody">{EssayData[0].essayText}</div>
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
    //                 onClick={this.props.toggleCopyright}
    //             ></img>
    //             <div className="essayBodyBox">
    //                 <div className="essayBody">{EssayData[0].essayTextFR}</div>
    //             </div>
    //         </div>
    //     )
    // }

    render() {

        return (
            <Rnd
                className="essayContainer"
                default={{
                    x: 150,
                    y: 150,
                    width: 500,
                    height: 600
                }}
                enableResizing={null}
            // style={{overflow: "scroll"}}
            >
                <div>
                    {/* {this.getLanguage()} */}
                    <div className="essayHeaderBox">
                        <div className="essayHeader">{EssayData[6].essayHeader}</div>
                    </div>

                    <img
                        className="objectExitButton"
                        src={require(".././images/buttons/exit_Button.svg")}
                        alt=""
                        onClick={this.props.toggleCopyright}
                    ></img>
                    <div className="essayBodyBox">
                        <div className="essayBody">
                            <i>{EssayData[6].disclaimer}</i>
                            <br />
                            __________
                        <br />
                            <br />
                            {EssayData[6].essayText[0]}
                            <br />
                            <br />
                            {EssayData[6].essayText[1]}
                            <br />
                            <br />
                            {EssayData[6].essayText[2]}
                            <br />
                            <br />
                            {EssayData[6].essayText[3]}
                            <div className="downloadBox">View Full Text</div>

                        </div>
                        
                    </div>
                    <div className="essayFootnoteBox">
                            {EssayData[6].footnote}
                        </div>
                </div>
            </Rnd>

        );

    }
}
const mapStateToProps = (state) => {
    return {
        // isFrench: state._ui.isFrench
    };
};

export default connect(mapStateToProps, {
    // toggleLanguage, 
    toggleCopyright,
})(CopyrightWindow);