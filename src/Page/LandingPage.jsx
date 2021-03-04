import React, { Component } from "react";
import Slider from "react-slick";
import FlashSale from '../Component/FlashSale'
import slogan from '../Supports/Assets/cozyplace-starts-here.png'

export default class LandingPage extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            initialSlide: 0,
        };
        
        return (
        <>
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="https://jotunimages.azureedge.net/images/images/wisdom-carousel-02-1000x515_tcm61-178456.jpg" alt="..." className="w-100 jumbotron-landing-page" />
                    </div>
                    <div>
                        <img src="https://jotunimages.azureedge.net/images/images/wisdom-carousel-03-1000x515_tcm61-180034.jpg" alt="..." className="w-100 jumbotron-landing-page" />
                    </div>
                    <div>
                        <img src="https://jotunimages.azureedge.net/images/images/wisdom-carousel-04-1000x515_tcm61-180035.jpg" alt="..." className="w-100 jumbotron-landing-page" />
                    </div>
                </Slider>
                {/* <div className="container text-center text-md-left card-img-overlay border border-dark" style={{width: '10px', height: '100px', paddingTop: '200px'}}> */}
                    <h1 className="container cp-font-size-70 text-center card-img-overlay" style={{width: '500px', height: '100px', paddingTop: '200px'}} >
                        <img src={slogan} alt="..."/>
                    </h1>
                    {/* <input type="button" className="btn btn-warning" value="Shop Now!" /> */}
                {/* </div> */}
            </div>

            {/* 
            <div className="d-flex align-items-center jumbotron-landing-page">
                <div className="container text-center text-md-left">
                    <h1 className="cp-font-size-70">
                        Sale Up To 20%
                    </h1>
                    <input type="button" className="btn btn-warning" value="Shop Now!" />
                </div>
            </div>
            */}

            <div>
                <FlashSale />
            </div>
        </> 
        )
    }
}