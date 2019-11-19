import React, { Component } from 'react';
import Data from '.././data/data.js';
import '../App.css';
import { Rnd } from 'react-rnd';

class ConstellationKeyword extends Component {
    // constructor(props) {
    //     this.state = {
    //         zIndex: 0,
    //     }

    //     componentDidMount = () => {
    //         this.findZIndex();
    //     }

    //     findZIndex = () => {
    //         // call this on the click handler for the RnD component too?
    //         // https://github.com/bokuweb/react-rnd
    //         this.setState({
    //             zIndex: this.props.highestZIndex + 1,
    //         });
    //     }
    // }
    render() {
        return (
            <Rnd
                enableResizing={null}
                >
                <div className="keyword">{Data[0].Keyword01}</div>
            </Rnd>
        );

    }
}

export default ConstellationKeyword;