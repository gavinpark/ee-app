import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConstellationArtwork from './ConstellationArtwork';
import WelcomeWindow from './WelcomeWindow';
import DescriptionWindow from './DescriptionWindow';
import ConstellationKeyword from './ConstellationKeyword';
import ConstellationTextWindow from './ConstellationTextWindow';
import '../App.css';
import { toggleWelcome } from '../redux/modules/ui';

class ConstellationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constBoxVisibile: false,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      console.log('got text!');
      this.setState({
        constBoxVisibile: true
      })
    }, 15000)
  }
  renderConstellationArtworks() {
    return this.props.selectedWorks.map((work) => {
      if (window.allWorks[work].have_rights === 'Oui') {
        return (<div><ConstellationArtwork access_num={work} have_rights={this.props.have_rights} activeWorkIndex={this.props.activeWorkIndex} /></div>)
      }
      return (<div><DescriptionWindow access_num={work} have_rights={this.props.have_rights} subject={this.props.subject} activeWorkIndex={this.props.activeWorkIndex} /></div>)
    });
  }

  renderConstellationKeywords() {
    return Object.keys(this.props.selectedKeywords).map((keyword) => {
      return <div><ConstellationKeyword keyword={keyword} /></div>
    })
  }
  renderConstellationTextWindow() {
    if (this.state.constBoxVisibile === true) {
      return (
        <div><ConstellationTextWindow /></div>
      )
    }
  }
  render() {
    // https://reactjs.org/docs/conditional-rendering.html
    // search for &&
    return (
      <div className="constellationPanel">
        {this.props.isWelcomeOpen && <div><WelcomeWindow toggleWelcome={this.props.toggleWelcome} /></div>}
        {this.renderConstellationArtworks()}
        {this.renderConstellationKeywords()}
        {this.renderConstellationTextWindow()}
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