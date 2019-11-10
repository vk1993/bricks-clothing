import React from 'react';
import Homepage from './container/homepage/homepage.comp';
import {Switch, Route, Redirect}  from 'react-router-dom';
import ShopPage from './container/shop/shop.comp';
import './App.css';
import Header from './component/header/header.comp';
import SignInAndSignUp from './container/signin-signup/sign-in-sign-up.comp';
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-action';

class App extends React.Component{

    unsubscribeFromAuth = null;
    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapShot => {
                console.log(snapShot.data())
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
            });
          }
          setCurrentUser(userAuth);
        });
    }

    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={ Homepage }></Route>
                    <Route exact path="/shop" component={ ShopPage }></Route>
                    <Route exact path="/signin" render = {() => this.props.currentUser ? (<Redirect to='/' />) :
                    (<SignInAndSignUp />)
                  }></Route>
                </Switch>
            </div>
        )
    }
}

const mapState = ({user}) => ({
  currentUser : user.currentUser
})


const mapDispatch = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapState,
  mapDispatch
)(App); 