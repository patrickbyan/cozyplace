import { faEllipsisH, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody, UncontrolledDropdown } from 'reactstrap';
import React from 'react'

import LinkTransactions from '../../Supports/Constants/LinkTransaction';
import axios from 'axios';

export default class TransactionHistory extends React.Component{

    state = {
        dataTransaction: null,
        detailTransaction: null,
        data: null,
        detailData: null,
        idUser: localStorage.getItem('id'),
        showModal: false,
        idSelected: null,


        weightTotal: 0,
        quantityTotal: 0,
        priceTotal: 0
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        let LinkTransaction = LinkTransactions
        let idUser = this.state.idUser

        axios.get(LinkTransaction + `?idUser=${idUser}&status=Paid`)
        .then((res) => {
            this.setState({data: res.data})
        })

        .catch((err) => {
            console.log(err)
        })
    }

    getDetail = (idSelected) => {
        let LinkTransaction = LinkTransactions
        let idTransaction = idSelected

        axios.get(LinkTransaction + `/${idTransaction}`)
        .then((res) => {
            this.setState({detailData: [res.data], showModal: true})

            var weightTotal = 0
            this.state.detailData.map((value, index) => {
                value.detail.map((value, index) => {
                    weightTotal += value.productWeight
                })
            })

            var quantityTotal = 0
            this.state.detailData.map((value, index) => {
                value.detail.map((value, index) => {
                    quantityTotal += value.productQuantity
                })
            })

            var priceTotal = 0
            this.state.detailData.map((value, index) => {
                value.detail.map((value, index) => {
                    priceTotal += value.productPrice
                })
            })

            this.setState({weightTotal: weightTotal, quantityTotal: quantityTotal, priceTotal: priceTotal})

            // let detailTransaction = this.state.detailData.map((value, index) => {
            //     return{
            //         idTransaction: value.id,
            //         tanggal: value.createdAt.split(' ')[0].split('-')[0],
            //         bulan: value.createdAt.split(' ')[0].split('-')[1],
            //         tahun: value.createdAt.split(' ')[0].split('-')[2],
            //         jam: value.createdAt.split(' ')[1],
            //         kategori: value.detail[0].productCategory,
            //         idProduct: value.detail[0].productID,
            //         merk: value.detail[0].productBrand,
            //         gambar: value.detail[0].productImage,
            //         nama: value.detail[0].productName,
            //         quantity: value.detail[0].productQuantity,
            //         harga: value.detail[0].productPrice,
            //         totalprice: value.detail[0].productPrice * value.detail[0].productQuantity,
            //         berat: value.detail[0].productWeight
            //     }
            // })

            // this.setState({detailTransaction: detailTransaction, showModal: true})
        })

        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        if(this.state.data === null){
            return(
                <div className="container text-center mt-5 height-150 mb-5">
                    <div className="spinner-grow text-warning" style={{width: '3rem', height: '3rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        return(
            <div>
                <h5 className="font-weight-bold">
                    Daftar Transaksi
                </h5>

                <div className="container rounded-lg card">
                    {/* Kepala */}
                    <div className="row py-3">
                        <div className="col-4">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Cari transaksimu disini" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <FontAwesomeIcon icon={faSearch} className="cp-font-size-18" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dropdown">
                                <UncontrolledDropdown className="ml-3">
                                    <DropdownToggle caret color="outline-secondary text-left" style={{width: '100%'}}>
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
                        <div className="col-4">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Pilih Tanggal Transaksi" disabled/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" disabled>
                                        <FontAwesomeIcon icon={faSearch} className="cp-font-size-18" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Body */}
                    <div>
                        <div className="">
                            {
                                this.state.data.map((value, index) => {
                                    return(
                                        <div key={index} className="container shadow rounded-lg mb-4 pt-3">
                                            <div>
                                                {/* Head Body */}
                                                <span>
                                                    <FontAwesomeIcon icon={faShoppingBag} className="cp-font-size-16 text-warning" />
                                                </span>
                                                <span className="mx-3 font-weight-bold cp-font-size-14">
                                                    {value.productCategory}
                                                </span>
                                                <span className="mr-3 badge badge-warning text-light">
                                                    Selesai
                                                </span>
                                                <span className="text-muted cp-font-size-12 font-weight-normal text-nowrap">
                                                    {/* INV/{value.tahun}/{value.bulan.toUpperCase()}/{value.tanggal}/{this.state.idUser}/{value.idTransaction} */}
                                                </span>
                                            </div>
                                {
                                    value.detail.map((val, idx) => {
                                        return(
                                            <>
                                                {
                                                    idx >= 1?
                                                        <>
                                                            <hr />
                                                        </>
                                                    :
                                                        null
                                                }
                                                {/* Isi Body */}
                                                <div className="my-2 font-weight-light">
                                                    Merk: <span className="font-weight-bold">{val.productBrand}</span>
                                                </div>
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={val.productImage} alt=".." style={{width: '100%'}} />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="font-weight-bold">
                                                            {val.productName}
                                                        </div>
                                                        <div className="font-weight-light text-muted cp-font-size-14">
                                                            {val.productQuantity} barang x Rp {val.productPrice.toLocaleString()}
                                                        </div>
                                                    </div>
                                                    
                                                    {
                                                        idx === 0?
                                                        <>
                                                            <div className="col-1 text-nowrap">
                                                                <div className="font-weight-bold">
                                                                    Total Belanja
                                                                </div>
                                                                <div>
                                                                    Rp {this.state.data[index].total.toLocaleString()}
                                                                </div>
                                                            </div>
                                                        </>
                                                    :
                                                        null
                                                    }
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                            <div className="row align-items-center mt-3">
                                                <div className="col-6">

                                                </div>
                                                <div className="col-3 text-right mb-3">
                                                    <div className="text-warning font-weight-bold cp-font-size-14 cp-clickable-element" onClick={() => this.getDetail(value.id)}>
                                                        Lihat Detail Transaksi
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <button className="btn btn-warning mb-3" type="button" style={{width: '100%'}} onClick={() => window.location = `/detailProduct/${value.idProduct}`}>
                                                        Beli Lagi
                                                    </button>
                                                </div>
                                                <div className="col-1">
                                                    <button className="btn btn-outline-secondary mb-3" type="button" style={{width: '100%'}}>
                                                        <FontAwesomeIcon icon={faEllipsisH} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Modal Section */}
                {
                    this.state.detailData?
                        this.state.detailData.map((value, index) => {
                            return(
                                <Modal toggle={() => this.setState({showModal: false})} isOpen={this.state.showModal} className="width-800">
                                    <ModalBody>
                                        <div className="container">
                                            <div className="font-weight-bold h5 text-center">
                                                Detail Pesanan
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12 text-muted font-weight-normal cp-font-size-13">
                                                            Nomor Invoice
                                                        </div>
                                                        <div className="col-6 border-right cp-clickable-element text-warning">
                                                            {/* INV/{value.tahun}/{value.bulan.toUpperCase()}/{value.tanggal}/{this.state.idUser}/{value.idProduct}/{value.idTransaction} */}
                                                        </div>
                                                        <div className="col-2 ml-3 cp-clickable-element text-warning">
                                                            Cetak
                                                        </div>
                                                        <div className="col-12 text-muted font-weight-normal cp-font-size-13 mt-3">
                                                            Status
                                                        </div>
                                                        <div className="col-12">
                                                            Pesanan Selesai
                                                        </div>
                                                        {/* <div className="col-12 text-muted font-weight-normal cp-font-size-13 mt-3">
                                                            Brand
                                                        </div>
                                                        <div className="col-12 text-warning">
                                                            {value.productBrand}
                                                        </div> */}
                                                        <div className="col-12 text-muted font-weight-normal cp-font-size-13 mt-3">
                                                            Tanggal Pembelian
                                                        </div>
                                                        <div className="col-12">
                                                            {value.createdAt} WIB
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <hr style={{borderWidth: '1px'}}/>
                                                </div>
                                                <table className="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" colSpan="2" className="font-weight-bold text-muted cp-font-size-12 my-2">
                                                                Daftar Produk
                                                            </th>
                                                            <th scope="col" className="font-weight-bold text-muted cp-font-size-12 my-2">
                                                                Harga Barang
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        value.detail.map((value, index) => {
                                                            return(
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row" className="w-25">
                                                                            <img src={value.productImage} alt=".." className="w-100" />
                                                                        </th>
                                                                        <td style={{width: '35%'}}>
                                                                            <div className="cp-font-size-13 text-wrap">
                                                                                {value.productName.toUpperCase()}
                                                                            </div>
                                                                            <div className="cp-font-size-12 font-weight-light text-muted">
                                                                                {value.productQuantity} barang x Rp {value.productPrice.toLocaleString()}
                                                                            </div>
                                                                        </td>
                                                                        <td className="border-left">
                                                                            <div className="cp-font-size-12 font-weight-bold text-danger">
                                                                                Rp {(value.productQuantity * value.productPrice).toLocaleString()}
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            )
                                                        })
                                                    }
                                                </table>
                                                
                                                <div className="col-12">
                                                    <hr style={{borderWidth: '1px'}}/>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <div className="row">
                                                                <div className="col-12 font-weight-bold text-muted cp-font-size-12 my-2">
                                                                    Pembayaran
                                                                </div>
                                                                <div className="col-12 text-muted font-weight-normal cp-font-size-11-5">
                                                                    Total Harga {this.state.quantityTotal} barang
                                                                </div>
                                                                <div className="col-12 text-muted font-weight-normal cp-font-size-11-5">
                                                                    Berat Barang
                                                                </div>
                                                                <div className="col-12 text-muted font-weight-normal cp-font-size-11-5">
                                                                    Total Bayar
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 ml-2 border-left">
                                                            <div className="row">
                                                                <div className="col-12 font-weight-bold text-muted cp-font-size-12 my-2" style={{height: '18px'}}>
                                                                    
                                                                </div>
                                                                <div className="col-12 text-muted font-weight-bold cp-font-size-11-5">
                                                                    Rp {this.state.priceTotal.toLocaleString()}
                                                                </div>
                                                                <div className="col-12 text-muted font-weight-bold cp-font-size-11-5">
                                                                    {this.state.weightTotal} kg
                                                                </div>
                                                                <div className="col-12 font-weight-bold cp-font-size-11-5 text-danger">
                                                                    Rp {value.total.toLocaleString()}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <hr style={{borderWidth: '1px'}}/>
                                                </div>
                                                <div className="col-3">
                                                    <button className="btn btn-warning mb-3" type="button" style={{width: '100%'}} onClick={() => window.location = `/detailProduct/${value.idProduct}`}>
                                                        Beli Lagi
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </ModalBody>
                                </Modal>
                            )
                        })
                    :
                        null
                }
            </div>
        )
    }
}