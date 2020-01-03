import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConstellationArtwork from './ConstellationArtwork';
import EssayWindow from './EssayWindow';
import DescriptionWindow from './DescriptionWindow';
import ConstellationKeyword from './ConstellationKeyword';
import '../App.css';
import {closeEssaySegment, openEssaySegment } from '../redux/modules/ui';

class ConstellationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constBoxVisibile: false,
    }
  }
  componentDidMount() {
    this.props.openEssaySegment(0);
    setTimeout(() => {
      this.props.openEssaySegment(3);
    }, 15000)
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
      return (<div><DescriptionWindow access_num={work.accessNum} have_rights={this.props.have_rights} subject={this.props.subject} activeWorkIndex={this.props.activeWorkIndex} isRelatedToHoveredKeyword={work.isRelatedToHoveredKeyword}/></div>)
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
  
  renderEssayWindows() {
    return this.props.essayWindows.map((essay, index) => {
        return <EssayWindow {...essay} closeEssaySegment={this.props.closeEssaySegment} index={index} />
    })
  }
  render() {
    return (
      <div className="constellationPanel">
        {this.renderEssayWindows()}
        {this.renderConstellationArtworks()}
        {this.renderConstellationKeywords()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    relatedWorks: state._ui.relatedWorks,
    isEssayOpen: state._ui.isEssayOpen,
    activeWorkIndex: state._ui.activeWorkIndex,
    selectedWorks: state._ui.selectedWorks,
    selectedKeywords: state._ui.selectedKeywords,
    essayWindows: state._ui.essayWindows,
  };
};

export default connect(mapStateToProps, {
  closeEssaySegment,
  openEssaySegment,
})(ConstellationPanel);