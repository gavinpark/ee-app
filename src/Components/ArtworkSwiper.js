import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../App.css';


class ArtworkSwiper extends Component {
    render() {
// TODO: PASS PARAMS AND MAP INTO SWIPER
        return (
            <div className="infoPanelImage">
                <Swiper>
                    <img draggable="false" className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + this.props.link} alt=""></img>
                    <div>Slide 2</div>
                    <div>Slide 3</div>
                </Swiper>
            </div>
        );

    }
}

export default ArtworkSwiper;