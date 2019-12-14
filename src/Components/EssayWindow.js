import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EssayData from '.././data/EssayData.js';
import '../App.css';
import { Rnd } from "react-rnd";
import { closeEssaySegment, increaseHighestZIndex } from '../redux/modules/ui';
// toggleLanguage


// *** TO RE-AD LANGUAGE FEAT: 
// 1. Uncomment toggleLanguage in import, and mapStatetoProps
// 2. Uncomment getLanguage() and replace html inside rnd render with call to function
// 3. I did not comment out anything in ui.js..so that should be fine
// 4. Double check that everywhere is turned back on: Welcome Window, Constellation Text Window, Copyright Window and Essay Window
// 5. look out for props in essay to make sure its pulling from the right spot

class EssayWindow extends Component {


    constructor(props) {
        super(props);
        this.state = {
            randomX: -1,
            randomY: -1,
            zIndex: 3,
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
    // getLanguage() {
    //     if (this.props.isFrench) { 
    //         console.log('Essay information', this.props.essay)
    //         console.log('is this getting the header?', this.props.essayHeader)
    //         return (
    //             <div>
    //                 <div className="essayHeaderBox">
    //                     <div className="essayHeader">{this.props.essayHeader}</div>
    //                 </div>
    //                 <div>
    //                     <div className="objectENButton">EN</div>
    //                     <div className="objectFRButton greyOut" onClick={this.props.toggleLanguage}>FR</div>
    //                 </div>

    //                 <img
    //                     className="objectExitButton"
    //                     src={require(".././images/buttons/exit_Button.svg")}
    //                     alt=""
    //                     onClick={() => {this.props.closeEssaySegment(this.props.index)} }
    //                 ></img>
    //                 <div className="essayBodyBox">
    //                     <div className="essayBody">{this.props.essay}</div>
    //                 </div>
    //             </div>
    //         )
    //     } return (
    //         <div>
    //             <div className="essayHeaderBox">
    //                 <div className="essayHeader">{this.props.essay}</div>
    //             </div>
    //             <div>
    //                 <div className="objectENButton greyOut" onClick={this.props.toggleLanguage}>EN</div>
    //                 <div className="objectFRButton">FR</div>
    //             </div>

    //             <img
    //                 className="objectExitButton"
    //                 src={require(".././images/buttons/exit_Button.svg")}
    //                 alt=""
    //                 onClick={() => {this.props.closeEssaySegment(this.props.index)} }
    //             ></img>
    //             <div className="essayBodyBox">
    //                 <div className="essayBody">{this.props.essay}</div>

    //             </div>
    //         </div>
    //     )
    // }
    render() {
        console.log(' rendering essay window' + this.props.index);
        console.log('Essay information', this.props.essay)
        console.log('is this getting the header?', this.props.essayHeader)
        if (this.props.displayed === false) {
            return null;
        }
        return (
            <Rnd
                className="essayContainer"
                style={{ zIndex: this.state.zIndex }}
                default={{
                    x: this.state.randomX,
                    y: this.state.randomY,
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
                        <div className="essayBody">
                            {this.props.essayText[0]}
                            <br />
                            <br />
                            {this.props.essayText[1]}
                            <br />
                            <br />
                            {this.props.essayText[2]}
                            <br />
                            <br />
                            {this.props.essayText[3]}
                            <div className="downloadBox">View Full Text</div>
                        </div>
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
        highestZIndex: state._ui.highestZIndex
    };
};

export default connect(mapStateToProps, {
    closeEssaySegment,
    // toggleLanguage,
    increaseHighestZIndex,
})(EssayWindow);