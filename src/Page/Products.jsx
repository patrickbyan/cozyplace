import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody, UncontrolledDropdown } from 'reactstrap';
import axios from 'axios';
import LinkProduct from '../Supports/Constants/linkProduct'
import Slider from "react-slick"

export default class Products extends React.Component{
    state = {
        FilteredProducts: null,
        dataProducts: null,
        showModal: false,
        allCategory: null,
        allBrand: null,
    }

    componentDidMount(){
        this.getDataProdutcs()
        this.getDataCatAndBrand()
    }

    getDataProdutcs = () => {
        axios.get(LinkProduct)
        .then((res) => {
            this.setState({dataProducts: res.data, FilteredProducts: res.data})
        })

        .catch((err) => {
            console.log(err)
        })
    }

    getDataCatAndBrand = () => {
        axios.get(LinkProduct)
        .then((res) => {
            // Ambil Category
            let arrCategory = []

            res.data.forEach((value) => {
                if(arrCategory.includes(value.category)){

                }else{
                    arrCategory.push(value.category)
                }
            })

            // Ambil Category
            let arrBrand = []

            res.data.forEach((value) => {
                if(arrBrand.includes(value.brand)){

                }else{
                    arrBrand.push(value.brand)
                }
            })
            this.setState({allCategory: arrCategory, allBrand: arrBrand})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    filterData = () => {
        let category = this.refs.selectCategory.value
        let brand = this.refs.selectBrand.value

        let filteredProcuts = this.state.FilteredProducts.filter((value) => {
            if(category === 'All' && brand === 'All'){
                return this.state.FilteredProducts
            }else if(category === 'All' && brand !== 'All'){
                return value.brand === brand
            }else if(category !== 'All' && brand === 'All'){
                return value.category === category
            }else if(category !== 'All' && brand !== 'All'){
                return value.category === category && value.brand === brand
            }
        })

        this.setState({dataProducts: filteredProcuts})
        this.setState({showModal: false})

    }

    sortData = (event) => {
        let sort = event.target.innerText
        let sortProducts
        console.log(sort)

        if(sort === 'Price: Low to High'){
            sortProducts = this.state.FilteredProducts.sort((a, b) => {
                return a.price - b.price
            })
        }else if(sort === "Price: High to Low"){
            sortProducts = this.state.FilteredProducts.sort((a, b) => {
                return b.price - a.price
            })
        }else{
            sortProducts = this.state.FilteredProducts.sort((a, b) => {
                return a.price - b.price
            })
        }

        this.setState({dataProducts: sortProducts})
    }


    render(){
        const cardImg = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
        }

        return(
            <div>
                {/* BANNER */}
                <div className='cp-bg-dark-grey height-350'>
                    <div className="container">
                        <nav>
                            <ol className="breadcrumb cp-bg-dark-grey pt-3 ml-n3">
                                <li className="breadcrumb-item"><a href="/" className="cp-link font-weight-light">Home</a></li>
                                <li className="breadcrumb-item"><a href="/Products" className="cp-link font-weight-light">Products</a></li>
                                <li className="breadcrumb-item active font-weight-lighter" aria-current="page">Daftar Produk Kami</li>
                            </ol>
                        </nav>
                    </div>
                    <div>
                        <h2 className="container font-weight-bolder my-4 mb-2">
                            Berdasarkan Kategori Produk
                        </h2>
                        <div className="container d-flex py-2">
                            <div>
                                <img src="https://cdn-m2.fabelio.com/catalog/category/All_Set_Ruang_Tamu2.jpg?auto=format&w=160&ixlib=react-9.0.3" className="half-radius mr-3 height-150 width-150 cp-clickable-element" alt="..." />
                                <h5 className="font-weight-bold text-center width-150">
                                    Sofa
                                </h5>
                            </div>
                            <div>
                                <img src="https://cdn-m2.fabelio.com/catalog/category/Sofa_2_1.jpg?auto=format&w=160&ixlib=react-9.0.4" className="half-radius mr-3 height-150 width-150 cp-clickable-element" alt="..." />
                                <h5 className="font-weight-bold text-center width-150">
                                    Meja
                                </h5>
                            </div>
                            <div>
                                <img src="https://cdn-m2.fabelio.com/catalog/category/Set_Ruang_Tamu.jpg?auto=format&w=160&ixlib=react-9.0.3" className="half-radius mr-3 height-150 width-150 cp-clickable-element" alt="..." />
                                <h5 className="font-weight-bold text-center width-150">
                                    Lemari
                                </h5>
                            </div>
                            <div>
                                <img src="https://cdn-m2.fabelio.com/catalog/category/Set_Ruang_Tamu_1_.jpg?auto=format&w=160&ixlib=react-9.0.3" className="half-radius mr-3 height-150 width-150 cp-clickable-element" alt="..." />
                                <h5 className="font-weight-bold text-center width-150">
                                    Lampu Lantai
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FILTER DAN SORT */}
                <div className="container">
                    <div className="row my-5">
                        <div className="col-12 d-flex">
                            <button type="button" className="btn btn-outline-secondary" onClick={() => this.setState({showModal: true})}>
                                Filter
                            </button>
                            <UncontrolledDropdown className="ml-3">
                                <DropdownToggle caret color="outline-secondary">
                                    Sort
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Sort By:</DropdownItem>
                                        <DropdownItem onClick={this.sortData}>Default</DropdownItem>
                                        <DropdownItem onClick={this.sortData}>Price: Low to High</DropdownItem>
                                        <DropdownItem onClick={this.sortData}>Price: High to Low</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </div>
                    <hr />
                    <div className="font-weight-normal h5 mb-4 mt-2" >
                        Products:
                    </div>
                </div>

                {/* CATALOG */}
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4">
                        {
                            this.state.dataProducts?
                                this.state.dataProducts.map((value, index) => {
                                    return(
                                        <>
                                            <div className="col mb-4" key={index}>
                                                <div className="card full-radius height-300">
                                                    <Slider {...cardImg}>
                                                        <img src={value.image1} className="card-img-top p-3" alt="..."/>
                                                        <img src={value.image2} className="card-img-top p-3" alt="..."/>
                                                        {
                                                            value.image3?
                                                                <img src={value.image3} className="card-img-top p-3" alt="..."/>
                                                            :
                                                                null
                                                        }
                                                    </Slider>
                                                        {
                                                            value.diskon?
                                                                <div className="card-img-overlay width-40">
                                                                    <div className="width-40 bg-light text-center">
                                                                        {value.diskon}%
                                                                    </div>
                                                                </div>
                                                            :
                                                                null
                                                        }
                                                    <div className="card-body">
                                                        <h6 className="card-title height-50">{value.name}</h6>
                                                        <div className="card-text">
                                                        {
                                                            value.diskon?
                                                            <>
                                                                <div>
                                                                    <>
                                                                    <span className="font-weight-bold">
                                                                        Rp. {((value.price - (value.price * (value.diskon / 100))).toLocaleString())}
                                                                    </span>
                                                                    <span className="text-muted pl-1 font-weight-lighter">
                                                                        <del>{(value.price).toLocaleString()}</del>
                                                                    </span>
                                                                    </>
                                                                </div>
                                                                
                                                                
                                                            </>
                                                            :
                                                                <p className="font-weight-bold">
                                                                    Rp. {(value.price).toLocaleString()}
                                                                </p>

                                                        }
                                                       
                                                        </div>
                                                    </div>
                                                    <div className="card-footer bg-white border border-white">
                                                        <small className="text-muted">
                                                            {value.category} {value.brand} | Stock : {value.stock}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            :
                                null
                        }
                    </div>
                    <div className="mb-5">
                        <button type="button" className="btn btn-warning" disabled>
                            Tampilkan Seluruhnya
                        </button>
                    </div>
                </div>

                 {/*MODAL FILTER  */}
                 <Modal toggle={() => this.setState({showModal: false})} isOpen={this.state.showModal}>
                     <ModalBody className='px-5 py-5'>
                         <div className="text-center">
                             <h3>
                                 Filter Data
                             </h3>
                         </div>
                         <div className="mt-3">
                             <label>Category</label>
                             <select className="form-control" ref="selectCategory">
                                <option>All</option>
                                 {
                                     this.state.allCategory?
                                        this.state.allCategory.map((value, index) => {
                                            return(
                                                <option value={value} key={index}>
                                                    {value}
                                                </option>
                                            )
                                        })
                                    :
                                        null
                                 }
                             </select>
                         </div>
                         <div className="my-4">
                             <label>
                                 Brand
                             </label>
                             <select className="form-control" ref="selectBrand">
                                <option>All</option>
                                 {
                                     this.state.allBrand?
                                     this.state.allBrand.map((value, index) => {
                                         return(
                                            <option value={value} key={index}>
                                                {value}
                                            </option>
                                         )
                                     })
                                    :
                                     null
                                 }
                             </select>
                         </div>
                         <div>
                             <input type="button" value="Filter Data" className="btn btn-warning w-100" onClick={this.filterData} />
                         </div>
                     </ModalBody>
                 </Modal>
            </div>
        )
    }
}