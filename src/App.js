import React from 'react';
import Homepage from './container/homepage/homepage.comp';
import {Switch, Route}  from 'react-router-dom';
import ShopPage from './container/shop/shop.comp';
import './App.css';
import Header from './component/header/header.comp';
import SignInAndSignUp from './container/signin-signup/sign-in-sign-up.comp';
import { connect } from "react-redux";

class App extends React.Component{

    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = this.props.onAuthChanged();
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={ Homepage }></Route>
                    <Route exact path="/shop" component={ ShopPage }></Route>
                    <Route exact path="/signin" component={ SignInAndSignUp }></Route>
                </Switch>
            </div>
        )
    }
}


const mapDispatch = dispatch => ({
    onAuthChanged: dispatch.signin.onAuthChanged
});

export default connect(null,mapDispatch)(App);