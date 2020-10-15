import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../AuthData/Login';
import PrivateRoute from '../AuthData/PrivateRoute';
import Dashboard from '../Dashboard/Dashboard';
import Home from './Home/Home';
import NotFoundPages from './ShearCompo/NotFoundPages';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />;
            <Route exact path="/home" component={Home} />;

            <PrivateRoute exact path="/dashboard">
                <Dashboard />
            </PrivateRoute>

            <Route path="/login" component={Login} />;   
            <Route path="*" component={NotFoundPages} />
        </Switch>
    );
};

export default Routes;