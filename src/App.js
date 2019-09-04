import React from 'react';
import Homepage from './container/homepage/homepage.comp';
import {Switch, Route}  from 'react-router-dom';
import ShopPage from './container/shop/shop.comp';
import './App.css';
import Header from './component/header/header.comp';
import SignInAndSignUp from './container/signin-signup/sign-in-sign-up.comp';
import { connect } from "react-redux";

class App extends React.Component{
    constructor(props){
        console.log(props)
        super(props);
    }
    unsubscribeFromAuth = null;

     componentDidMount() {
        this.unsubscribeFromAuth = this.props.onAuthChangedd();
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
        return(
            <div>
                <Header currentUser ={this.props.currentUser}></Header>
                <Switch>
                    <Route exact path="/" component={ Homepage }></Route>
                    <Route exact path="/shop" component={ ShopPage }></Route>
                    <Route exact path="/signin" component={ SignInAndSignUp }></Route>
                </Switch>
            </div>
        )
    }
}
const mapState = state => ({
    currentUser: state.currentUser
});

const mapDispatch = dispatch => ({
    onAuthChangedd: () => dispatch.signin.onAuthChanged(),
});

export default connect(mapState,mapDispatch)(App);