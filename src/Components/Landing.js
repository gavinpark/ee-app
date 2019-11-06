import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '.././data/data.json';
import '../App.css';

// var database = [
//   {
//     key: 1,
//     imageSource: require(".././images/963_06.jpg"),
//     imageDesc: "abstraction, metal? objects arrange haphazardly",
//     isCopyright: true,
//   },
//   {
//     key: 2,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "reclining figure",
//     isCopyright: false,
//     twoTags: true,
//   },
//   {
//     key: 3,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "Seated woman with hands on abdomen. Could possibly be a dwarf.",
//     isCopyright: false,
//   },
//   {
//     key: 4,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "landscape with moon",
//     isCopyright: false,
//   },
//   {
//     key: 5,
//     imageSource: require(".././images/low res/969_24(450).jpg"),
//     imageDesc: "abstraction, metal? objects arrange haphazardly",
//     isCopyright: true,
//   },
//   {
//     key: 6,
//     imageSource: require(".././images/low res/973_10(450).jpg"),
//     imageDesc: "",
//     isCopyright: true,
//   },
//   {
//     key: 7,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "mountain landscape",
//     isCopyright: false,
//   },
//   {
//     key: 8,
//     imageSource: require(".././images/low res/964_08(450).jpg"),
//     imageDesc: "abstraction, metal? objects arrange haphazardly",
//     isCopyright: true,
//   },
//   {
//     key: 9,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "Long necked bottle, globular body decorated with incision and punctuation on matt surface",
//     isCopyright: false,
//   },
//   {
//     key: 10,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "curving swirls of colour laong bottom half of canvas",
//     isCopyright: false,
//   },
//   {
//     key: 11,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "wooded area with rock intrusion in foreground, lake in middle ground and mountains in background",
//     twoTags: true, 
//     isCopyright: true,
//   },
//   {
//     key: 12,
//     imageSource: require(".././images/963_06.jpg"),
//     imageDesc: "abstraction, metal? objects arrange haphazardly",
//     isCopyright: false,
//   },
//   {
//     key: 13,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "",
//     isCopyright: false,
//   },
//   {
//     key: 14,
//     imageSource: require(".././images/low res/984_01(450).jpg"),
//     imageDesc: "Whistle holes in navel and bottom of figure. Painted reddish brown designs on torso and crown of head.",
//     isCopyright: false,
//   },
//   {
//     key: 15,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "landscape with house in right foreground, trees and brush in middle ground, mountains and sky in background",
//     isCopyright: false,
//   },
//   {
//     key: 16,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "",
//     isCopyright: false,
//   },
//   {
//     key: 17,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "Girl with pitcher",
//     isCopyright: false,
//   },
//   {
//     key: 18,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "winter forest landscape",
//     isCopyright: false,
//   },
//   {
//     key: 19,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "landscape with figures, half moon and clouds on left, trees and lime-burners middle to right",
//     isCopyright: false,
//   },
//   {
//     key: 20,
//     imageSource: require(".././images/low res/969_24(450).jpg"),
//     imageDesc: "Pigs",
//     isCopyright: false,
//   },
//   {
//     key: 21,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "",
//     isCopyright: true,
//   },
//   {
//     key: 22,
//     imageSource: require(".././images/low res/969_18(450).jpg"),
//     imageDesc: "",
//     isCopyright: true,
//   },
//   {
//     key: 23,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "",
//     isCopyright: false,
//   },
//   {
//     key: 24,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "",
//     isCopyright: false,
//   },
//   {
//     key: 25,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "landscape with moon",
//     isCopyright: false,
//   },
//   {
//     key: 25,
//     imageSource: require(".././images/963_11.jpg"),
//     imageDesc: "",
//     isCopyright: false,
//   },
// ]


class Landing extends Component {
  // Here, we want to map a single element/component (Collection Object?) 
  // but also have it behave like a css grid. So it might make sense to apply 
  // the css grid rules to a parent div and then inside it, map() the component?
  render() {
    console.log("in database!");
    return (

      <div className='databaseLanding'>

        {/* <div><img src={require(".././images/963_06.jpg")} alt=""></img></div>
        <div><img src={require(".././images/963_11.jpg")} alt=""></img></div>
        <div><img src={require(".././images/964_19.jpg")} alt=""></img></div>
        <div><img src={require(".././images/965_07.jpg")} alt=""></img></div>
        <div><img src={require(".././images/965_26.jpg")} alt=""></img></div>
        <div><img src={require(".././images/967_04.jpg")} alt=""></img></div>
        <div><img src={require(".././images/970_01.jpg")} alt=""></img></div>
        <div><img src={require(".././images/972_07.jpg")} alt=""></img></div>
        <div><img src={require(".././images/973_04.jpg")} alt=""></img></div>
        <div>
          <Link to="collection-object">collection object</Link>
          <img src={require(".././images/974_21.jpg")} alt=""></img>
        </div>
        <div><img src={require(".././images/983_14.jpg")} alt=""></img></div>
        <div><img src={require(".././images/984_19.jpg")} alt=""></img></div>
        <div><img src={require(".././images/985_119.jpg")} alt=""></img></div>
        <div><img src={require(".././images/985_123.jpg")} alt=""></img></div>
        <div><img src={require(".././images/986_13.jpg")} alt=""></img></div>
        <div><img src={require(".././images/988_06.jpg")} alt=""></img></div> */}

        {/* PLACEHOLDERS FOR WORKS WITH TWO TAGS */}
        {/* <div className="twoTags"><img src={require(".././images/970_01.jpg")} alt=""></img></div>
        <div className="twoTags"><img src={require(".././images/972_07.jpg")} alt=""></img></div>
        <div className="twoTags"><img src={require(".././images/973_04.jpg")} alt=""></img></div>
        <div className="twoTags"><img src={require(".././images/974_21.jpg")} alt=""></img></div> */}

        {/* PLACEHOLDERS FOR WORKS WITH THREE TAGS */}
        {/* <div className="threeTags"><img src={require(".././images/970_01.jpg")} alt=""></img></div>
        <div className="threeTags"><img src={require(".././images/972_07.jpg")} alt=""></img></div>
        <div className="threeTags"><img src={require(".././images/973_04.jpg")} alt=""></img></div>
        <div className="threeTags"><img src={require(".././images/974_21.jpg")} alt=""></img></div>


        <div>
          <p>landscape with moon</p>
        </div>
        <div>
          <p>vase with flower stalk</p>
        </div>
        <div>
          <p>figural 2 males standing in a landscape</p>
        </div>
        <div>
          <p>Sunset</p>
        </div>
        <div>
          <p>Decarie Blvd. at night, foreground: solitary male figure, car, buildings in left right area, construction machines in left area.</p>
        </div> */}

        {/* <div> */}
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