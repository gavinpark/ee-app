import React, { Component } from 'react';
import '../App.css';

class DatabaseItem extends Component {
  addWorkToConstellation = (access_num, similarityScore) => {
    this.props.addWorkToConstellation(access_num, similarityScore);
  }
  render() {
    const { artworkData, artwork } = this.props;
      if (artworkData.have_rights === 'Oui') {
        if (artwork.similarityScore === 2) {
          return (
              <div className="twoTags" 
              onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
              ><img className="artworkImage" src={artworkData.imageSource} alt=""></img> </div>
          )
        }
        if (artwork.similarityScore === 3){
          return(
            <div className="threeTags" 
            onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
            ><img className ="artworkImage" src={artworkData.imageSource} alt=""></img> </div>
          )
        }
        if (artwork.similarityScore >= 4){
          return(
            <div className="fourTags"
            onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
            ><img className ="artworkImage" src={artworkData.imageSource} alt=""></img> </div>
          )
        }
          return(
            <div
            onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
            ><img key={artworkData.access_num, artwork.similarityScore} className="artworkImage" src={artworkData.imageSource} alt=""></img>
            </div>
          )
        }
  
        return (
          <div className='description'
          onClick={() => {this.addWorkToConstellation(artworkData.access_num, artwork.similarityScore)}}
          >{artworkData.subject}</div>
        )
    }
}

export default DatabaseItem;