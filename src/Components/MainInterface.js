import React, { Component } from 'react';
import '../App.css';
import ConstellationPanel from './ConstellationPanel';
import DatabasePanel from './DatabasePanel';

class MainInterface extends Component {
    render() {

        return (
            <div>
                <div className="constellationPanel">
                    <ConstellationPanel />
                </div>
                <div>
                    
                    
                    <DatabasePanel />
                </div>
            </div>
        );

    }
}

export default MainInterface;