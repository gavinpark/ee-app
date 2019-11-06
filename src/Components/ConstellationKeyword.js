import React, { Component } from 'react';
import '../App.css';

class ConstellationKeyword extends Component {
    constructor(props) {
        this.state = {
            zIndex: 0,
        }

        componentDidMount = () => {
            this.findZIndex();
        }

        findZIndex = () => {
            // call this on the click handler for the RnD component too?
            // https://github.com/bokuweb/react-rnd
            this.setState({
                zIndex: this.props.highestZIndex + 1,
            });
        }
    }
    render() {
        return (
            <div>
                <p>UserSelection</p>
            </div>
        );

    }
}

export default ConstellationKeyword;