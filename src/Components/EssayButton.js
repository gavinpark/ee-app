import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { openEssaySegment } from '../redux/modules/ui';

class EssayButton extends Component {
  
  render() {
  
        return (
          <div className='essayButton cursorPoint'
          onClick={() => {this.props.openEssaySegment(this.props.index)}}
          >
            <div className="circleButton"></div>
            <div className="essayButtonDesc"><p>{this.props.essay.essayHeader}</p></div>
            
            </div>
        )
    }
}

export default connect(() => { return {} }, {
  openEssaySegment
})(EssayButton);