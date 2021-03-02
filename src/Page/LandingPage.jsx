import React from 'react';
import FlashSale from '../Component/FlashSale';

export default class LandingPage extends React.Component{
    render(){
        return(
            <div>
                <div className="d-flex align-items-center jumbotron-landing-page">
                    <div className="container text-center text-md-left">
                        <h1 className="cp-font-size-70">
                            Sale Up To 20%
                        </h1>
                        <input type="button" className="btn btn-warning" value="Shop Now!" />
                    </div>
                </div>
                <div>
                    <FlashSale />
                </div>
            </div>
        )
    }
}