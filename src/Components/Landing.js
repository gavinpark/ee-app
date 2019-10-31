import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Landing extends Component {
  // Here, we want to map a single element/component (Collection Object?) 
  // but also have it behave like a css grid. So it might make sense to apply 
  // the css grid rules to a parent div and then inside it, map() the component?
  
  render() {

    return (
      <div class='database'>

          <div><img className="artworkImage" src="images/963_06.jpg" alt=""></img></div>
          <div><img className="artworkImage" src="images/963_11.jpg" alt=""></img></div>
          <div><img className="artworkImage" src="images/964_19.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/965_07.jpg" alt=""></img></div>
          <div><img className="artworkImage" src="images/965_26.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/967_04.jpg" alt=""></img></div>
          <div><img className="artworkImage" src="images/970_01.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/972_07.jpg" alt=""></img></div>
          <div><img className="artworkImage" src="images/973_04.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/974_21.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/983_14.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/984_19.jpg" alt=""></img></div>
          <div><img className="artworkImage" src="images/985_119.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/985_123.jpg" alt=""></img></div>
          <div><img className="artworkImage" src="images/986_13.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/988_06.jpg" alt=""></img></div>
          <div><img className="artworkImage" src="images/989_03.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/998_04.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/994_15.tif" alt=""></img></div>
          <div><img className="artworkImage" src="images/996_10.tif" alt=""></img></div>


          <p className='subject'>landscape with moon</p>
          <p className='subject'>vase with flower stalk</p>
          <p className='subject'>figural 2 males standing in a landscape</p>
          <p className='subject'>Sunset</p>
          <p className='subject'>Decarie Blvd. at night, foreground: solitary male figure, car, buildings in left right area, construction machines in left area.</p>
          <p className='subject'>Hello World! This is the landing page</p>


          <Link to="main">enter the interface</Link>
      </div>
    );

  }
}

export default Landing;