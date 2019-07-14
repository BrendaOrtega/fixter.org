import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Nosotros from './components/nosotros/Nosotros';
import Capacitacion from "./components/capacitacion/Capacitacion";
import ContactoContainer from './components/contacto/ContactoContainer';
import Arango from "./components/projects/Arango";
import Allende from "./components/projects/Allende";
import Suki from "./components/projects/Suki";
import Firebase from "./components/projects/Firebase";
import Concamin from './components/projects/Concamin';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/arango" component={Arango}/>
        <Route path="/allende" component={Allende}/>
        <Route path="/blog" component={Suki}/>
        <Route path="/concamin" component={Concamin}/>
        <Route path="/fire" component={Firebase}/>
        <Route path="/nosotros-fixter" component={Nosotros}/>
        <Route path="/capacitacion-fixter" component={Capacitacion}/>
        <Route path="/contacto-fixter" component={ContactoContainer}/>
    </Switch>
);
export default Routes;