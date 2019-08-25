import React from 'react';
import Homepage from './container/homepage/homepage.comp';
import {Switch, Route}  from 'react-router-dom';
import ShopPage from './container/shop/shop.comp';
import './App.css';


function App() {
  return ( 
    <div>
      <Switch>
        <Route exact path="/" component={ Homepage }></Route>
        <Route exact path="/shop" component={ ShopPage }></Route>
      </Switch>
    </div>
  );
}

export default App;
