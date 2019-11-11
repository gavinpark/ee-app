import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '.././data/data.js';
import '../App.css';

class DatabasePanel extends Component {
  render() {

    return (
      <div className="databasePanel">

{Data.map((artwork, i) => {
    if (artwork.isCopyright === true){
      return(
        <div>
          <img key={i} className="artworkImage" src={artwork.imageSource} alt=""></img>
        </div>
      )
    } 
    if (artwork.isCopyright === false){
      return(
        <div className='description'>{artwork.imageDesc}</div>
      )
    }
    if (artwork.isCopyright === true && artwork.twoTags === true)  {
      return(
        <div className="twoTags" ><img src={artwork.imageSource} alt=""></img> </div>
      )
    }
    // if (artwork.twoTags === true){
    //   return (
    //     <div className='twoTags'>{artwork.imageDesc}</div>
    //   )
    // }
  })
}

      </div>
    );

  }
}

export default DatabasePanel;