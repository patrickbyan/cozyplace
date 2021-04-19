import React from 'react'
import axios from 'axios'
import LinkProduct from '../Supports/Constants/linkProduct';
import logo from '../Supports/Assets/logo.png'
import { connect } from 'react-redux'

import checkUserLogin from '../Supports/Functions/checkUserLogin'

// ACTION REDUX
import { getDataCart } from '../Redux/Actions/CartAction'

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
                    <div className="col-12 col-md-6 ">
                        <div className="">
                            <h4>{this.state.dataDetailProduct.name}</h4>
                            <h6 className="font-weight-normal">Sold : ... Produk</h6>
                            <h5>Rp. {(this.state.dataDetailProduct.price).toLocaleString()}</h5>
                            <hr className="border-dark hr-style"/>
                            <h6 className="font-weight-normal text-muted">Stock : {this.state.dataDetailProduct.stock} Item</h6>
                            <h6 className="font-weight-normal text-muted">Weight : {(this.state.dataDetailProduct.weight)/1000} kg</h6>
                            <hr className="border-dark hr-style"/>
                            <h6>Description :</h6>
                            <p className="text-wrap col-7 p-0 m-0 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel repudiandae, hic dolorum maiores dolor illum</p>
                            <div className="width-300 row align-items-center ml-1 mt-4">
                                {
                                    this.state.isUserLogin?
                                        <div className="cp-clickable-element" onClick={this.addToCart}>
                                            <div className="width-250 col-10 btn btn-warning height-40">Add to Cart</div>
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
            </div>
        )
    }
}

const mapDispatchToProps = {getDataCart}

export default connect('', mapDispatchToProps)(DetailProduct)