import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ConstellationArtwork from './ArtworkInfoPanel';
import { Rnd } from "react-rnd";
import '../App.css';



class UserSelection extends Component {
  render() {

    return (
      <Rnd
        className="collectionObject"
        default={{
          x: 0,
          y: 0,
          width: 300,
          
          
        }}
        lockAspectRatio={true}
        minWidth={100}
      >
        <img draggable="false" className="artworkImage" src={require(".././images/low res/979_22(450).jpg")} alt=""></img>
        <Link to="/artwork-info-panel"><img className="objectMoreButton" src={require(".././images/buttons/more_Button.svg")} alt=""></img></Link>
        <img className="objectExitButton" src={require(".././images/buttons/exit_Button.svg")} alt=""></img>

      </Rnd>

    );

  }
}


export default UserSelection;