import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';


const Routes2022 = () => (
    <Switch>
        <Route exact path="/2022/" component={Home} />
    </Switch>
)
export default Routes2022