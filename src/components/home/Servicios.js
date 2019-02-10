import React, { Component } from 'react';
import './Home.css';
import lap from '../../assets/laptop-code-solid.png';
import movil from '../../assets/mobile-alt-solid.png';
import host from '../../assets/ioxhost-brands.png';
import chalk from '../../assets/chalkboard-teacher-solid.png';

class Servicios extends Component {

    render() {
        return (
            <div className="services fl" style={{flexWrap:"wrap"}}>
                <div className="services-img">

                </div>
                <div className="services-text">
                    <h2>Servicios</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <br/>
                    <div className="fl" style={{flexWrap:"wrap"}}>
                        <div className="service">
                            <img src={lap} alt="laptop"/>
                            <h3>Desarrollo de software</h3>
                            <p>Desarrollo de software a la medida</p>
                        </div>
                        <div className="service">
                            <img src={chalk} alt=""/>
                            <h3>Diseno web</h3>
                            <p>Diseno de páginas web para startups</p>
                        </div>
                        <div className="service">
                            <img style={{height:"50px", width:"30px"}} src={movil} alt=""/>
                            <h3>Aplicaciones Móviles</h3>
                            <p>Aplicaciones para IOS y Android</p>
                        </div>
                        <div className="service">
                            <img src={host} alt=""/>
                            <h3>Hosting y dominios</h3>
                            <p>Hosting, respaldos, correos y más.</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Servicios;