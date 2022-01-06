import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '2022/pages/Home';
import Portfolio from "2022/pages/Portfolio/Portfolio";
import Contact from "2022/pages/Contact/Contact";
import NavBar from '2022/pages/NavBar';
import Footer from '2022/pages/Home/Footer';
import Privacy from "2022/pages/Privacy/Privacy"

const Routes = () => (
    <>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portafolio" component={Portfolio} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/politicas-de-privacidad" component={Privacy} />
        </Switch>
        <Footer />
    </>
);
export default Routes;