import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

import emptyImage from '../Supports/Assets/gambarkosong.png'

export default class FlashSale extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      pauseOnHover: true,
      initialSlide: 0,
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
              initialSlide: 1
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
                </Slider>
            <p className="text-muted font-weight-light">*occur during a limited time</p>
        </div>
    </div>
    );
  }
}