import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

class Banner extends Component {

    render() {
        return (
            <section className="banner">
                <div className="cover-orange">
                    <div>
                        <h3>Tenemos la experiencia para diseñar y desarrollar productos digitales <br/>con las mejores herramientas
                        </h3>
                        <p>Seremos parte de tu proyecto, desde el descubrimiento inicial, la ideación y la arquitectura, hasta el diseño, el desarrollo y el testing
                 </p>
                    <Link to="/contacto-fixter">
                        <button className="btn-c">Cotizar</button>
                    </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;