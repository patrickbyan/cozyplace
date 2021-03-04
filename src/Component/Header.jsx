import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import axios from 'axios'
import LinkAPI from '../Supports/Constants/linkAPI'

export default class Header extends React.Component{
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
            <div className="cp-bg-primary">
                <div className="container d-flex justify-content-between" style={{height: '25px'}}>
                    <div>
                        <FontAwesomeIcon icon={faSearchLocation} /> Lokasi Terdekat Dengan Anda
                    </div>
                    <div>
                        {
                            this.state.username?
                                <p className="text-dark">Welcome to 
                                    <span className="cp-color-one"> Coz</span>
                                    <span className="cp-color-two">ypl</span>
                                    <span className="cp-color-three">ace </span>
                                </p>
                            :
                                <Link to='/Register' className="text-decoration-none text-dark">
                                    Register Disini!
                                </Link>

                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}