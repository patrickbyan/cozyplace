import React from 'react'
import axios from 'axios'
import LinkProduct from '../Supports/Constants/linkProduct';
import logo from '../Supports/Assets/logo.png'
import { connect } from 'react-redux'

import checkUserLogin from '../Supports/Functions/checkUserLogin'

// ACTION REDUX
import { getDataCart } from '../Redux/Actions/CartAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faChevronCircleLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class DetailProduct extends React.Component{
    state = {
        dataDetailProduct: null,
        idProduct: this.props.location.pathname.split('/')[2],
        idUser: localStorage.getItem('id'),
        mainImage: null,
        addToCartSuccess: false
    }

    componentDidMount(){
        this.getDataProduct()
        this.onCheckUserLogin()
    }

    onCheckUserLogin = () => {
        let id = localStorage.getItem('id')

        let result = checkUserLogin(id)
        this.setState({isUserLogin: result})
    }

    getDataProduct = () => {
        let idProduct = this.state.idProduct

        axios.get(`${LinkProduct}/${idProduct}`)
        .then((res)=>{
            this.setState({dataDetailProduct: res.data})
            this.setState({mainImage: res.data.image1})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    addToCart = () => {
        let idProduct = this.state.idProduct
        let idUser = this.state.idUser
        let quantity = 1

        this.props.getDataCart(idProduct, idUser, quantity)
    }

    render(){
        if(this.state.dataDetailProduct === null){
            return(
                <div>
                    <div className="container text-center mt-5 height-150 mb-5">
                        <div className="spinner-grow text-warning" style={{width: '3rem', height: '3rem'}} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div className="container-md">
                <div className="row justify-content-center pt-5 pb-5 ">
                    <div className="col-12 close text-warning mb-3 font-weight-normal" style={{fontSize: '18px'}} role="button" onClick={() => window.location = "/products"}>
                        <FontAwesomeIcon icon={ faChevronLeft } className="mr-2" /> kembali ke daftar produk
                    </div>
                    <div className="col-12 col-md-6 pt-1">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <img src={this.state.mainImage} className="img-fluid" alt="..." />
                            </div>
                            <div className="col 3 mt-4">
                                <img src={this.state.dataDetailProduct.image1} className={this.state.mainImage === this.state.dataDetailProduct.image1? 'img-fluid border border-warning' : 'img-fluid'} alt="..." onClick={() => this.setState({mainImage: this.state.dataDetailProduct.image1})} />
                            </div>
                            <div className="col 3 mt-4">
                                <img src={this.state.dataDetailProduct.image2} className={this.state.mainImage === this.state.dataDetailProduct.image2? 'img-fluid border border-warning' : 'img-fluid'} alt="..." onClick={() => this.setState({mainImage: this.state.dataDetailProduct.image2})}/>
                            </div>
                            <div className="col 3 mt-4">
                                {
                                    this.state.dataDetailProduct.image3?
                                        <img src={this.state.dataDetailProduct.image3} className={this.state.mainImage === this.state.dataDetailProduct.image3? 'img-fluid border border-warning' : 'img-fluid'} alt="" onClick={() => this.setState({mainImage: this.state.dataDetailProduct.image3})}/>
                                    :
                                        <img src={logo} className={this.state.mainImage === this.state.dataDetailProduct.image3? 'img-fluid border border-warning' : 'img-fluid'} alt="" onClick={() => this.setState({mainImage: logo})}/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 h4 pl-0 ml-0">
                                {this.state.dataDetailProduct.name}
                            </div>
                            <div className="col-12 font-weight-normal h6 pl-0 ml-0">
                                Sold : ... Produk
                            </div>
                            <div className="col-12 h5 pl-0 ml-0">
                                Rp. {(this.state.dataDetailProduct.price).toLocaleString()}
                            </div>
                            <div className="col-11 pl-0 ml-0">
                                <hr className="border-dark w-100" />
                            </div>
                            <div className="w-100 my-2">
                                <div className="col-12 font-weight-normal text-muted h6 pl-0 ml-0">
                                    Stock : {this.state.dataDetailProduct.stock} Item
                                </div>
                                <div className="col-12 font-weight-normal text-muted h6 pl-0 ml-0">
                                    Weight : {(this.state.dataDetailProduct.weight)/1000} kg
                                </div>
                            </div>
                            <div className="col-11 pl-0 ml-0">
                                <hr className="border-dark w-100" />
                            </div>
                            <div className="col-12 h6 pl-0 ml-0">
                                Description :
                            </div>
                            <div className="col-11 text-wrap text-justify pl-0 ml-0">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel repudiandae, hic dolorum maiores dolor illum
                            </div>
                            <div className="w-100">

                            </div>
                            {
                                this.state.isUserLogin?
                                    <div className="col-11 pl-0 ml-0 h-100 mt-4">
                                        <input type="button" className="btn btn-warning w-100 align-self-end" onClick={this.addToCart} value="Add to Cart" />
                                    </div>
                                :
                                    <div className="alert alert-warning" role="alert">
                                        Login Terlebih Dahulu untuk Memasukan Produk ke Cart!
                                    </div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    getDataCart
}

export default connect('', mapDispatchToProps)(DetailProduct)