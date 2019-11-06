import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '.././data/data.js';
import '../App.css';


class Landing extends Component {
  // Here, we want to map a single element/component (Collection Object?) 
  // but also have it behave like a css grid. So it might make sense to apply 
  // the css grid rules to a parent div and then inside it, map() the component?
  render() {
    console.log("in database!");
    return (

      <div className='databaseLanding'>

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
            if (artwork.twoTags === true)  {
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
      {/* </div> */}

        <Link to="main">enter the interface</Link>
      </div>
    );

  }
}

export default Landing;