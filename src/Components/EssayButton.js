import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { openEssaySegment } from '../redux/modules/ui';

class EssayButton extends Component {
  getLanguage() {
    if (this.props.isFrench) {
      return (
        <div className="essayButtonDesc"><p>{this.props.essay.essayHeaderFR}</p></div>
      )
    } else {
      return (
        <div className="essayButtonDesc"><p>{this.props.essay.essayHeader}</p></div>
      )
    }
  }

  render() {

    return (
      <div className='essayButton cursorPoint'
        onClick={() => { this.props.openEssaySegment(this.props.index) }}
      >
        <div className="circleButton"></div>
        {this.getLanguage()}

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isFrench: state._ui.isFrench
  };
};

export default connect(mapStateToProps, {
  openEssaySegment
})(EssayButton);