import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Data from '.././data/data.js';
import LandingItem from './LandingItem';
import '../App.css';

class Landing extends Component {

  // Here, we want to map a single element/component (Collection Object?) 
  // but also have it behave like a css grid. So it might make sense to apply 
  // the css grid rules to a parent div and then inside it, map() the component?
  render() {
    return (

      <div className='databaseLanding'>

        {this.props.relatedWorks.map((artwork, i) => {
          const artworkData = window.allWorks[artwork.access_num];
          console.log('artwork', artwork);
          return <LandingItem artworkData={artworkData} artwork={artwork}></LandingItem>
        })}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    relatedWorks: state._ui.relatedWorks,
  };
};

// TODO: add action to actually select a new artwork
export default connect(mapStateToProps)(Landing);