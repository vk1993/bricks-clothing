import React from 'react';
import Homepage from './container/homepage/homepage.comp';
import {Switch, Route}  from 'react-router-dom';
import ShopPage from './container/shop/shop.comp';
import './App.css';
import Header from './component/header/header.comp';
import SignInAndSignUp from './container/signin-signup/sign-in-sign-up.comp';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            currentUser:null
        }
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                await userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser :{
                            id:snapShot.id,
                            ...snapShot.data()
                        }
                    })
                });
                console.log(this.state)
            }
            this.setState({
                currentUser: userAuth
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
        return(
            <div>
                <Header currentUser ={this.state.currentUser}></Header>
                <Switch>
                    <Route exact path="/" component={ Homepage }></Route>
                    <Route exact path="/shop" component={ ShopPage }></Route>
                    <Route exact path="/signin" component={ SignInAndSignUp }></Route>
                </Switch>
            </div>
        )
    }
}
