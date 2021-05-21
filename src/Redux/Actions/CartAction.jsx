import axios from 'axios'
import LinkCart from '/Important-Document/Purwadhika/Class/Front-End/Patrick_Project_Ecommerce/cozyplace_patrick/src/Supports/Constants/LinkCarts'
import Swal2 from 'sweetalert2'
import LinkProduct from '../../Supports/Constants/linkProduct'
import { Redirect } from 'react-router'

export const getDataCart = (idProduct, idUser, quantity) => {
    return(dispatch) => {
        axios.get(LinkCart + `?idProduct=${idProduct}`)
        .then((res) => {
            if(res.data.length === 0){
                axios.post(LinkCart, {idProduct: idProduct, idUser: idUser, quantity: quantity})
                .then((res) => {
                    console.log(res.data)
                    axios.get(LinkCart + `?idUser=${idUser}`)
                    .then((res) => {
                        Array.prototype.sum = function(){
                            var sumQtyCarts = 0
                            for(let i = 0; i < res.data.length; i++){
                                sumQtyCarts += res.data[i].quantity
                            }
                            return sumQtyCarts
                        }

                        dispatch({    
                            type: 'GET_DATA_SUCCESS',
                            payload: res.data
                        })

                        Swal2.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Add to cart success',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            }else{
                let quantityOnDB = res.data[0].quantity
                let idCart = res.data[0].id

                axios.patch(LinkCart + `/${idCart}`, {quantity: quantityOnDB + 1})
                .then((res) => {
                    console.log(res.data)
                    axios.get(LinkCart + `?idUser=${idUser}`)
                    .then((res) => {
                        Array.prototype.sum = function(){
                            var sumQtyCarts = 0
                            for(let i = 0; i < res.data.length; i++){
                                sumQtyCarts += res.data[i].quantity
                            }
                            return sumQtyCarts
                        }

                        dispatch({    
                            type: 'GET_DATA_SUCCESS',
                            payload: res.data
                        })

                        Swal2.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Add to cart success',
                            showConfirmButton: false,
                            timer: 1000
                          })

                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const searchText = (search) => {
    return(dispatch) => {
        dispatch({
            type: 'SEARCH_ACTION_SUCCESS',
            payload: search
        })

        axios.get(LinkProduct + '?name_like=' + search)
        .then((res) => {
            if(search.length === 0){
                dispatch({
                    type: 'SEARCH_DATA_SUCCESS'
                })
            }else{
                dispatch({
                    type: 'SEARCH_DATA_SUCCESS',
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}