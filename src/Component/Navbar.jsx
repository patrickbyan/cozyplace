import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faHeart, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import logo from '../Supports/Assets/logo.png'
import LinkAPI from '../Supports/Constants/linkAPI'

import { searchText } from '../Redux/Actions/CartAction'
import swal from 'sweetalert2';

class Navbar extends React.Component{
    state = {
        username: null,
        showModal: false,
        error: null,
        currentTotalCarts: 0,
        id: localStorage.getItem('id'),
        showPassword: false,
        button: true
    }

    componentDidMount(){
        this.getUsername()
        this.getCurrentTotalCarts()
    }

    getUsername = () => {
        let id = this.state.id

        if(id){
            axios.get(LinkAPI + `/users/${id}`)
            .then((res) => {
                this.setState({username: res.data.username})
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    onLogout = () => {
        swal.fire({
            title: 'Heads Up!',
            text: 'Are you sure you want to log out?',
            icon: 'warning'
        })
        .then((isResult) => {
            localStorage.removeItem('id')
            swal.fire({
                title: 'Success',
                text: 'Log out success',
                icon: 'success',
                showConfirmButton: false,
                timer: 800
            })
            .then((isResult) => {
                window.location = '/'
            })
        })
    }

    onLogin = () => {
        let inputLogin = this.inputLogin.value
        let inputPassword = this.inputPassword.value
        let inputLoginType = ''

        if(inputLogin && inputPassword){
            if(inputLogin[0] >= 0){
                inputLoginType = 'phone'
            }else{
                for(let i = 0; i < inputLogin.length; i++){
                    if(inputLogin.split('@').length === 2){
                        inputLoginType = 'email'
                    }else{
                        inputLoginType = 'username'
                    }
                }
            }

        axios.get(LinkAPI + `/users?${inputLoginType}=` + inputLogin + '&password=' + inputPassword)
        .then((res) => {
          if(res.data.length === 1){
              this.setState({username: res.data[0].username, error: null, showModal: false})
              localStorage.setItem('id', res.data[0].id)
              window.location = '/'
          }else{
            this.setState({error: 'Periksa Kembali Username / Password Kamu!'})
          }
        })

        .catch((err) => {
          console.log(err)
        })

        }else{
            this.setState({error: 'Username / Password Harus Terisi'})
        }
    }

    getCurrentTotalCarts = () => {
        var id = this.state.id

        axios.get(LinkAPI + `/carts?idUser=${id}`)
        .then((res) => {
            Array.prototype.sum = function(){
                var sumQtyCarts = 0
                for(let i = 0; i < res.data.length; i++){
                    sumQtyCarts += res.data[i].quantity
                }
                return sumQtyCarts
            }
            this.setState({currentTotalCarts: res.data.sum("quantity")})
        })

        .catch((err) => {
            console.log(err)
        })
    }

    onSearch = () => {
        let search = this.refs.search.value

        this.props.searchText(search)
    }

    buttonSearch = () => {
        // <Link to = '/Products' component={Products} />
        // let pathname = this.props.location

        // console.log(this.props.carts.searchResult)
        // if(pathname === 'products'){
        //     this.onSearch()
        // }else{
        //     window.location = '/products'
        // }
    }

    render(){
        return(
        <>
            <div className="bg-warning sticky-top" style={{height: '50px'}}>
                <div className="container-xl">
                    <div className='row align-items-center' style={{height: '50px'}}>
                        <div className='navbar-brand'>
                            <Link to='/' className="text-decoration-none text-dark"><img src={logo} className="width-100 mt-n1" alt="logo-cp" /></Link>
                        </div>
                        <div className='col-2 d-none d-md-block mt-n2'>
                            <span className="mx-2"><Link to='/products' className="cp-clickable-element cp-link">Products</Link></span>
                            <span className="mx-2" role="button">Showroom</span>
                            <span className="mx-2" role="button">Sale</span>
                        </div>
                        <div className='col-md-8 col-9'>
                            <div className='d-flex justify-content-end align-items-center mt-n2'> 
                                <form className="form-inline d-none d-xl-block">
                                    <div className="input-group align-items-center">
                                        <input type="text" ref="search" className="form-control" placeholder="Cari Produk" style={{zIndex: '0'}} onChange={this.onSearch} />
                                        <div className="input-group-prepend position-relative">
                                            <span className="align-items-center" style={{marginLeft: '-48px'}}>
                                                <button type="button" className="btn btn-transparent">
                                                    <FontAwesomeIcon icon={faSearch} className="fa-lg" style={{zIndex: '3'}} onClick={this.buttonSearch} />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                                <span className="cp-font-size-16 font-weight-normal ml-3">
                                    {
                                        this.state.username?
                                            `Hi, ${this.state.username}`
                                        :
                                            null
                                    }
                                </span>
                                <span className="ml-1 mr-3 font-weight-lighter cp-font-size-14 cp-clickable-element" onClick={this.onLogout}>
                                    {
                                        this.state.username?
                                            `/ Logout`
                                        :
                                            null
                                    }
                                </span>
                                {
                                    this.state.username?
                                        <span className="">
                                            <Link to='/user-profile/profile' className="cp-clickable-element cp-link">
                                                <FontAwesomeIcon icon={faUser} className="fa-lg cp-clickable-element" />
                                            </Link>
                                        </span>
                                    :
                                        <span className="">
                                            <FontAwesomeIcon icon={faUser} className="fa-lg cp-clickable-element" onClick={() => this.setState({showModal: true})} />
                                        </span>

                                }
                                <span className="ml-4 d-none d-md-block">
                                    <FontAwesomeIcon icon={faHeart} className="fa-lg cp-clickable-element"/>
                                </span>
                                <span className="ml-4 position-relative">
                                    <Link to="/cartpage">
                                        <FontAwesomeIcon icon={faShoppingBag} className="fa-lg cp-clickable-element cp-link text-decoration-none text-dark"/>
                                            {
                                                this.state.id?
                                                    <div className="badge badge-pill badge-danger border border-light position-absolute" style={{position: 'absolute', top: '-5px', left: '13px'}}>
                                                        {
                                                            this.props.carts.data?
                                                                this.props.carts.data.sum("quantity")
                                                            :
                                                                this.state.currentTotalCarts
                                                        }
                                                    </div>
                                                :
                                                    <div className="badge badge-pill badge-danger border border-light position-absolute" style={{position: 'absolute', top: '-5px', left: '13px'}}></div>
                                            }
                                    </Link>
                                </span>
                                <span className="ml-3 d-block d-md-none">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-haspopup="true" aria-expanded="false" aria-label="Toggle navigation">
                                        <span><FontAwesomeIcon icon={faBars} className="fa-lg cp-clickable-element"/></span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                        <ul className="pl-3 list-group list-group-flush list-unstyled" style={{backgroundColor: "rgba(52, 58, 64, 0.8)"}}>
                            <Link to='/products' className="text-decoration-none text-light">
                                <li className="nav-item active">
                                    <span className="nav-link">
                                            Products
                                    </span>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link text-decoration-none text-light" href="#">Showroom</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-decoration-none text-light" href="#" tabindex="-1" aria-disabled="true">Sale</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='d-block d-xl-none'>
                    <form className="form-inline">
                        <div className="input-group w-100">
                            <div className="input-group-prepend w-100">
                                <input type="text" ref={(e) => this.search = e} className="form-control w-100" placeholder="Cari Produk" onChange={this.onSearch}/>
                                <span className="align-items-center" id="basic-addon1" style={{marginLeft: '-48px'}}>
                                    <button type="button" className="btn btn-transparent">
                                        <FontAwesomeIcon icon={faSearch} className="fa-lg" style={{zIndex: '3'}} />
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal Section */}
            <Modal toggle={() => this.setState({showModal: false})} isOpen={this.state.showModal} className="width-400">
                <ModalHeader>Login Page</ModalHeader>
                    <ModalBody>
                    <form>
                        <div className="form-group">
                            {/* <label for="email">Email / Username</label> */}
                            <input type='text' className='form-control' ref={(e) => this.inputLogin = e} placeholder='Username / Nomor Handphone / Email' />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email or username with anyone else.</small>
                        </div>
                        <div className="form-row">
                            <div className="col-9">
                                {/* <label for="password">Password</label> */}
                                <input className='form-control' type={this.state.showPassword === false? 'password' : 'text'} ref={(e) => this.inputPassword = e} placeholder='Password' />
                            </div>
                            <div className="col-3">
                                <input type='button' className='btn btn-outline-warning form-control' value={this.state.button === true? 'show' : 'hide'} onClick={() => this.setState({showPassword: !this.state.showPassword, button: !this.state.button})} />    
                            </div>
                        </div>
                        <div>
                            <p className="text-warning cp-font-size-14">
                                {
                                this.state.error? // ada?
                                    this.state.error // jika ada, tampilkan
                                :
                                    null // else, null/tampil
                                }
                            </p>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-auto">
                                <input type='button' value='Login' className='btn btn-warning' onClick={this.onLogin} />
                            </div>
                            <div className="form-group col-auto">
                                <input type='button' value='Cancel' className='btn btn-danger' onClick={() => this.setState({showModal: false})} />
                            </div>
                        </div>
                        <div className="mt-3 text-center">
                            <p>
                                Don't have account? <Link to="/Register" onClick={() => this.setState({showModal: false})}><span className="font-weight-bold">Register here!</span></Link>
                            </p>
                        </div>
                    </form>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
            </Modal>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        carts: state.carts
    }
}

const mapDispatchToProps = {
    searchText
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)