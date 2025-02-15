import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class DatabaseItem extends Component {
  addWorkToConstellation = (access_num, similarityScore, link) => {
    this.props.addWorkToConstellation(access_num, similarityScore, link);
  }
  render() {
    // <div id="overlay"></div>

    const { artworkData, artwork } = this.props;
    const isRelatedToHoveredKeyword = window.allWorks[artworkData.access_num].final_words.includes(this.props.hoveredKeyword);
    const isRelatedToHoveredKeywordClassName = isRelatedToHoveredKeyword
    ? 'isRelatedToHoveredKeyword' :
    this.props.hoveredKeyword ? 'isNotRelatedToHoveredKeyword' : '';
    // const isRelatedToHoveredKeywordID = isRelatedToHoveredKeyword ? '' : 'overlay';
      if (artworkData.have_rights === 'Oui') {
        if (artwork.similarityScore >= 2) {
          return (
              <div className={`${isRelatedToHoveredKeywordClassName} twoTags`} 
              onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
              ><object draggable="false" className={`${isRelatedToHoveredKeywordClassName} artworkImage cursorPoint`} data={'http://ellengallery.concordia.ca/establishing-a-database-connection/images/' + artworkData.link[0]} alt=""></object> </div>
          )
        }

          return(
            <div className= {`${isRelatedToHoveredKeywordClassName}`}
            onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
            ><object draggable="false" key={artworkData.access_num, artwork.similarityScore} className={`${isRelatedToHoveredKeywordClassName} artworkImage cursorPoint`} data={'http://ellengallery.concordia.ca/establishing-a-database-connection/images/' + artworkData.link[0]} alt=""></object>
            </div>
          )
        }
  
        if (artwork.similarityScore >=2){ 
        return (
          <div className={`${isRelatedToHoveredKeywordClassName} description twoTags cursorPoint`}
          onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}>
            <p>{artworkData.subject}</p>
          <div className="whiteOverlay"></div> </div>
        )
      }
     
      return (
        <div className={`${isRelatedToHoveredKeywordClassName} description cursorPoint`}
        onClick={() => {this.props.addWorkToConstellation(artworkData.access_num)}}>
          <p>{artworkData.subject}</p>
        <div className="whiteOverlay"></div> 
        </div>
      )
    }
    
}

const mapStateToProps = (state) => {
  return {
    hoveredKeyword: state._ui.hoveredKeyword,
  };
};

export default connect(mapStateToProps)(DatabaseItem);
