import { faEllipsisH, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody, UncontrolledDropdown } from 'reactstrap';
import React from 'react'

import LinkTransactions from '/Important-Document/Purwadhika/Class/Front-End/Patrick_Project_Ecommerce/cozyplace_patrick/src/Supports/Constants/LinkTransaction';
import axios from 'axios';

export default class TransactionHistory extends React.Component{

    state = {
        dataTransaction: null,
        detailTransaction: null,
        data: null,
        detail: null,
        idUser: localStorage.getItem('id'),
        showModal: false
    }

    componentDidMount(){
        this.getData()
        // this.getDetail()
    }

    getData = () => {
        let LinkTransaction = LinkTransactions
        let idUser = this.state.idUser

        axios.get(LinkTransaction + `?idUser=${idUser}&status=Paid`)
        .then((res) => {
            this.setState({data: res.data})
            // console.log(res.data)
            let dataTransaction = this.state.data.map((value, index) => {
                return{
                    idTransaction: value.id,
                    tanggal: value.createdAt.split(' ')[0].split('-')[0],
                    bulan: value.createdAt.split(' ')[0].split('-')[1],
                    tahun: value.createdAt.split(' ')[0].split('-')[2],
                    jam: value.createdAt.split(' ')[1],
                    kategori: value.detail[0].productCategory,
                    idProduct: value.detail[0].productID,
                    merk: value.detail[0].productBrand,
                    gambar: value.detail[0].productImage,
                    nama: value.detail[0].productName,
                    quantity: value.detail[0].productQuantity,
                    harga: value.detail[0].productPrice,
                    totalprice: value.detail[0].productPrice * value.detail[0].productQuantity,
                    berat: value.detail[0].productWeight
                }
            })
            this.setState({dataTransaction: dataTransaction})
            console.log(this.state.data[0].detail)
        })

        .catch((err) => {
            console.log(err)
        })
    }

    openModal = () => {
        this.setState({showModal: true})
    }

    render(){
        if(this.state.dataTransaction === null){
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
                                this.state.dataTransaction.map((value, index) => {
                                    return(
                                        <div key={index} className="container shadow rounded-lg mb-4 pt-3">
                                            <div>
                                                {/* Head Body */}
                                                <span>
                                                    <FontAwesomeIcon icon={faShoppingBag} className="cp-font-size-16 text-warning" />
                                                </span>
                                                <span className="mx-3 font-weight-bold cp-font-size-14">
                                                    {value.kategori}
                                                </span>
                                                <span className="mr-3 badge badge-warning text-light">
                                                    Selesai
                                                </span>
                                                <span className="text-muted cp-font-size-12 font-weight-normal text-nowrap">
                                                    INV/{value.tahun}/{value.bulan.toUpperCase()}/{value.tanggal}/{this.state.idUser}/{value.idTransaction}
                                                    {
                                                        this.state.data[index].detail.map((value, index) => {
                                                            return(
                                                                `/${value.productID}`
                                                            )
                                                        })
                                                    }
                                                </span>
                                            </div>
                                                {/* Isi Body */}
                                            <div className="my-2 font-weight-light">
                                                Merk: <span className="font-weight-bold">{value.merk}</span>
                                            </div>
                                            <div className="row">
                                                <div className="col-2">
                                                    <img src={value.gambar} alt=".." style={{width: '100%'}} />
                                                </div>
                                                <div className="col-8">
                                                    <div className="font-weight-bold">
                                                        {value.nama}
                                                    </div>
                                                    <div className="font-weight-light text-muted cp-font-size-14">
                                                        {value.quantity} barang x Rp {value.harga.toLocaleString()}
                                                    </div>
                                                </div>
                                                <div className="col-2 border-left">
                                                    <div>
                                                        Total Belanja
                                                    </div>
                                                    <div>
                                                        Rp {value.totalprice.toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row align-items-center mt-3">
                                                <div className="col-6">

                                                </div>
                                                <div className="col-3 text-right mb-3">
                                                    <div className="text-warning font-weight-bold cp-font-size-14 cp-clickable-element" onClick={this.openModal}>
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

                                            {/* Modal Section */}
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
                                                                        INV/{value.tahun}/{value.bulan.toUpperCase()}/{value.tanggal}/{this.state.idUser}/{value.idProduct}/{value.idTransaction}
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
                                                                    <div className="col-12 text-muted font-weight-normal cp-font-size-13 mt-3">
                                                                        Brand
                                                                    </div>
                                                                    <div className="col-12 text-warning">
                                                                        {value.merk}
                                                                    </div>
                                                                    <div className="col-12 text-muted font-weight-normal cp-font-size-13 mt-3">
                                                                        Tanggal Pembelian
                                                                    </div>
                                                                    <div className="col-12">
                                                                        {value.tanggal} {value.bulan} {value.tahun}, {value.jam} WIB
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <hr style={{borderWidth: '1px'}}/>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="row">
                                                                    <div className="col-7">
                                                                        <div className="row">
                                                                            <div className="col-12 font-weight-bold text-muted cp-font-size-12 my-2">
                                                                                Daftar Produk
                                                                            </div>
                                                                            <div className="col-5">
                                                                                <img src={value.gambar} alt=".." style={{width: '100%'}} />
                                                                            </div>
                                                                            <div className="col-7">
                                                                                <div className="row">
                                                                                    <div className="col-12 cp-font-size-13 text-nowrap">
                                                                                        {value.nama.toUpperCase()}
                                                                                    </div>
                                                                                    <div className="col-12 cp-font-size-12 font-weight-light text-muted">
                                                                                        {value.quantity} barang x Rp {value.harga.toLocaleString()}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-3 ml-3 border-left">
                                                                        <div className="row text-nowrap">
                                                                            <div className="col-12 font-weight-bold text-muted cp-font-size-12 my-2">
                                                                                Harga Barang
                                                                            </div>
                                                                            <div className="col-12 cp-font-size-12 font-weight-bold text-danger">
                                                                                {value.harga.toLocaleString()}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
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
                                                                                Total Harga {value.quantity} barang
                                                                            </div>
                                                                            <div className="col-12 text-muted font-weight-normal cp-font-size-11-5">
                                                                                Berat Barang
                                                                            </div>
                                                                            <div className="col-12 text-muted font-weight-normal cp-font-size-11-5">
                                                                                Total Bayar
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-3 ml-3 border-left">
                                                                        <div className="row">
                                                                            <div className="col-12 font-weight-bold text-muted cp-font-size-12 my-2" style={{height: '18px'}}>
                                                                                
                                                                            </div>
                                                                            <div className="col-12 text-muted font-weight-bold cp-font-size-11-5">
                                                                                {value.harga.toLocaleString()}
                                                                            </div>
                                                                            <div className="col-12 text-muted font-weight-bold cp-font-size-11-5">
                                                                                {value.berat} kg
                                                                            </div>
                                                                            <div className="col-12 font-weight-bold cp-font-size-11-5 text-danger">
                                                                                {value.totalprice.toLocaleString()}
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
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}