import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faHeart, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../Supports/Assets/logo.png'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="bg-warning sticky-top" style={{height: '50px'}}>
                <div className="container-md">
                    <div className='row align-items-center' style={{height: '50px'}}>
                        <div className='col-1'>
                            <Link to='/' className="text-decoration-none text-dark"><img src={logo} class="width-100" alt="logo-cp" /></Link>
                        </div>
                        <div className='col-6 d-none d-md-block'>
                            <span className="mx-2"><Link to='/Products' className="active text-light">Products</Link></span>
                            <span className="mx-2">Showroom</span>
                            <span className="mx-2">Sale</span>
                        </div>
                        <div className='col-11 col-md-5'>
                            <div className='d-flex justify-content-end align-items-center'> 
                                <form className="form-inline mx-3 d-none d-md-block">
                                    <div className="input-group align-items-center">
                                        <input type="text" className="form-control" placeholder="Cari Produk" aria-label="Searchbox" aria-describedby="basic-addon1" style={{zIndex: '0'}}/>
                                        <div className="input-group-prepend position-relative">
                                            <span className="align-items-center" id="basic-addon1" style={{marginLeft: '-25px'}}>
                                                <FontAwesomeIcon icon={faSearch} className="fa-lg" style={{zIndex: '3'}} />
                                            </span>
                                        </div>
                                    </div>
                                </form>
                                    <span className="mx-2 d-none d-md-block">
                                        <FontAwesomeIcon icon={faUser} className="fa-lg"/>
                                    </span>
                                    <span className="mx-2">
                                        <FontAwesomeIcon icon={faHeart} className="fa-lg"/>
                                    </span>
                                    <span className="mx-2 d-none d-md-block">
                                        <FontAwesomeIcon icon={faShoppingBag} className="fa-lg"/>
                                    </span>
                                    <span className="mx-2 d-block d-md-none">
                                        <FontAwesomeIcon icon={faCartPlus} className="fa-lg"/>
                                    </span>
                                    <span className="mx-2 d-block d-md-none">
                                        <FontAwesomeIcon icon={faBars} className="fa-lg"/>
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
                                            <FontAwesomeIcon icon={faSearch} className="fa-lg" />
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
            </div>
        )
    }
}