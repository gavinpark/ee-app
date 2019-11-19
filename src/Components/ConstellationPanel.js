import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConstellationArtwork from './ConstellationArtwork';
import WelcomeWindow from './WelcomeWindow';
import ConstellationKeyword from './ConstellationKeyword';
import '../App.css';
import { toggleWelcome } from '../redux/modules/ui';

class ConstellationPanel extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // https://reactjs.org/docs/conditional-rendering.html
    // search for &&
    return (
      <div className="constellationPanel">
        {this.props.isWelcomeOpen && <div><WelcomeWindow toggleWelcome={this.props.toggleWelcome} /></div>}
        <div><ConstellationArtwork /></div>
        <div><ConstellationKeyword /></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isWelcomeOpen: state._ui.isWelcomeOpen,
  };
};

export default connect(mapStateToProps, {
  toggleWelcome,
})(ConstellationPanel);