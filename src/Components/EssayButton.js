import React, { Component } from 'react';
import '../App.css';


class EssayButton extends Component {
  render() {
        return (
          <div className='essayButton'
          onClick={() => {this.props.addWorkToConstellation(EssayData.key)}}
          >{EssayData.essayHeader}</div>
        )
    }
}

export default EssayButton;