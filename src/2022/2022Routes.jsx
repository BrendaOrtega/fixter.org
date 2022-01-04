import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from "./pages/Portfolio/Portfolio"

const Routes2022 = () => (
    <Switch>
        <Route exact path="/2022/" component={Home} />
        <Route exact path="/2022/portafolio" component={Portfolio} />
    </Switch>
)
export default Routes2022