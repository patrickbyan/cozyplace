import React from 'react'
import PhoneNumberValidator from '../Supports/Functions/PhoneNumber'
import EmailValidator from '../Supports/Functions/Email'

export default class Register extends React.Component{

    state = {
        error: null
    }

    submitRegister = () => {
        let inputUser = this.refs.inputUser.value

        if(inputUser[0] >= 0){
            let resultPhoneValidator = PhoneNumberValidator(inputUser)
            // console.log(resultPhoneValidator)

            if(resultPhoneValidator !== true){
                this.setState({error: resultPhoneValidator})
            }else{
                this.setState({error: 'Registrasi Berhasil'})
            }
        }else{
            let resultEmailValidator = EmailValidator(inputUser)
            // console.log(resultEmailValidator)

            if(resultEmailValidator !== true){
                this.setState({error: 'Email Tidak Sesuai'})
            }else{
                this.setState({error: 'Registrasi Berhasil'})
            }
        }
        
        return inputUser
    }

    render(){
        return(
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center" style={{height: '300px'}}>
                    <div>
                        <h1>
                            Register
                        </h1>
                    </div>
                    <div>
                        <input type="text" ref="inputUser" placeholder="Masukan Email" />
                        <input type='button' value='register' onClick={this.submitRegister} />
                    </div>
                    <div>
                        <p>
                            {
                                this.state.error? // ada?
                                    this.state.error // jika ada, tampilkan
                                :
                                    null // else, null/tampil
                            }
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}