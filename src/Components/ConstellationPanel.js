import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConstellationArtwork from './ConstellationArtwork';
import WelcomeWindow from './WelcomeWindow';
import EssayWindow from './EssayWindow';
import DescriptionWindow from './DescriptionWindow';
import ConstellationKeyword from './ConstellationKeyword';
import '../App.css';
import { toggleWelcome, closeEssaySegment } from '../redux/modules/ui';

class ConstellationPanel extends Component {
  renderConstellationArtworks() {
    return this.props.selectedWorks.map((work) => {
      if (window.allWorks[work].have_rights === 'Oui'){
        return (<div><ConstellationArtwork access_num={work} have_rights={this.props.have_rights} activeWorkIndex={this.props.activeWorkIndex} /></div>)
      }
      return(<div><DescriptionWindow access_num={work} have_rights={this.props.have_rights} subject={this.props.subject} activeWorkIndex={this.props.activeWorkIndex}/></div>)
    });
  }

  renderConstellationKeywords() {
    return Object.keys(this.props.selectedKeywords).map((keyword) => {
      return <div><ConstellationKeyword keyword={keyword} /></div>
    })
  }

  renderEssayWindows() {
    return this.props.essayWindows.map((essay, index) => {
      return <EssayWindow {...essay} closeEssaySegment={this.props.closeEssaySegment} index={index} />
    })
  }

  render() {
    // https://reactjs.org/docs/conditional-rendering.html
    // search for &&
    return (
      <div className="constellationPanel">
        {this.props.isWelcomeOpen && <div><WelcomeWindow toggleWelcome={this.props.toggleWelcome} /></div>}
        {this.renderEssayWindows()}
        {this.renderConstellationArtworks()}
        {this.renderConstellationKeywords()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isWelcomeOpen: state._ui.isWelcomeOpen,
    isEssayOpen: state._ui.isEssayOpen,
    activeWorkIndex: state._ui.activeWorkIndex,
    selectedWorks: state._ui.selectedWorks,
    selectedKeywords: state._ui.selectedKeywords,
    essayWindows: state._ui.essayWindows,
  };
};

export default connect(mapStateToProps, {
  toggleWelcome,
  closeEssaySegment 
})(ConstellationPanel);