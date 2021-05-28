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
        return (
        <>
            <div id="jumbotronCarrousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#jumbotronCarrousel" data-slide-to="0" class="active"></li>
                    <li data-target="#jumbotronCarrousel" data-slide-to="1"></li>
                    <li data-target="#jumbotronCarrousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://jotunimages.azureedge.net/images/images/wisdom-carousel-02-1000x515_tcm61-178456.jpg" alt="..." className="d-block w-100 jumbotron-landing-page" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://jotunimages.azureedge.net/images/images/wisdom-carousel-03-1000x515_tcm61-180034.jpg" alt="..." className="d-block w-100 jumbotron-landing-page" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://jotunimages.azureedge.net/images/images/wisdom-carousel-04-1000x515_tcm61-180035.jpg" alt="..." className="d-block w-100 jumbotron-landing-page" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#jumbotronCarrousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#jumbotronCarrousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                <div className="container card-img-overlay d-md-block d-none" style={{width: '550px', height: '300px', marginTop: '75px'}}>
                    <img src={slogan} alt="..." className="p-2"/>
                </div>
                <div className="container card-img-overlay d-md-none d-block" style={{marginTop: '80px'}}>
                    <img src={slogan} alt="..." className="p-5 w-100"/>
                </div>
            </div>
            <div>
                <FlashSale />
            </div>
        </> 
        )
    }
}

export default LandingPage