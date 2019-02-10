import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
    </Switch>
);
export default Routes;