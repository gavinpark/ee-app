import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '.././data/data.js';
import '../App.css';

class DatabasePanel extends Component {
  render() {
    return (

      <div className="databasePanel">

        {Data.map((artwork, i) => {
          if (artwork.isCopyright === true) {
            if (artwork.twoTags == true) {
              return (
                  <div className="twoTags" ><img className="artworkImage" src={artwork.imageSource} alt=""></img> </div>
              )
            }
            if (artwork.threeTags == true){
              return(
                <div className="threeTags" ><img className ="artworkImage" src={artwork.imageSource} alt=""></img> </div>
              )
            }
            if (artwork.fourOrMoreTags == true){
              return(
                <div className="fourTags" ><img className ="artworkImage" src={artwork.imageSource} alt=""></img> </div>
              )
            }
              return(
                <div>
                  <img key={i} className="artworkImage" src={artwork.imageSource} alt=""></img>
                </div>
              )
            }
            
            if (artwork.isCopyright === false) {
              return (
                <div className='description'>{artwork.imageDesc}</div>
              )
            }
        })
        }
        <div></div>
        <div className="essayButton">Essay Segment 01</div>
        <div></div>
        <div></div>
        <div className="essayButton">Essay Segment 03</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="essayButton">Essay Segment 07</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  
}
export default DatabasePanel;


// }$(function () {
//   var DatabasePanel = $("#shuffle");
//   var divs = DatabasePanel.children();
//   while (divs.length) {
//       DatabasePanel.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//   }
// });