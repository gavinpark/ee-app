import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../App.css';


class ArtworkSwiper extends Component {
    
    getSwiper() {
            const params = {
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              },
            }
        if (this.props.link.length >= 2) {
            {
                return (this.props.link.map((image) => {
                    console.log('images', image);
                    return <Swiper {...params}><img draggable="false" className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + image} alt=""></img></Swiper>

                })

                )
            }
        } else {
            return (
                <img draggable="false" className="artworkImage" src={'http://ellengallery.concordia.ca/resi/images/' + this.props.link[0]} alt=""></img>
            )
        }
    }
    render() {
        return (
            <div className="infoPanelImage">

                {this.getSwiper()}
                
            </div >
        );
    }
}

export default ArtworkSwiper;