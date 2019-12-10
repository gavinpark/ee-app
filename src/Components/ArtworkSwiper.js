import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../App.css';


class ArtworkSwiper extends Component {
    getSwiper() {
        if (this.props.link.length >= 2) {
            {
                Object.keys(this.props.link.map((image) => {
                    return <img draggable="false" className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + { image }} alt=""></img>
                })
                )}
        } else {
            return (
                <img draggable="false" className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + this.props.link[0]} alt=""></img>
            )
        }
    }
    render() {
        // TODO: PASS PARAMS AND MAP INTO SWIPER
        return (
            <div className="infoPanelImage">
                 <Swiper>
                    {this.getSwiper()}
                 </Swiper>
            </div>
        );
    }
}

export default ArtworkSwiper;