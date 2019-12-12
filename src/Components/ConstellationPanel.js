import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConstellationArtwork from './ConstellationArtwork';
import WelcomeWindow from './WelcomeWindow';
import EssayWindow from './EssayWindow';
import DescriptionWindow from './DescriptionWindow';
import ConstellationKeyword from './ConstellationKeyword';
import ConstellationTextWindow from './ConstellationTextWindow';
import '../App.css';
import { toggleWelcome, closeEssaySegment, toggleConstellationText } from '../redux/modules/ui';

class ConstellationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constBoxVisibile: false,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        constBoxVisibile: true
      })
    }, 10000)
  }
  renderConstellationArtworks() {
    return this.props.selectedWorks.map((work) => {
      if (work.isRemoved) {
        return null;
      }
      if (window.allWorks[work.accessNum].have_rights === 'Oui') {
        return (<div><ConstellationArtwork
          access_num={work.accessNum}
          have_rights={this.props.have_rights}
          activeWorkIndex={this.props.activeWorkIndex}
          similarityScore={work.similarityScore}
          isRelatedToHoveredKeyword={work.isRelatedToHoveredKeyword}
        /></div>)
      }
      return (<div><DescriptionWindow access_num={work.accessNum} have_rights={this.props.have_rights} subject={this.props.subject} activeWorkIndex={this.props.activeWorkIndex} /></div>)
    });
  }

  renderConstellationKeywords() {
    return Object.keys(this.props.selectedKeywords).map((keyword) => {
      return <div><ConstellationKeyword
        keyword={keyword}
        isRelatedToHoveredArtwork={this.props.selectedKeywords[keyword].isRelatedToHoveredArtwork}
      /></div>
    })
  }
  renderWelcomeWindow() {
    if (this.props.isWelcomeOpen) {
      const getWelcome = this.props.essayWindows[0];
      return <WelcomeWindow {...getWelcome} closeEssaySegment={this.props.closeEssaySegment}/>
    }
  }
  renderConstellationTextWindow() {
    if (this.state.constBoxVisibile === true) {
        const getConstellation = this.props.essayWindows[3]
        return (
          <div><ConstellationTextWindow {...getConstellation} closeEssaySegment={this.props.closeEssaySegment}/></div>
        )
    }
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
        {/* {this.props.isWelcomeOpen && <div><WelcomeWindow toggleWelcome={this.props.toggleWelcome} /></div>} */}
        {this.renderWelcomeWindow()}
        {this.renderEssayWindows()}
        {this.renderConstellationArtworks()}
        {this.renderConstellationKeywords()}
        {this.props.isConstellationTextOpen && this.renderConstellationTextWindow()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    relatedWorks: state._ui.relatedWorks,
    isWelcomeOpen: state._ui.isWelcomeOpen,
    isEssayOpen: state._ui.isEssayOpen,
    activeWorkIndex: state._ui.activeWorkIndex,
    selectedWorks: state._ui.selectedWorks,
    selectedKeywords: state._ui.selectedKeywords,
    essayWindows: state._ui.essayWindows,
    isConstellationTextOpen: state._ui.isConstellationTextOpen
  };
};

export default connect(mapStateToProps, {
  toggleWelcome,
  closeEssaySegment,
  toggleConstellationText
})(ConstellationPanel);