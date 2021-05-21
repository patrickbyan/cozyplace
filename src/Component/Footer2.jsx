import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../Supports/Assets/logo.png'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import LinkAPI from '../Supports/Constants/linkAPI'

export default class Footer2 extends React.Component{
    state = {
        username: null
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

    
    render(){
        return(
        <>
            <div className="container d-none d-md-flex mt-4">
                <div className="row">
                    <div className="col-3">
                        <ul className="list-unstyled">
                            <li><img src={logo} alt="logo-cp" className="width-150" /></li>
                            <li className="pl-1">Tentang Kami</li>
                            <li className="pl-1">
                                <span className="cp-color-one"> Coz</span>
                                <span className="cp-color-two">ypl</span>
                                <span className="cp-color-three">ace </span>
                            Projects
                            </li> 
                            <li className="pl-1">Promo 
                                <span className="cp-color-one"> Coz</span>
                                <span className="cp-color-two">ypl</span>
                                <span className="cp-color-three">ace </span>
                            Projects</li>
                            <li className="pl-1">Blog</li> 
                            <li className="pl-1">Filosofi
                                <span className="cp-color-one"> Coz</span>
                                <span className="cp-color-two">ypl</span>
                                <span className="cp-color-three">ace </span>
                            </li>
                            <li className="pl-1">Karir</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-unstyled">
                            <li><h5 className="mt-3">Layanan Pelanggan</h5></li>
                            <br />
                            <li>FAQ</li>
                            <li>Kebijakan Privasi</li> 
                            <li>Syarat dan Ketentuan</li>
                            <li>Kebijakan Pengiriman</li> 
                            <li>Kebijakan Pengembalian</li>
                            <li>Lokasi Kota Pengiriman</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-unstyled text-nowrap">
                            <li><h5 className="mt-3">Kontak Kami</h5></li>
                            <br />
                            <li><FontAwesomeIcon icon={faPhoneAlt} className="fa-md mx-1"/>081296917987</li> 
                            <li><FontAwesomeIcon icon={faEnvelope} className="fa-md mx-1"/>patrickbyann@gmail.com</li>
                            <li>Senin - Minggu / 10:00-20:00</li> 
                            <li>(Termasuk Hari Libur)</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-unstyled text-nowrap">
                            <li><h5 className="mt-3">Daftar & Dapatkan Voucher Diskon Rp 50.000</h5></li>
                            <br />
                            <li>
                                <form className="form-inline d-flex">
                                    <div>
                                        {
                                            this.state.username?
                                                <input type="button" value="Register Now!" data-toggle="tooltip" title="Please log out first!" className="btn btn-warning mb-2 btn-lg width-150" disabled />
                                            :
                                                <input type="button" value="Register Now!" className="btn btn-warning mb-2 btn-lg width-150" onClick={() => {window.location = '/Register'}} />
                                        }
                                        {/* ini coba cari tahu */}
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-secondary height-70 d-block text-center">
                <div>
                    <span><img src={logo} alt="logo" width="90px" /></span>
                    <span className="align-middle text-light">© </span>
                    <span className="align-middle" style={{color: 'gold'}}>PATRICK BYAN</span>
                    <span className="align-middle text-light"> 2021 | TEMPLATE CREATED BY </span>
                    <span className="align-middle" style={{color: 'gold'}}>PATRICK BYAN</span>
                    <span className="align-middle text-light"> | PURWADHIKA JCWM STUDENT</span>
                    <p className="text-light font-weight-lighter mt-n2">This website is for illustration purposes only. Profits are none taken. Credits to 
                    <span><a href="https://www.fabelio.com" target="_blank" rel="noreferrer" className="text-light font-weight-lighter pl-1 pb-2">
                        fabelio, jotun, ikea
                    </a></span></p>
                </div>
            </div>
        </>
        )
    }
}