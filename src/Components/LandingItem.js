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
           ><img className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + artworkData.link} alt=""></img></div>
        )
      }
      if (artwork.similarityScore === 3) {
        return (
          <div
            className="threeTags"
            onClick={() => {this.enterMainPage(artworkData.access_num,  artwork.similarityScore)}}
          ><img className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + artworkData.link} alt=""></img> </div>
        )
      }
      if (artwork.similarityScore >= 4) {
        return (
          <div
            className="fourTags"
            onClick={() => {this.enterMainPage(artworkData.access_num,  artwork.similarityScore)}}
          ><img className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + artworkData.link} alt=""></img> </div>
        )
      }
      return (
        <div
          onClick={() => {this.enterMainPage(artworkData.access_num,  artwork.similarityScore)}}
        >
          <img key={artworkData.access_num} className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + artworkData.link} alt=""></img>
        </div>
      )
    }
    return (
      <div onClick={() => {this.enterMainPage(artworkData.access_num)}} className='description'>{artworkData.subject}</div>
    )
  }
}
export default LandingItem;