import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

import emptyImage from '../Supports/Assets/gambarkosong.png'
import startsHere from '../Supports/Assets/cozyplace-starts-here.png'

export default class FlashSale extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      initialSlide: 1,
      responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
    };

    return (
        <div className="cp-bg-white">
            <div className="container pt-4 cp-bg-white">
                <div className="text-center">
                    <h2 className="font-weight-bold">FLASH SALE</h2>
                    <h5>Its your chance to get our finest products but in a cheap price. Don't Miss It!</h5>
                </div>
                <Slider {...settings} className="bg-warning card-deck mt-3">
                    <div className="mt-3 width-250 d-flex align-items-center justify-content-center height-300">
                        <img src={startsHere} class="width-300 pl-3" alt="..."/>
                    </div>
                    <div>
                        <div className="card width-250 align-self-center m-3 card-radius height-300">
                            <img src={emptyImage} className="card-img-top width-250 pt-3 pl-4 pr-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h6 cp-dark-grey">Produk 1</h5>
                                <p className="card-text font-weight-lighter cp-font-size-14"><del>Harga dicoret</del></p>
                                <p className="card-text font-weight-normal mt-n3">Harga promo</p>
                            </div>
                            <p class="card-text mt-n5 pb-5 pl-3 d-flex"><small class="text-muted">
                                <FontAwesomeIcon icon={faTruck} className="fa-lg mr-2 ml-2 text-warning" style={{zIndex: '3'}} />
                                2 minggu pengiriman
                            </small></p>
                        </div>
                    </div>
                    <div>
                        <div className="card width-250 align-self-center m-3 card-radius height-300">
                            <img src={emptyImage} className="card-img-top width-250 pt-3 pl-4 pr-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h6 cp-dark-grey">Produk 2</h5>
                                <p className="card-text font-weight-lighter cp-font-size-14"><del>Harga dicoret</del></p>
                                <p className="card-text font-weight-normal mt-n3">Harga promo</p>
                            </div>
                            <p class="card-text mt-n5 pb-5 pl-3 d-flex"><small class="text-muted">
                                <FontAwesomeIcon icon={faTruck} className="fa-lg mr-2 ml-2 text-warning" style={{zIndex: '3'}} />
                                2 minggu pengiriman
                            </small></p>
                        </div>
                    </div>
                    <div>
                        <div className="card width-250 align-self-center m-3 card-radius height-300">
                            <img src={emptyImage} className="card-img-top width-250 pt-3 pl-4 pr-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h6 cp-dark-grey">Produk 3</h5>
                                <p className="card-text font-weight-lighter cp-font-size-14"><del>Harga dicoret</del></p>
                                <p className="card-text font-weight-normal mt-n3">Harga promo</p>
                            </div>
                            <p class="card-text mt-n5 pb-5 pl-3 d-flex"><small class="text-muted">
                                <FontAwesomeIcon icon={faTruck} className="fa-lg mr-2 ml-2 text-warning" style={{zIndex: '3'}} />
                                2 minggu pengiriman
                            </small></p>
                        </div>
                    </div>
                    <div>
                        <div className="card width-250 align-self-center m-3 card-radius height-300">
                            <img src={emptyImage} className="card-img-top width-250 pt-3 pl-4 pr-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h6 cp-dark-grey">Produk 4</h5>
                                <p className="card-text font-weight-lighter cp-font-size-14"><del>Harga dicoret</del></p>
                                <p className="card-text font-weight-normal mt-n3">Harga promo</p>
                            </div>
                            <p class="card-text mt-n5 pb-5 pl-3 d-flex"><small class="text-muted">
                                <FontAwesomeIcon icon={faTruck} className="fa-lg mr-2 ml-2 text-warning" style={{zIndex: '3'}} />
                                2 minggu pengiriman
                            </small></p>
                        </div>
                    </div>
                    <div>
                        <div className="card width-250 align-self-center m-3 card-radius height-300">
                            <img src={emptyImage} className="card-img-top width-250 pt-3 pl-4 pr-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h6 cp-dark-grey">Produk 5</h5>
                                <p className="card-text font-weight-lighter cp-font-size-14"><del>Harga dicoret</del></p>
                                <p className="card-text font-weight-normal mt-n3">Harga promo</p>
                            </div>
                            <p class="card-text mt-n5 pb-5 pl-3 d-flex"><small class="text-muted">
                                <FontAwesomeIcon icon={faTruck} className="fa-lg mr-2 ml-2 text-warning" style={{zIndex: '3'}} />
                                2 minggu pengiriman
                            </small></p>
                        </div>
                    </div>
                    <div>
                        <div className="card width-250 align-self-center m-3 card-radius height-300">
                            <img src={emptyImage} className="card-img-top width-250 pt-3 pl-4 pr-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h6 cp-dark-grey">Produk 6</h5>
                                <p className="card-text font-weight-lighter cp-font-size-14"><del>Harga dicoret</del></p>
                                <p className="card-text font-weight-normal mt-n3">Harga promo</p>
                            </div>
                            <p class="card-text mt-n5 pb-5 pl-3 d-flex"><small class="text-muted">
                                <FontAwesomeIcon icon={faTruck} className="fa-lg mr-2 ml-2 text-warning" style={{zIndex: '3'}} />
                                2 minggu pengiriman
                            </small></p>
                        </div>
                    </div>
                    <div>
                        <div className="card width-250 align-self-center m-3 card-radius height-300">
                            <img src={emptyImage} className="card-img-top width-250 pt-3 pl-4 pr-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h6 cp-dark-grey">Produk 7</h5>
                                <p className="card-text font-weight-lighter cp-font-size-14"><del>Harga dicoret</del></p>
                                <p className="card-text font-weight-normal mt-n3">Harga promo</p>
                            </div>
                            <p class="card-text mt-n5 pb-5 pl-3 d-flex"><small class="text-muted">
                                <FontAwesomeIcon icon={faTruck} className="fa-lg mr-2 ml-2 text-warning" style={{zIndex: '3'}} />
                                2 minggu pengiriman
                            </small></p>
                        </div>
                    </div>
                    <div>
                        <div className="card width-250 align-self-center m-3 card-radius height-300">
                            <img src={emptyImage} className="card-img-top width-250 pt-3 pl-4 pr-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h6 cp-dark-grey">Produk 8</h5>
                                <p className="card-text font-weight-lighter cp-font-size-14"><del>Harga dicoret</del></p>
                                <p className="card-text font-weight-normal mt-n3">Harga promo</p>
                            </div>
                            <p class="card-text mt-n5 pb-5 pl-3 d-flex"><small class="text-muted">
                                <FontAwesomeIcon icon={faTruck} className="fa-lg mr-2 ml-2 text-warning" style={{zIndex: '3'}} />
                                2 minggu pengiriman
                            </small></p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 width-250 d-flex align-items-center justify-content-center height-300">
                            <button type="button" class="btn btn-light width-150">Show more!</button>
                        </div>
                    </div>
                </Slider>
            <p className="text-muted font-weight-light">*occur during a limited time    </p>
        </div>
    </div>
    );
  }
}