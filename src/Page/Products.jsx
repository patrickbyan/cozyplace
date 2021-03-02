import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default class Producs extends React.Component{
    render(){
        return(
            <div className="mb-5 mt-5 container-md d-block d-md-flex align-items-start justify-content-center">
                <div className="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/GAMBAR_TIDAK_TERSEDIA.png" className="rounded main-image" alt="..." />
                    <br />
                    <div className="mt-2 d-flex justify-content-between main-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/GAMBAR_TIDAK_TERSEDIA.png" className="rounded small-image" alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/GAMBAR_TIDAK_TERSEDIA.png" className="rounded small-image" alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/GAMBAR_TIDAK_TERSEDIA.png" className="rounded small-image" alt="" />
                    </div>
                </div>
                <div className="ml-md-4 mt-2 mt-md-0">
                    <div style={{width: '300px'}}>
                        <h4>NAMA PRODUCT</h4>
                        <h6 className="font-weight-normal">Sold : ... Produk</h6>
                        <h5>Rp. 2.500.000</h5>
                        <hr className="border-dark hr-style"/>
                        <h6 className="font-weight-normal text-muted">Stock : ... Item</h6>
                        <h6 className="font-weight-normal text-muted">Weight : ... kg</h6>
                        <hr className="border-dark hr-style"/>
                        <h6>Description :</h6>
                        <p className="text-wrap">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel repudiandae, hic dolorum maiores dolor illum</p>
                        <div className="width-300 row align-items-center ml-1">
                            <input type="button" value="Add to Cart" className="width-250 col-10" />
                            <FontAwesomeIcon icon={faCartPlus} className="fa-lg col-2"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}