import React, { Component } from 'react';
import '../App.css';
import ConstellationPanel from './ConstellationPanel';
import DatabasePanel from './DatabasePanel';

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
            </div>
        );
    }
}

export default MainInterface;