import React from 'react'
import Navbar from './Component/Navbar'
import Footer1 from './Component/Footer1'
import Footer2 from './Component/Footer2'

// CSS
import './Supports/Stylesheets/Utils.css'

export default class App extends React.Component {
  render(){
    return(
      <>
        <Navbar />
        <Footer1 />
        <Footer2 />
      </>
    )
  }
}

