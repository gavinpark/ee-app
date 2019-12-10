import React, { Component } from 'react';
import '../App.css';

class DatabaseItem extends Component {

  // addWorkFromPanel = (accessNum) => {
  //   console.log('gggggg')
  //   this.props.addWorkToConstellation(accessNum);
  // }
  render() {
    const { artworkData, artwork } = this.props;
      if (artworkData.have_rights === 'Oui') {
        if (artwork.similarityScore === 2) {
          return (
              <div className="twoTags" 
              onClick={() => {this.props.addWorkToConstellation(artworkData.access_num)}}
              ><img className="artworkImage" src={artworkData.imageSource} alt=""></img> </div>
          )
        }
        if (artwork.similarityScore === 3){
          return(
            <div className="threeTags" 
            onClick={() => {this.props.addWorkToConstellation(artworkData.access_num)}}
            ><img className ="artworkImage" src={artworkData.imageSource} alt=""></img> </div>
          )
        }
        if (artwork.similarityScore >= 4){
          return(
            <div className="fourTags"
            onClick={() => {this.props.addWorkToConstellation(artworkData.access_num)}}
            ><img className ="artworkImage" src={artworkData.imageSource} alt=""></img> </div>
          )
        }
          return(
            <div
            onClick={() => {this.props.addWorkToConstellation(artworkData.access_num)}}
            ><img key={artworkData.access_num} className="artworkImage" src={artworkData.imageSource} alt=""></img>
            </div>
          )
        }
  
        if (artwork.similarityScore ===2){
        return (
          <div className='description twoTags'
          onClick={() => {this.props.addWorkToConstellation(artworkData.access_num)}}
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

export default DatabaseItem;