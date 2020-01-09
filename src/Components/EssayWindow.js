import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Rnd } from "react-rnd";
import { closeEssaySegment, increaseHighestZIndex } from '../redux/modules/ui';
// toggleLanguage


// *** TO RE-AD LANGUAGE FEAT: 
// 1. Uncomment toggleLanguage in import, and mapStatetoProps
// 2. Uncomment getLanguage() and replace html inside rnd render with call to function
// 3. I did not comment out anything in ui.js..so that should be fine
// 4. Double check that everywhere is turned back on: Copyright Window and Essay Window
// 5. look out for props in essay to make sure its pulling from the right spot
// 6. make sure the html stucture reflects the most recent one (the code that is commented out is old and needs to be updated)

class EssayWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomX: -1,
            randomY: -1,
            zIndex: 2,
        }
    }

    componentDidMount() {
        this.getRandomXPosition();
        this.getRandomYPosition();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.displayed === false && this.props.displayed === true) {
            this.bringItemToHighestZIndex();
        }
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
    getFootnotes() {
        if (!this.props.footnote) {
            return null
        } else {
            return (
                <div className="essayFootnoteBox" >
                    {this.props.footnote.map(note => {
                        return (<p>{note}</p>)
                    })}
                    <div className="whiteOverlay"></div>
                </div >
            )
        }
    }
    getBodyText() {
        if (this.props.index === 10) {
            return (
                <div className="essayBody">
                    <table className="creditTable">
                        <th className="creditTH">Concept, research, text, and design</th>
                        <td className="creditTD">Gavin Park and Kristina Vannan</td>

                        <th className="creditTH">Translator</th>
                        <td className="creditTD">Catherine Barnabé</td>

                        <th className="creditTH">Editor</th>
                        <td className="creditTD">Ed Janzen</td>

                        <th className="creditTH">Web development assistance</th>
                        <td className="creditTD">Conan Lai</td>

                        <th className="creditTH">Consultation</th>
                        <td className="creditTD">Christopher Moore, Sabine Rosenberg</td>
                    </table>
                    <p>__________</p>
                    <br />
                    <br />
                    <p>{this.props.essayText[0]}</p>
                    <br />
                    <br />
                    <p>{this.props.essayText[1]}</p>
                </div>
            )
        }
        return (
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
        )
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
        if (this.props.displayed === false) {
            return null;
        }
        return (
            <Rnd
                className="essayContainer draggable"
                style={{ zIndex: this.state.zIndex }}
                default={{
                    x: this.state.randomX,
                    y: this.state.randomY,
                    width: 400,
                    height: 500
                }}
                enableResizing={null}
            // style={{overflow: "scroll"}}
            >
                <div onClick={this.bringItemToHighestZIndex}>
                    {/* {this.getLanguage()} */}

                    <div className="essayHeaderBox draggable">
                        <h1 className="essayHeader draggable">{this.props.essayHeader}</h1>
                    </div>

                    <img
                        className="objectExitButton cursorPoint"
                        src={require(".././images/buttons/exit_Button.svg")}
                        alt=""
                        onClick={() => { this.props.closeEssaySegment(this.props.index) }}
                    ></img>
                    <div className="essayBodyBox">
                        {this.getBodyText()}
                    </div>
                    {this.getFootnotes()}
                </div>

            </Rnd >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        highestZIndex: state._ui.highestZIndex,
    };
};

export default connect(mapStateToProps, {
    closeEssaySegment,
    // toggleLanguage,
    increaseHighestZIndex
})(EssayWindow);