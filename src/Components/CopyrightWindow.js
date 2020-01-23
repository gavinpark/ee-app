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
    //                     src="http://ellengallery.concordia.ca/establishing-a-database-connection/static/media/exit_Button.svg"
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
    //                 src="http://ellengallery.concordia.ca/establishing-a-database-connection/static/media/exit_Button.svg"
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
                <div
                    className="copyrightContainer">
                    <div>
                        {/* {this.getLanguage()} */}
                        <div className="essayHeaderBox ">
                            <h1 className="essayHeader ">{EssayData[6].essayHeader}</h1>
                        </div>

                        <img
                            className="objectExitButton cursorPoint"
                            src="http://ellengallery.concordia.ca/establishing-a-database-connection/static/media/exit_Button.svg"
                            alt=""
                            onClick={this.props.toggleCopyright}
                        ></img>
                        <div className="copyrightBodyBox">
                            <div className="essayBody">
                                <p><i>{EssayData[6].disclaimer}</i></p>
                                <br />
                                <p>__________</p>
                                <br />
                                <p>{EssayData[6].essayText[0]}</p>

                                <br />
                                <p>{EssayData[6].essayText[1]}</p>

                                <br />
                                <p>{EssayData[6].essayText[2]}</p>

                                <br />
                                <p>{EssayData[6].essayText[3]}</p>

                                <a
                                    className="downloadBox cursorPoint"
                                    href="http://ellengallery.concordia.ca/establishing-a-database-connection/static/media/EDC_Essay.pdf"
                                    target="_blank">
                                    View Full Text </a>

                            </div>

                        </div>
                        <div className="essayFootnoteBox">
                            <p>{EssayData[6].footnote[0]}</p>

                            <p>{EssayData[6].footnote[1]}</p>

                            <p>{EssayData[6].footnote[2]}</p>
                            <div className="whiteOverlay"></div>
                        </div>
                    </div>
                </div>
            // </fragment>
        );

    }
}
const mapStateToProps = (state) => {
    return {
        isFrench: state._ui.isFrench
    };
};

export default connect(mapStateToProps, {
    // toggleLanguage, 
    toggleCopyright,
})(CopyrightWindow);