import React from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import { Home } from '../screens/Home';
import { AddEmployee } from '../screens/AddEmployee';
import { EditEmployee } from '../screens/EditEmployee';
function index() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        
      </Switch>
    </div>
  );
}

export default index;
