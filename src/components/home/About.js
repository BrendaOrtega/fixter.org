import React, { Component } from 'react';
import './Home.css';

class About extends Component {

    render() {
        return (
            <div className="about">
                <h2>Soluciones Tecnológicas</h2>
                <p>

                    Nuestra metodología de desarrollo nos permite crear software modularizado y funcional, lo que permite a nuestros clientes escalar de forma más efectiva sin desechar el producto, solo agregar componentes.

                </p>
                <span className="info">Saber más de Fixter → </span>
            </div>
        );
    }
}

export default About;