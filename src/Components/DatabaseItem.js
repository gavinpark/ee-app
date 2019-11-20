import React, { Component } from 'react';
import '../App.css';

class DatabaseItem extends Component {
  render() {
    const { artworkData, artwork } = this.props;
      if (artworkData.have_rights === 'Oui') {
        if (artwork.similarityScore === 2) {
          return (
              <div className="twoTags" ><img className="artworkImage" src={artworkData.imageSource} alt=""></img> </div>
          )
        }
        if (artwork.similarityScore === 3){
          return(
            <div className="threeTags" ><img className ="artworkImage" src={artworkData.imageSource} alt=""></img> </div>
          )
        }
        if (artwork.similarityScore >= 4){
          return(
            <div className="fourTags" ><img className ="artworkImage" src={artworkData.imageSource} alt=""></img> </div>
          )
        }
          return(
            <div>
              <img key={artworkData.access_num} className="artworkImage" src={artworkData.imageSource} alt=""></img>
            </div>
          )
        }
  
        return (
          <div className='description'>{artworkData.subject}</div>
        )
    }
}

export default DatabaseItem;