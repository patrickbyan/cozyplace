import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

export default class Header extends React.Component{
    render(){
        return(
            <div className="cp-bg-primary">
                <div className="container">
                    <FontAwesomeIcon icon={faSearchLocation} /> Lokasi Terdekat Dengan Anda
                </div>
            </div>
        )
    }
}