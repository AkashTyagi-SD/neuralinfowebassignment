import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Main from '../layout/Main';
import { AddEmployee } from '../screens/AddEmployee';
import { EditEmployee } from '../screens/EditEmployee';
import Auth from '../screens/auth/index';

function Routeing() {
    const { pathname } = useLocation();
    return (
        <div className="App">
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route path="/auth" component={Auth} />
                <Route path="/app/dashboard" component={Main} exact />
                <Route path="/add" component={AddEmployee} exact />
                <Route path="/edit/:id" component={EditEmployee} exact />
                <Redirect from="/" to="/auth" />
            </Switch>
        </div>
    );
}

export default Routeing;
