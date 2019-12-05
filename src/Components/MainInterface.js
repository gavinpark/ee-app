import React, { Component } from 'react';
import '../App.css';
import ConstellationPanel from './ConstellationPanel';
import DatabasePanel from './DatabasePanel';
import ArtworkInfoPanel from './ArtworkInfoPanel';
import Marquee from '.././lib/Marquee.js';

// TODO: add redux function for artworkinforpanelopen true/false; pass props to component

class MainInterface extends Component {
    render() {
        return (
            <div className="mainContainer">
                
                <div className="constellationPanel">
                    <ConstellationPanel />
                </div>
                <div className="DatabasePanel">
                    <DatabasePanel />
                </div>
                {this.props.artWorkInfoPanelOpen && <ArtworkInfoPanel />}
            </div>
        );
    }
}

export default MainInterface;