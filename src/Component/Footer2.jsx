import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../Supports/Assets/logo.png'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

// import Register from '../Page/Register'
import Signup from '../Page/Signup'

export default class Footer2 extends React.Component{

    render(){
        return(
            <div className="container d-none d-md-flex mt-4">
                <div className="row">
                    <div className="col-3">
                        <ul className="list-unstyled">
                            <li><img src={logo} alt="logo-cp" className="width-150" /></li>
                            <li className="pl-1">Tentang Kami</li>
                            <li className="pl-1">Fabelio Projects</li> 
                            <li className="pl-1">Promo Fabelio Projects</li>
                            <li className="pl-1">Blog</li> 
                            <li className="pl-1">Filosofi Fabelio</li>
                            <li className="pl-1">Karir</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-unstyled">
                            <li><h5 class="mt-3">Layanan Pelanggan</h5></li>
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
                            <li><h5 class="mt-3">Kontak Kami</h5></li>
                            <br />
                            <li><FontAwesomeIcon icon={faPhoneAlt} className="fa-md mx-1"/>081296917987</li> 
                            <li><FontAwesomeIcon icon={faEnvelope} className="fa-md mx-1"/>patrickbyann@gmail.com</li>
                            <li>Senin - Minggu / 10:00-20:00</li> 
                            <li>(Termasuk Hari Libur)</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-unstyled text-nowrap">
                            <li><h5 class="mt-3">Daftar & Dapatkan Voucher Diskon Rp 50.000</h5></li>
                            <br />
                            <li>
                                <form className="form-inline d-flex">
                                    {/* <div className="form-group mb-2">
                                        <input type="text" ref="inputUser" class="form-control" placeholder="Email atau Nomor HP Mu!" style={{height: "3em", width: '250px', marginRight: '20px'}} />
                                    </div> */}
                                    <div>
                                        {/* <button type="submit" className="btn btn-warning mb-2 btn-lg" style={{width: '200px'}}> */}
                                            <Signup />
                                        {/* </button> */}
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}