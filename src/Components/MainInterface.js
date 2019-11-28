import React, { Component } from 'react';
import '../App.css';
import ConstellationPanel from './ConstellationPanel';
import DatabasePanel from './DatabasePanel';
import ArtworkInfoPanel from './ArtworkInfoPanel';

// TODO: add redux function for artworkinforpanelopen true/false; pass props to component

class MainInterface extends Component {
    render() {
        return (
            <div className="mainContainer">
                {this.props.artWorkInfoPanelOpen && <ArtworkInfoPanel />}
                <div className="constellationPanel">
                    <ConstellationPanel />
                </div>
                <div className="DatabasePanel">
                    <DatabasePanel />
                </div>
                
            </div>
        );
    }
}

export default MainInterface;