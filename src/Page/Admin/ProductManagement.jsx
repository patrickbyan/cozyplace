import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt, faInfo, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Modal, ModalBody } from 'reactstrap'
import Swal from 'sweetalert2'
import LinkAPISQL from '../../Supports/Constants/linkAPISQL'

class ProductManagement extends React.Component{
    state = {
        data: null,
        category: null,
        showModal: false,
        idSelected: null
    }

    componentDidMount(){
        this.getData()
        this.getDataCategory()
    }

    getData = () => {
        axios.get(LinkAPISQL + '/products')
        .then((res) => {
            this.setState({data: res.data.data})
        })
        .catch((err) => {
            if(err.response.data.error === true){
                Swal.fire('Error!', err.response.data.message, 'error')
            }
        })
    }

    getDataCategory = () => {
        axios.get(LinkAPISQL + '/category')
        .then((res) => {
            this.setState({category: res.data.data})
        })
        .catch((err) => {
            if(err.response.data.error === true){
                Swal.fire('Error!', err.response.data.message, 'error')
            }
        })
    }

    onDel = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                axios.delete(LinkAPISQL + `/product/` + id)
                .then((res) => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )

                    this.getData()
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: err.response.data.message
                    })
                })

                
            }
        })
    }

    onEdit = (index) => {
        this.setState({idSelected: index})
    }

    onSave = () => {
        let idSelected = this.state.idSelected

        let dataToSend = {
            name: this.name.value,
            brand: this.brand.value,
            category: this.category.value,
            stock: this.stock.value,
            price: this.price.value,
            discount: this.discount.value,
            weight: this.weight.value,
            image1: this.image1.value,
            image2: this.image2.value,
            image3: this.image3.value,
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save Data!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                axios.patch(LinkAPISQL + '/product/' + idSelected, dataToSend)
                .then((res) =>{
                    Swal.fire(
                        'Success!',
                        'Edit Data Success!.',
                        'success'
                    )
                    .then((result) => {
                        if(result.isConfirmed){
                            this.setState({idSelected: null})
                            this.getData()
                        }
                    })
                })
                .catch((err) => {
                    if(err.response.data.error === true){
                        Swal.fire('Error!', err.response.data.message, 'error')
                    }
                })
            }
        })
    }

    onSubmit = () => {
        let dataToSend = {
            name: this.name.value,
            brand: this.brand.value,
            category: this.category.value,
            stock: this.stock.value,
            price: this.price.value,
            discount: this.discount.value,
            weight: this.weight.value,
            image1: this.image1.value,
            image2: this.image2.value,
            image3: this.image3.value,
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Post Data!'
        })
        .then((result) => {
            if(result.isConfirmed){
                axios.post(LinkAPISQL + '/post-data-product', dataToSend)
                .then((res) => {
                    Swal.fire('Success!', 'Post Data Success!', 'success')
                    .then((result) => {
                        if(result.isConfirmed){
                            this.setState({showModal: false})
                            this.getData()
                        }
                    })
                })
                .catch((err) =>{
                    if(err.response.data.error === true){
                        Swal.fire('Error!', err.response.data.message, 'error')
                    }
                })
            }
        })
    }

    showData = () => {
        return this.state.data.map((value, index) => {
            if(this.state.idSelected === value.id){
                return(
                    <tr key={index}>
                        <td scope="col">{value.id}</td>
                        <td scope="col">
                            <input type="text" className="form-control" defaultValue={value.name} ref={(e) => this.name = e}/>
                        </td>
                        <td scope="col">
                            <input type="text" className="form-control" defaultValue={value.brand} ref={(e) => this.brand = e}/>
                        </td>
                        <td scope="col">
                            <input type="number" className="form-control" defaultValue={value.category} ref={(e) => this.category = e}/>
                        </td>
                        <td scope="col">
                            <input type="number" className="form-control" defaultValue={value.stock} ref={(e) => this.stock = e}/>
                        </td>
                        <td scope="col">
                            <input type="number" className="form-control" defaultValue={value.price} ref={(e) => this.price = e}/>
                        </td>
                        <td scope="col">
                            <input type="number" className="form-control" defaultValue={value.discount} ref={(e) => this.discount = e}/>
                        </td>
                        <td scope="col">
                            <input type="text" className="form-control" defaultValue={value.weight} ref={(e) => this.weight = e}/>
                        </td>
                        <td scope="col">
                            <input type="text" className="form-control" defaultValue={value.image1} ref={(e) => this.image1 = e}/>
                        </td>
                        <td scope="col">
                            <input type="text" className="form-control" defaultValue={value.image2} ref={(e) => this.image2 = e}/>
                        </td>
                        <td scope="col">
                            <input type="text" className="form-control" defaultValue={value.image3} ref={(e) => this.image3 = e}/>
                        </td>
                        <td scope="col" className="text-nowrap">
                            <FontAwesomeIcon icon={faCheck} className='cp-font-size-22 mr-4 cp-link cp-clickable-element text-decoration-none' onClick={() => this.onSave()} />
                            <FontAwesomeIcon icon={faTimes} className='cp-font-size-22 cp-link cp-clickable-element text-decoration-none' onClick={() => this.setState({idSelected: null})} />
                        </td>
                    </tr>
                )
            }else{
                return(
                    <tr key={index}>
                        <td scope="col">{value.id}</td>
                        <td scope="col">{value.name}</td>
                        <td scope="col">{value.brand}</td>
                        <td scope="col">{value.category}</td>
                        <td scope="col">{value.stock}</td>
                        <td scope="col">{value.price.toLocaleString()}</td>
                        <td scope="col">{value.discount}%</td>
                        <td scope="col">{value.weight}</td>
                        <td scope="col"><img src={value.image1} className="img-thumbnail border border-0" alt={value.image1} /></td>
                        <td scope="col"><img src={value.image2} className="img-thumbnail border border-0" alt={value.image2} /></td>
                        <td scope="col"><img src={value.image3} className="img-thumbnail border border-0" alt={value.image3} /></td>
                        <td scope="col" className="text-nowrap">
                            <Link to={`/admin-detail/${value.id}`}>
                                <FontAwesomeIcon icon={faInfo} className='cp-font-size-22 cp-link cp-clickable-element text-decoration-none' />
                            </Link>
                            <FontAwesomeIcon icon={faPencilAlt} className='cp-font-size-22 mx-4 cp-link cp-clickable-element text-decoration-none' onClick={() => this.onEdit(value.id)} />
                            <FontAwesomeIcon icon={faTrash} className='cp-font-size-22 cp-link cp-clickable-element text-decoration-none' onClick={() => this.onDel(value.id)} />
                        </td>
                    </tr>
                )
            }
        })
    }

    render(){
        if(this.state.data === null || this.state.category === null){
            return(
                <div className="container text-center mt-5 height-150 mb-5">
                    <div className="spinner-grow text-warning" style={{width: '3rem', height: '3rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        return(
            <div className="container">
                <div>
                    <input type="button" value="Tambah Data" onClick={() => this.setState({showModal: true})} className="btn btn-info my-3" /> 
                </div>
                <table className="table table-hover">
                    <thead className="bg-warning">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Category</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Price</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Image 1</th>
                            <th scope="col">Image 2</th>
                            <th scope="col">Image 3</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.showData()
                        }
                    </tbody>
                </table>

                <Modal toggle={() => this.setState({showModal: false})} isOpen={this.state.showModal}>
                    <ModalBody>
                        <div>
                            <h4>
                                Tambah Data
                            </h4>
                        </div>
                        <div className="form-row">
                            <div className="col-4">
                                <select ref={(e) => this.category = e} className="form-control mb-3">
                                    {
                                        this.state.category.map((value, index) => {
                                            return(
                                                <option key={index} value={value.id}>
                                                    {value.name}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-8">
                                <input type="text" ref={(e) => this.brand = e} placeholder="Product Brand" className="form form-control mb-3" />
                            </div>
                        </div>
                        <div>
                            <input type="text" ref={(e) => this.name = e} placeholder="Product Name" className="form form-control mb-3" />
                        </div>
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"> 
                                        Rp
                                    </div>
                                </div>
                                <input type="number" ref={(e) => this.price = e} placeholder="Price" className="form form-control" />
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input type="number" ref={(e) => this.stock = e} placeholder="Stock" className="form form-control" />
                            </div>
                            <div className="col input-group">
                                <input type="number" ref={(e) => this.weight = e} placeholder="Weight" className="form form-control" />
                                <div className="input-group-prepend">
                                    <div className="input-group-text"> 
                                        gram
                                    </div>
                                </div>
                            </div>
                            <div className="col input-group">
                                <input type="number" ref={(e) => this.discount = e} placeholder="Discount" className="form form-control" />
                                <div className="input-group-prepend">
                                    <div className="input-group-text"> 
                                        %
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h4>Image URL</h4>
                            <input type="text" ref={(e) => this.image1 = e} placeholder="image URL 1" className="form form-control mb-3" />
                            <input type="text" ref={(e) => this.image2 = e} placeholder="image URL 2" className="form form-control mb-3" />
                            <input type="text" ref={(e) => this.image3 = e} placeholder="image URL 3" className="form form-control mb-3" />
                        </div>
                        <div>
                            <input type="button" value="Submit" className="btn btn-primary w-100 mb-3" onClick={() => this.onSubmit()} />
                        </div>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}

export default ProductManagement