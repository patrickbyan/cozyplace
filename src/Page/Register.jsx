import React from 'react'
import PhoneNumberValidator from '../Supports/Functions/PhoneNumber'
import EmailValidator from '../Supports/Functions/Email'
import Axios from 'axios';
import LinkAPI from '../Supports/Constants/linkAPI'
import Swal2 from 'sweetalert2'

import checkUserLogin from '../Supports/Functions/checkUserLogin'

export default class Register extends React.Component{

    state = {
        error: null,
        phoneNumber: null,
        email: null,
        isUserLogin: false
    }

    componentDidMount(){
        this.onCheckUserLogin()
    }

    onCheckUserLogin = () => {
        let id = localStorage.getItem('id')

        let result = checkUserLogin(id)
        console.log(result)

        this.setState({isUserLogin: result})

        if(result === true){
            Swal2.fire({
                position: 'top',
                icon: 'error',
                title: 'Anda Harus Login Terlebih Dahulu',
                confirmButtonText: `Back to Home Page`
            })
            .then((res) => {
                Swal2.fire({
                    position: 'top',
                    icon: 'info',
                    title: 'Redirecting: Home Page',
                    showConfirmButton: false,
                    timer: 500,
                    timerProgressBar: true,
                })
                .then((res) => {
                    window.location = "/"
                })
            })
        }
    }

    submitRegister = () => {
        let inputUser = this.refs.inputUser.value

        if(inputUser){
            if(inputUser[0] >= 0){
                let resultPhoneValidator = PhoneNumberValidator(inputUser)
                // console.log(resultPhoneValidator)
    
                if(resultPhoneValidator !== true){
                    this.setState({error: resultPhoneValidator})
                }else{
                    this.setState({error: null, phoneNumber: inputUser})
                }
            }else{
                let resultEmailValidator = EmailValidator(inputUser)
                // console.log(resultEmailValidator)
    
                if(resultEmailValidator !== true){
                    this.setState({error: 'Email Tidak Sesuai'})
                }else{
                    this.setState({error: null, email: inputUser})
                }
            }
        }else{
            this.setState({error: 'Email / Nomor Handphone Harus Terisi'})
        }
    }

    sendDataToAPI = () => {
        if(this.state.phoneNumber !== null){
            Axios.get(LinkAPI + '/users?phone=' + this.state.phoneNumber)
            .then((res) => {
                if(res.data.length === 1){
                    this.setState({error: 'Nomor Sudah Terdaftar'})
                }else{
                    Axios.post(LinkAPI + '/users', {phone: this.state.phoneNumber, email: '', username: '', password: '', roles: 'user'})
                    .then((res) => {
                        console.log(res.data.id)
                        window.location = `/Signup/${res.data.id}`
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            Axios.get(LinkAPI + '/users?email=' + this.state.email)
            .then((res) => {
                if(res.data.length === 1){
                    this.setState({error: 'Email Sudah Terdaftar'})
                }else{
                    Axios.post(LinkAPI + '/users', {phone: '', email: this.state.email, username: '', password: '', roles: 'user'})
                    .then((res) => {
                        console.log(res)
                        window.location = `/Signup/${res.data.id}`
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center align-items-center height-500">
                    <div className="col-5 px-5 pt-5 pb-5 border">
                        <h1>
                            Register
                        </h1>
                        <input type="text" ref="inputUser" placeholder="Masukan Email / Nomor Handphone" className="form form-control" onChange={this.submitRegister} />
                        <p className="text-warning cp-font-size-14">
                            {
                              this.state.error? // ada?
                                this.state.error // jika ada, tampilkan
                              :
                                null // else, null/tampil
                            }
                        </p>
                        <input type='button' disabled = {this.state.error? true : false} value='Register' className="btn btn-warning w-100 mt-3" onClick={this.sendDataToAPI} />
                    </div>
                </div>
            </div>
        )
    }
}