import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// var database = [
//   {
//     key: 1,
//     imageSource: ".././images/963_06.jpg",
//     imageDesc: "",
//     isCopyright: true,
//   },
//   {
//     key: 2,
//     imageSource: ".././images/963_11.jpg",
//     imageDesc: "",
//     isCopyright: true,
//   },
//   {
//     key: 3,
//     imageSource: "",
//     imageDesc: "landscape with moon",
//     isCopyright: false,
//   }
// ]


class Landing extends Component {
  // Here, we want to map a single element/component (Collection Object?) 
  // but also have it behave like a css grid. So it might make sense to apply 
  // the css grid rules to a parent div and then inside it, map() the component?
render() {
  console.log("in database!");
  return (

    <div className='database'>

      <div><img className="artworkImage" src={require(".././images/963_06.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/963_11.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/964_19.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/965_07.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/965_26.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/967_04.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/970_01.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/972_07.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/973_04.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/974_21.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/983_14.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/984_19.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/985_119.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/985_123.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/986_13.jpg")} alt=""></img></div>
      <div><img className="artworkImage" src={require(".././images/988_06.jpg")} alt=""></img></div>
      
      {/* PLACEHOLDERS FOR WORKS WITH TWO OR MORE TAGS */}

      <div><img className="twoTags" src={require(".././images/970_01.jpg")} alt=""></img></div>
      <div><img className="twoTags" src={require(".././images/972_07.jpg")} alt=""></img></div>
      <div><img className="twoTags" src={require(".././images/973_04.jpg")} alt=""></img></div>
      <div><img className="twoTags" src={require(".././images/974_21.jpg")} alt=""></img></div>
      <div><img className="twoTags" src={require(".././images/983_14.jpg")} alt=""></img></div>
      <div><img className="twoTags" src={require(".././images/984_19.jpg")} alt=""></img></div>
      <div><img className="twoTags" src={require(".././images/985_119.jpg")} alt=""></img></div>
      <div><img className="twoTags" src={require(".././images/985_123.jpg")} alt=""></img></div>
      <div><img className="twoTags" src={require(".././images/986_13.jpg")} alt=""></img></div>
      <div><img className="twoTags" src={require(".././images/988_06.jpg")} alt=""></img></div>

      <div className='subject'>landscape with moon</div>
      <div className='subject'>vase with flower stalk</div>
      <div className='subject'>figural 2 males standing in a landscape</div>
      <div className='subject'>Sunset</div>
      <div className='subject'>Decarie Blvd. at night, foreground: solitary male figure, car, buildings in left right area, construction machines in left area.</div>
      <div className='subject'>Hello World! This is the landing page</div>

      {/* <div>
        {database.map((artwork, i) => {
            if (artwork.isCopyright === true){
              return(
                <div>
                  <img key={i} className="artworkImage" src={require(artwork.imageSource)}></img>
                </div>
              )
            } 
            if (artwork.isCopyright === false){
              return(
                <div className='subject'>{artwork.imageDesc}</div>
              )
            }
          })
        }
      </div> */}

      <Link to="main">enter the interface</Link>
    </div>
  );

}
}

export default Landing;