import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeight, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios'
import LinkProduct from '../Supports/Constants/linkProduct'

import emptyImage from '../Supports/Assets/gambarkosong.png'
import Settings from '../Supports/Constants/Flashsale'

export default class FlashSale extends Component {
    
    state = {
        dataSale: null,
    }

    // DID MOUNT KE FUNCTION ON GET DATA
    componentDidMount(){
        this.onGetData()
    }

    // PENGAMBILAN DATA DARI SERVER JSON
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
                    <div w-0 h-0 m-0 p-0>
                    
                    </div>
                )
            }else{
                return(
                    <div>
                        <div className="card width-250 align-self-center m-3 card-radius height-300">
                            <img src={value.image1} className="card-img-top width-250 height-120 pt-3 pl-4 pr-4" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title h6 cp-dark-grey h-50" key={index}>{value.name}</h6>
                                <p className="card-text font-weight-lighter cp-font-size-14 mt-n2"><del>{value.price}</del></p>
                                <p className="card-text font-weight-normal mt-n3">{value.price-((value.diskon/100) * value.price)}</p>
                            </div>
                            <p class="card-text pb-5 pl-3 d-flex"><small class="text-muted">
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
        if(this.state.dataSale === null){
            return(
                <div>
                    Loading...
                </div>
            )
        }    
        return (
            <div className="cp-bg-white">
                <div className="container pt-4 cp-bg-white">
                    <div className="text-center">
                        <h2 className="font-weight-bold">FLASH SALE</h2>
                        <h5>Its your chance to get our finest products but in a cheap price. Don't Miss It!</h5>
                    </div>
                    <Slider {...Settings} className="bg-warning card-deck mt-3">
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