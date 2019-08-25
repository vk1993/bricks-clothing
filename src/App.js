import React from 'react';
import Homepage from './container/homepage/homepage.comp';
import {Switch, Route}  from 'react-router-dom';
import ShopPage from './container/shop/shop.comp';
import './App.css';
import Header from './component/header/header.comp';



function App() {
  return ( 
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={ Homepage }></Route>
        <Route exact path="/shop" component={ ShopPage }></Route>
      </Switch>
    </div>
  );
}

export default App;
