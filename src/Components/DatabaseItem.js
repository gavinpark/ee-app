import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class DatabaseItem extends Component {
  addWorkToConstellation = (access_num, similarityScore, link) => {
    this.props.addWorkToConstellation(access_num, similarityScore, link);
  }
  render() {
    const { artworkData, artwork } = this.props;
    const isRelatedToHoveredKeyword = window.allWorks[artworkData.access_num].final_words.includes(this.props.hoveredKeyword);
    const isRelatedToHoveredKeywordClassName = isRelatedToHoveredKeyword ? 'isRelatedToHoveredKeyword' : 'isNOTrelatedToHoveredKeyword';
      if (artworkData.have_rights === 'Oui') {
        if (artwork.similarityScore === 2) {
          return (
              <div className={`${isRelatedToHoveredKeywordClassName} twoTags`} 
              onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
              ><img draggable="false" className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + artworkData.link[0]} alt=""></img> </div>
          )
        }
        if (artwork.similarityScore === 3){
          return(
            <div className={`${isRelatedToHoveredKeywordClassName} threeTags`} 
            onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
            ><img draggable="false" className ="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + artworkData.link[0]} alt=""></img> </div>
          )
        }
        if (artwork.similarityScore >= 4){
          return(
            <div className="fourTags"
            onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
            ><img draggable="false" className ={`${isRelatedToHoveredKeywordClassName} artworkImage`} src={'http://ellengallery.concordia.ca/resi/images/' + artworkData.link[0]} alt=""></img> </div>
          )
        }
          return(
            <div
            onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
            ><img draggable="false" key={artworkData.access_num, artwork.similarityScore} className={`${isRelatedToHoveredKeywordClassName} artworkImage`} src={'http://ellengallery.concordia.ca/resi/images/' + artworkData.link[0]} alt=""></img>
            </div>
          )
        }
  
        if (artwork.similarityScore ===2){ 
        return (
          <div className={`${isRelatedToHoveredKeywordClassName} description`}
          onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
          >{artworkData.subject}</div>
        )
      }
      if (artwork.similarityScore >=3){
        return (
          <div className='description threeTags'
          onClick={() => {this.props.addWorkToConstellation(artworkData.access_num)}}
          >{artworkData.subject}</div>
        )
      }
     
      return (
        <div className='description'
        onClick={() => {this.props.addWorkToConstellation(artworkData.access_num)}}
        >{artworkData.subject}</div>
      )
    }
    
}

const mapStateToProps = (state) => {
  return {
    hoveredKeyword: state._ui.hoveredKeyword,
  };
};

export default connect(mapStateToProps)(DatabaseItem);
