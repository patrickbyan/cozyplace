import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios'
import LinkProduct from '../Supports/Constants/linkProduct'
import { Link } from 'react-router-dom'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="carousel-control-next" role="button" onClick={onClick}>
            <span className="carousel-control-next-icon fa" style={{ ...style, marginLeft: '220px' }}></span>
        </div>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="carousel-control-prev slick-arrow" role="button" onClick={onClick}>
            <span className="carousel-control-prev-icon fa" style={{ ...style, marginRight: '220px' }}></span>
        </div>
    );
}

export default class FlashSale extends Component {
    state = {
        dataSale: null,
    }

    componentDidMount(){
        this.onGetData()
    }

    onGetData = () => {
        Axios.get(LinkProduct)
        .then((res) => {
            this.setState({dataSale: res.data})
        })

        .catch((err) => {
            console.log(err)
        })
    }

    mapFlashSale = () => {
        return this.state.dataSale.map((value, index) => {
            if(value.diskon === 0){
                return(
                    null
                )
            }else{
                return(
                    <div key={index}>
                        <div className="card width-250 align-self-center m-3 card-radius height-300">
                                <div className="container pt-4" style={{zIndex: '3'}}>
                                    <div className="bg-light w-25 text-center ml-n2">
                                        {value.diskon}%
                                    </div>
                                </div>
                                <Link to={`/detailProduct/${value.id}`}>
                                    <img src={value.image1} className="card-img-top width-250 height-120 mt-n5 pt-3 pl-4 pr-4" alt="..." />
                                </Link>
                            <div className="card-body">
                                <h6 className="card-title h6 cp-dark-grey h-25 mt-n2" key={index}>{value.name}</h6>
                                <p className="card-text font-weight-lighter cp-font-size-14 mt-3"><del>Rp {(value.price).toLocaleString()}</del></p>
                                <p className="card-text font-weight-normal mt-n2">Rp {(value.price-((value.diskon/100) * value.price)).toLocaleString()}</p>
                            </div>
                            <p className="card-text pb-5 pl-3 d-flex"><small className="text-muted">
                                <FontAwesomeIcon icon={faWeightHanging} className="fa-lg mr-2 text-warning" style={{zIndex: '3'}} />
                                Berat: {value.weight/1000} kg 
                            </small></p>
                        </div>
                    </div>
                )
            }
        })
    }

    render() {
        const SettingsDesktop = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        }

        if(this.state.dataSale === null){
            return(
                <div className="container text-center mt-5 height-150 mb-5">
                    <div className="spinner-grow text-warning" style={{width: '3rem', height: '3rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }    
        return (
            <div className="cp-bg-white d-md-block d-none">
                <div className="container pt-4 cp-bg-white">
                    <div className="text-center">
                        <h2 className="font-weight-bold">FLASH SALE</h2>
                        <h5>
                            Build your own 
                                <span className="cp-color-one"> coz</span>
                                <span className="cp-color-two">ypl</span>
                                <span className="cp-color-three">ace </span>
                            now, Don't Miss It!
                        </h5>
                    </div>
                    <Slider {...SettingsDesktop} className="bg-warning px-3 py-3 mt-3 full-radius">
                        {
                            this.mapFlashSale()
                        }
                    </Slider>
                <p className="text-muted font-weight-light">*occur during a limited time</p>
            </div>
        </div>
        );
    }
}