import React from 'react';
import Homepage from './container/homepage/homepage.comp';
import {Switch, Route}  from 'react-router-dom';
import ShopPage from './container/shop/shop.comp';


function App() {
  return ( 
    <div>
      <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/shop" exact component={ShopPage}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
