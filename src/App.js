// Default
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Component
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Footer1 from './Component/Footer1'
import Footer2 from './Component/Footer2'

//Page
import LandingPage from './Page/LandingPage'
import Register from './Page/Register'
import Products from './Page/Products'
import Signup from './Page/Signup'
import DetailProducts from './Page/DetailProducts'

// CSS
import './Supports/Stylesheets/Utils.css'
import './Supports/Stylesheets/LandingPage.css'
import './Supports/Stylesheets/Products.css'

export default class App extends React.Component {
  render(){
    return(
      <>
        <BrowserRouter>
          <Header />
          <Navbar />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/Register' component={Register} />
              <Route path='/Signup' component={Signup} />
              <Route path='/Products' component={Products} />
              <Route path='/DetailProducts' component={DetailProducts} />
            </Switch>
          <Footer1 />
          <Footer2 />
        </BrowserRouter>
      </>
    )
  }
}

