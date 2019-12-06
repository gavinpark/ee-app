import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import { Rnd } from "react-rnd";
import { toggleDetailPanel, increaseHighestZIndex } from '../redux/modules/ui';
import ArtworkInfoPanel from './ArtworkInfoPanel';

class DescriptionWindow extends Component {
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
        var x = document.getElementsByClassName('constellationPanel')[0].offsetHeight;
        var randomX = Math.floor(Math.random() * (x - min)) + min;
        

        // return randomX;
        this.setState({
            randomX,
        });
    }
    getRandomYPosition() {
        var min = 0;
        var y = document.getElementsByClassName('constellationPanel')[0].offsetWidth;
        var randomY = Math.floor(Math.random() * (y - min)) + min;
       

        // return randomY;
        this.setState({
            randomY,
        });
    }
    openArtworkInfoPanel(access_num) {
        console.log('in artwork info panel');
        this.props.toggleDetailPanel(access_num);
    }

    // artworkData.subject
    render() {
        const artworkData = window.allWorks[this.props.access_num];

        const subject = artworkData.subject;
        // const subject = window.allWorks[this.props.access_num].subject;
        return this.state.randomX > -1 && this.state.randomY > -1 && (


            <Rnd className="descriptionWindow"
                onClick={this.bringItemToHighestZIndex}
                style={{ zIndex: this.state.zIndex }}
                enableResizing={null}
                default={{
                    x: this.state.randomX,
                    y: this.state.randomY,
                    width: 200,


                }}
            >

                <div className="descriptionText">{subject}</div>

                <div className="descriptionHeaderBox">
                    <img
                        className="objectMoreButton"
                        src={require(".././images/buttons/more_Button.svg")}
                        alt=""
                        onClick={() => { this.openArtworkInfoPanel(artworkData.access_num) }}
                    ></img>
                    <img className="objectExitButton"
                        src={require(".././images/buttons/exit_Button.svg")}
                        alt=""
                    ></img></div>

            </Rnd>
        )

    }


}


const mapStateToProps = (state) => {
    return {
        isDetailPanelOpen: state._ui.isDetailPanelOpen,
        highestZIndex: state._ui.highestZIndex
    };
};

export default connect(mapStateToProps, {
    toggleDetailPanel, increaseHighestZIndex
})(DescriptionWindow);