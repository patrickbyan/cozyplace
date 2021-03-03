import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

export default class Header extends React.Component{
    render(){
        return(
            <div className="cp-bg-primary">
                <div className="container d-flex justify-content-between">
                    <div>
                        <FontAwesomeIcon icon={faSearchLocation} /> Lokasi Terdekat Dengan Anda
                    </div>
                    <div>
                    <Link to='/Register' className="text-decoration-none text-dark">
                        Register Disini!
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}