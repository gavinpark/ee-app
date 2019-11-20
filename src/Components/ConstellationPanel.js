import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConstellationArtwork from './ConstellationArtwork';
import WelcomeWindow from './WelcomeWindow';
import ConstellationKeyword from './ConstellationKeyword';
import '../App.css';
import { toggleWelcome } from '../redux/modules/ui';

class ConstellationPanel extends Component {

  renderConstellationArtworks() {
    return this.props.selectedWorks.map((work) => {
      return <div><ConstellationArtwork access_num={work} activeWorkIndex={this.props.activeWorkIndex} /></div>
    });
  }

  render() {
    // https://reactjs.org/docs/conditional-rendering.html
    // search for &&
    return (
      <div className="constellationPanel">
        {this.props.isWelcomeOpen && <div><WelcomeWindow toggleWelcome={this.props.toggleWelcome} /></div>}
        {this.renderConstellationArtworks()}
        <div><ConstellationKeyword /></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isWelcomeOpen: state._ui.isWelcomeOpen,
    activeWorkIndex: state._ui.activeWorkIndex,
    selectedWorks: state._ui.selectedWorks,
    selectedKeywords: state._ui.selectedKeywords,
  };
};

export default connect(mapStateToProps, {
  toggleWelcome,
})(ConstellationPanel);