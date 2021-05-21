import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import FlashSale from '../Component/FlashSale'
import slogan from '../Supports/Assets/cozyplace-starts-here.png'

import { searchText } from '../Redux/Actions/CartAction'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "none"}} onClick={onClick} />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "none"}} onClick={onClick} />
    );
}

class LandingPage extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            appendDots: dots => <ul>{dots}</ul>,
              customPaging: i => (
                <div className="slick-dots-custom"></div>
              )
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
                <div className="container cp-font-size-70 text-center card-img-overlay" style={{width: '500px', height: '100px', paddingTop: '200px'}} >
                    <img src={slogan} alt="..."/>
                </div>
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

export default LandingPage