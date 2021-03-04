import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faHeart, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../Supports/Assets/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import LinkAPI from '../Supports/Constants/linkAPI'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default class Navbar extends React.Component{
    state = {
        username: null,
        showModal: false,
        error: null
    }

    componentDidMount(){
        this.getUsername()
    }

    getUsername = () => {
        let id = localStorage.getItem('id')

        if(id){
            axios.get(LinkAPI + `/${id}`)
            .then((res) => {
                this.setState({username: res.data.username})
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    onLogout = () => {
        let confirm = window.confirm('Anda Yakin Mau Logout?')

        if(confirm){
            localStorage.removeItem('id')
            window.location = '/'
        }
    }

    onLogin = () => {
        let inputLogin = this.refs.inputLogin.value
        let inputPassword = this.refs.inputPassword.value
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

        axios.get(LinkAPI + `?${inputLoginType}=` + inputLogin + '&password=' + inputPassword)
        .then((res) => {
          if(res.data.length === 1){
              this.setState({username: res.data[0].username, error: null, showModal: false})
              localStorage.setItem('id', res.data[0].id)
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

    render(){
        return(
        <>
            <div className="bg-warning sticky-top" style={{height: '50px'}}>
                <div className="container-md">
                    <div className='row align-items-center' style={{height: '50px'}}>
                        <div className='col-1'>
                            <Link to='/' className="text-decoration-none text-dark"><img src={logo} className="width-100" alt="logo-cp" /></Link>
                        </div>
                        <div className='col-3 d-none d-md-block'>
                            <span className="mx-2"><Link to='/Products' className="cp-clickable-element cp-link">Products</Link></span>
                            <span className="mx-2">Showroom</span>
                            <span className="mx-2">Sale</span>
                        </div>
                        <div className='col-11 col-md-8'>
                            <div className='d-flex justify-content-end align-items-center'> 
                                <form className="form-inline d-none d-md-block">
                                    <div className="input-group align-items-center">
                                        <input type="text" className="form-control" placeholder="Cari Produk" aria-label="Searchbox" aria-describedby="basic-addon1" style={{zIndex: '0'}}/>
                                        <div className="input-group-prepend position-relative">
                                            <span className="align-items-center" id="basic-addon1" style={{marginLeft: '-25px'}}>
                                                <FontAwesomeIcon icon={faSearch} className="fa-lg cp-clickable-element" style={{zIndex: '3'}} />
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
                                            <span className="d-none d-md-block">
                                                <FontAwesomeIcon icon={faUser} className="fa-lg cp-clickable-element" onClick={() => alert(`${this.state.username} Harus Log-out Terlebih Dahulu`)} />
                                            </span>
                                        :
                                            <span className="d-none d-md-block">
                                                <FontAwesomeIcon icon={faUser} className="fa-lg cp-clickable-element" onClick={() => this.setState({showModal: true})} />
                                            </span>

                                    }
                                    <span className="ml-4">
                                        <FontAwesomeIcon icon={faHeart} className="fa-lg cp-clickable-element"/>
                                    </span>
                                    <span className="ml-4 d-none d-md-block">
                                        <FontAwesomeIcon icon={faShoppingBag} className="fa-lg cp-clickable-element"/>
                                    </span>
                                    <span className="ml-4 d-block d-md-none">
                                        <FontAwesomeIcon icon={faCartPlus} className="fa-lg cp-clickable-element"/>
                                    </span>
                                    <span className="ml-4 d-block d-md-none">
                                        <FontAwesomeIcon icon={faBars} className="fa-lg cp-clickable-element"/>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className='d-block d-md-none'>
                            <form className="form-inline">
                                <div className="input-group align-items-center">
                                    <div className="input-group-prepend">
                                        <input type="text" className="form-control" placeholder="Cari Produk" />
                                        <span className="input-group-text align-items-center">
                                            <FontAwesomeIcon icon={faSearch} className="fa-lg cp-clickable-element" />
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
                        <div>
                            <input type='text' ref="inputLogin" placeholder='Username / Nomor Handphone / Email' className='form form-control' />
                        </div>
                        <div>
                            <input type='password' ref="inputPassword" placeholder='Password' className='form form-control my-3' />
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
                        <div className="d-flex mt-3">
                            <input type='button' value='Login' className='btn btn-warning' onClick={this.onLogin} />
                            <input type='button' value='Cancel' className='btn btn-danger ml-2' onClick={() => this.setState({showModal: false})} />
                        </div>
                        <div className="mt-5 text-center">
                            <p>
                                Don't have account? <Link to="/Register" onClick={() => this.setState({showModal: false})}><span className="font-weight-bold">Register here!</span></Link>
                            </p>
                        </div>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
            </Modal>
        </>
        )
    }
}