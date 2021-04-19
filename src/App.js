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
import CartPage from './Page/CartPage'
import Checkout from './Page/Checkout'
import ProductManagement from './Page/Admin/ProductManagement'
import ProductManagementDetail from './Page/Admin/ProductManagementDetail'

// CSS
import './Supports/Stylesheets/Utils.css'
import './Supports/Stylesheets/LandingPage.css'
import './Supports/Stylesheets/Products.css'

// REDUX
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import allReducer from './Redux/Reducers/Index'
import UserProfile from './Page/UserProfile'

const store = createStore(allReducer, applyMiddleware(thunk))

export default class App extends React.Component {
  render(){
    return(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Navbar />
              <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/Register' component={Register} />
                <Route path='/Signup' component={Signup} />
                <Route path='/Products' component={Products} />
                <Route path='/DetailProduct/:idProduct' component={DetailProducts} />
                <Route path='/cartpage' component={CartPage} />
                <Route path='/checkout/:idTransaction' component={Checkout} />
                <Route path='/user-profile' component={UserProfile} />
                <Route path='/admin' component={ProductManagement} />
                <Route path='/admin-detail/:idProduct' component={ProductManagementDetail} />
              </Switch>
            <Footer1 />
            <Footer2 />
          </BrowserRouter>
        </Provider>
      </>
    )
  }
}

