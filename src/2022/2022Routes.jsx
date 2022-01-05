import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"

const Routes2022 = () => (
    <Switch>
        <Route exact path="/2022/" component={Home} />
        <Route exact path="/2022/portafolio" component={Portfolio} />
        <Route exact path="/2022/contacto" component={Contact} />
    </Switch>
)
export default Routes2022