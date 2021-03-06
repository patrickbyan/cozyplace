import React from 'react'
import Axios from 'axios'
import LinkAPI from '../Supports/Constants/linkAPI'

export default class Signup extends React.Component{

    state = {
      usernameAvailable: null,  
      errorUsername: null,
      errorPassword: null,
      passwordMatch: null,
      inputUsername: null,
      inputPassword: null
    }

    componentDidMount(){
      console.log(this.props.location.pathname)
      console.log(this.props.location.pathname.split('/')[2])
    }

    componentWillUnmount(){
      let id = this.props.location.pathname.split('/')[2]

      Axios.delete(LinkAPI + `/users/${id}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }

    usernameValidation = (event) => {
        let inputUsername = event.target.value

        Axios.get(LinkAPI + '/users?username=' + inputUsername)
        .then((res) => {
          if(res.data.length === 0){
            this.setState({usernameAvailable: true, errorUsername: null, inputUsername: inputUsername})
          }else{
            this.setState({errorUsername: 'Username Telah Terpakai'})
          }
        })

        .catch((err) => {
          console.log(err)
        })
    }

    passwordValidation = () => {
      let inputPassword = this.refs.inputPassword.value
      let inputConfirmPassword = this.refs.inputConfirmPassword.value

      if(inputPassword === inputConfirmPassword){
        this.setState({passwordMatch: true, errorPassword: null, inputPassword: inputPassword})
      }else{
        this.setState({errorPassword: 'Password Tidak Sesuai'})
      }
    }

    submitRegister = () => {
      let id = this.props.location.pathname.split('/')[2]

      if(this.state.errorUsername) return alert(this.state.errorUsername)

      if(this.state.errorPassword) return alert(this.state.errorPassword)

      let dataToSend = {
        username: this.state.inputUsername,
        password: this.state.inputPassword
      }

      Axios.patch(LinkAPI + `/users/${id}`, dataToSend)
      .then((res) => {
        localStorage.setItem('id', res.data.id)
        window.location = '/'
      })

      .catch((err) => {
        console.log(err)
      })
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center align-items-center height-500">
                    <div className="col-5 px-5 pt-5 pb-5 border">
                        <h1>
                            Sign up
                        </h1>
                        <input type="text" placeholder="username" className="form form-control" onChange={this.usernameValidation} />
                        <input type="password" ref="inputPassword" placeholder="password" className="form form-control my-3"  onChange={this.passwordValidation} />
                        <input type="password" ref="inputConfirmPassword" placeholder="confirm password" className="form form-control" onChange={this.passwordValidation}/>
                        <p className="text-warning cp-font-size-14">
                            {
                              this.state.errorUsername? // ada?
                                this.state.errorUsername // jika ada, tampilkan
                              :
                                null // else, null/tampil
                            }
                            
                        </p>
                        <p className="text-warning cp-font-size-14">
                            {
                              this.state.errorPassword?
                                this.state.errorPassword
                              :
                                null
                            }
                        </p>
                        
                        <input type='button' value='submit' className="btn btn-warning w-100 mt-3" onClick={this.submitRegister} />
                    </div>
                </div>
            </div>
        )
    }
}