import React from 'react';
import Homepage from './container/homepage/homepage.comp';
import {Switch, Route}  from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/" exact component={Homepage}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
