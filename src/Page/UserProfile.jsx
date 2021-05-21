import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'

// Pages Child
import Profile from './UserProfile/Profile'
import TransactionHistory from './UserProfile/TransactionHistory'

export default class UserProfile extends React.Component{
    state = {
        isRefresh: false,
        pathProfile: null
    }
    
    componentDidMount(){
        let pathProfile = this.state.pathProfile

        pathProfile = this.props.location.pathname.split('/')[2]
        this.setState({pathProfile: pathProfile})
    }

    render(){
        return(
            <BrowserRouter>
            <div className="container">
                <nav>
                    <ol className="breadcrumb bg-white ml-n3">
                        <li className="breadcrumb-item"><a href="/" className="cp-link font-weight-light">Home</a></li>
                        {
                            this.props.location.pathname !== '/user-profile'?
                                <>
                                    <li className="breadcrumb-item"><a href="/user-profile" className="cp-link font-weight-light">Profile</a></li>
                                    <li className="breadcrumb-item active font-weight-lighter text-capitalize" aria-current="page">{this.state.pathProfile}</li>
                                </>
                            :
                                <>
                                    <li className="breadcrumb-item active font-weight-lighter text-capitalize" aria-current="page">Profile</li>
                                </>
                        }
                        
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-12">
                        <Link to="/user-profile/transaction-history">
                            <button type="button" className="btn btn-warning badge-pill" onClick={() => this.setState({isRefresh: true})}>
                                Transaction History
                            </button>
                        </Link>
                        {/* <Link to="/user-profile/profile">
                            <button type="button" className="btn btn-warning badge-pill" onClick={() => this.setState({isRefresh: true})}>
                                Profile
                            </button>
                        </Link>
                        <Link to="/user-profile/Address">
                            <button type="button" className="btn btn-warning badge-pill" onClick={() => this.setState({isRefresh: true})}>
                                Address
                            </button>
                        </Link> */}
                    </div>
                    <div className="col-12 mt-3">
                        
                    </div>
                    <div className="col-12">
                            <Switch>
                                <Route exact path='/' component={LandingPage} />
                                {/* <Route path='/user-profile/profile' component={Profile} /> */}
                                <Route path='/user-profile/transaction-history' component={TransactionHistory} />
                            </Switch>
                    </div>
                </div>
            </div>
            </BrowserRouter>
        )
    }
}