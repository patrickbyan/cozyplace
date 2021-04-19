import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'

class ProductManagementDetail extends React.Component{
    state = {
        data: null
    }

    componentDidMount(){
        this.getDetailProduct()
    }

    getDetailProduct = () => {
        let idProduct = this.props.location.pathname.split('/')[2]

        axios.get(`http://localhost:5000/product/${idProduct}`)
        .then((res) => {
            this.setState({data: res.data.data})
        })
        .catch((err) => {
            if(err.response.data.error === true){
                Swal.fire('Error!', err.response.data.message, 'error')
            }
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
            <div className="container my-5">
                <div className="col-12 col-md-6">
                    <div className="mt-5 mt-md-0">
                        <h1>
                            {this.state.data[0].name}
                        </h1>
                        <p>
                            Sold : 0 Products
                        </p>
                        <h3>
                            Rp. {this.state.data[0].price.toLocaleString()}
                        </h3>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="font-weight-bold">
                        Stock
                    </p>
                    <p className="font-weight-bold">
                        {this.state.data[0].stock} Item
                    </p>
                    <p className="font-weight-bold">
                        Weight
                    </p>
                    <p>
                        {this.state.data[0].weight} Gram
                    </p>
                    <hr />
                </div>
                <div>
                    <p className="font-weight-bold">
                        Description
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint tempore rem minus cupiditate porro dignissimos hic ipsa ullam quidem fuga, doloribus ipsam voluptatibus. Aut dolorem omnis architecto ipsum quaerat!
                    </p>
                </div>
            </div>
        )
    }
}

export default ProductManagementDetail