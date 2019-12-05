import React, { Component } from 'react';
import '../App.css';
// import EssayData from '.././data/EssayData.js';



class EssayButton extends Component {
  
  render() {
  
        return (
          <div className='essayButton'
          
          >{this.props.essay.essayHeader}</div>
        )
    }
}

export default EssayButton;