import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Rnd } from "react-rnd";
import { toggleDetailPanel, increaseHighestZIndex, removeWorkFromConstellation, onHoverArtwork, offHoverArtwork, openCopyright } from '../redux/modules/ui';

class DescriptionWindow extends Component {
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
        this.bringItemToHighestZIndex();
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
        var x = document.getElementsByClassName('constellationPanel')[0].offsetHeight - 200;
        var randomX = Math.floor(Math.random() * (x - min)) + min;
        // return randomX;
        this.setState({
            randomX,
        });
    }
    getRandomYPosition() {
        var min = 0;
        var y = document.getElementsByClassName('constellationPanel')[0].offsetWidth - 200;
        var randomY = Math.floor(Math.random() * (y - min)) + min;

        // return randomY;
        this.setState({
            randomY,
        });
    }
    // renderArtworkInfoPanel() {
    //     return <div>
    //       <ArtworkInfoPanel artworkData={this.props.artworkData}/>
    //     </div>
    //   }
    openArtworkInfoPanel(access_num, rights) {

        this.props.toggleDetailPanel(access_num);
        this.props.openCopyright(rights)
    }
    handleMouseOver = () => {
        this.props.onHoverArtwork(this.props.access_num);
    }

    handleMouseOff = () => {
        this.props.offHoverArtwork();
    }
    removeWork = (access_num) => {
        this.props.removeWorkFromConstellation(access_num);
    }

    // artworkData.subject
    render() {
        const artworkData = window.allWorks[this.props.access_num];
        const isRelatedToHoveredKeywordClass = this.props.isRelatedToHoveredKeyword
            ? 'isRelatedToHoveredKeyword' :
            this.props.hoveredKeyword ? 'isNotRelatedToHoveredKeyword' : '';
        const subject = artworkData.subject;
        // const subject = window.allWorks[this.props.access_num].subject;

        return this.state.randomX > -1 && this.state.randomY > -1 && (


            <Rnd 
                className="descriptionWindow draggable"
                style={{ zIndex: this.state.zIndex }}
                enableResizing={null}
                default={{
                    x: this.state.randomX,
                    y: this.state.randomY,
                    width: 200,
                }}
            >
                <div
                    onClick={this.bringItemToHighestZIndex}
                    className={isRelatedToHoveredKeywordClass}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOff}
                >
                    <div className="descriptionText draggable">{subject}</div>

                    <div className="descriptionHeaderBox draggable">
                        <img
                            className="objectMoreButton cursorPoint"
                            src={require(".././images/buttons/more_Button.svg")}
                            alt=""
                            onClick={() => { this.openArtworkInfoPanel(artworkData.access_num, artworkData.have_rights) }}
                        ></img>
                        <img className="objectExitButton cursorPoint"
                            src={require(".././images/buttons/exit_Button.svg")}
                            alt=""
                            onClick={() => { this.removeWork(artworkData.access_num) }}
                        ></img></div>
                </div>


            </Rnd>
        )

    }


}


const mapStateToProps = (state) => {
    return {
        relatedWorks: state._ui.relatedWorks,
        isDetailPanelOpen: state._ui.isDetailPanelOpen,
        highestZIndex: state._ui.highestZIndex,
        hoveredKeyword: state._ui.hoveredKeyword
    };
};

export default connect(mapStateToProps, {
    toggleDetailPanel, increaseHighestZIndex, removeWorkFromConstellation, onHoverArtwork, offHoverArtwork, openCopyright
})(DescriptionWindow);