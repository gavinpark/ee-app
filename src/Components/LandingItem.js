import React, { Component } from 'react';
import '../App.css';

class LandingItem extends Component {

  enterMainPage = (accessNum, similarityScore) => {
    this.props.removeInitialArtwork();
    this.props.addWorkToConstellation(accessNum, similarityScore);
    this.props.openMainPage();
  }

  render() {
    const { artworkData, artwork } = this.props;
    if (artworkData.have_rights === 'Oui') {
      if (artwork.similarityScore === 2) {
        return (
          <div
            className="twoTags"
            onClick={() => {this.enterMainPage(artworkData.access_num,  artwork.similarityScore)}}
           ><object draggable="false" className="artworkImage cursorPoint" data={'http://ellengallery.concordia.ca/establishing-a-database-connection/images/' + artworkData.link[0]} alt=""></object></div>
        )
      }
      if (artwork.similarityScore === 3) {
        return (
          <div
            className="threeTags"
            onClick={() => {this.enterMainPage(artworkData.access_num,  artwork.similarityScore)}}
          ><object draggable="false" className="artworkImage cursorPoint" data={'http://ellengallery.concordia.ca/establishing-a-database-connection/images/' + artworkData.link[0]} alt=""></object> </div>
        )
      }
      if (artwork.similarityScore >= 4) {
        return (
          <div
            className="fourTags"
            onClick={() => {this.enterMainPage(artworkData.access_num,  artwork.similarityScore)}}
          ><object draggable="false" className="artworkImage cursorPoint" data={'http://ellengallery.concordia.ca/establishing-a-database-connection/images/' + artworkData.link[0]} alt=""></object> </div>
        )
      }
      return (
        <div
          onClick={() => {this.enterMainPage(artworkData.access_num,  artwork.similarityScore)}}
        >
          <object draggable="false" key={artworkData.access_num} className="artworkImage cursorPoint" data={'http://ellengallery.concordia.ca/establishing-a-database-connection/images/' + artworkData.link[0]} alt=""></object>
        </div>
      )
    }
    if (artwork.similarityScore===2){
      return (
        <div onClick={() => {this.enterMainPage(artworkData.access_num)}} className='description twoTags cursorPoint'>
          <p>{artworkData.subject}</p>
        <div className="whiteOverlay"></div> 
        </div>
      )
    }
    if (artwork.similarityScore ===3){
      return (
        <div onClick={() => {this.enterMainPage(artworkData.access_num)}} className='description threeTags cursorPoint'>
          <p>{artworkData.subject}</p>
        <div className="whiteOverlay"></div> 
        </div>
      )
    }
    if (artwork.similarityScore >=4){
      return (
        <div onClick={() => {this.enterMainPage(artworkData.access_num)}} className='description fourTags cursorPoint'>
          <p>{artworkData.subject}</p>
        <div className="whiteOverlay"></div> 
        </div>
      )
    }
    return (
      <div onClick={() => {this.enterMainPage(artworkData.access_num)}} className='description cursorPoint'>
        <p>{artworkData.subject}</p>
      <div className="whiteOverlay"></div> 
      </div>
    )
  }
}
export default LandingItem;