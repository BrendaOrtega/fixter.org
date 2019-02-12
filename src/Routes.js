import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Nosotros from './components/nosotros/Nosotros';
import Capacitacion from "./components/capacitacion/Capacitacion";
import ContactoContainer from './components/contacto/ContactoContainer';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/nosotros" component={Nosotros}/>
        <Route path="/capacitacion" component={Capacitacion}/>
        <Route path="/contacto" component={ContactoContainer}/>
    </Switch>
);
export default Routes;