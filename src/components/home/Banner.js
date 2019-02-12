import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';

class Banner extends Component {

    render() {
        return (
            <div className="banner">
                <div className="cover-orange">
                    <div>
                        <h3>Tenemos la experiencia para diseñar y desarrollar productos digitales con las mejores herramientas
                        </h3>
                        <p>Seremos parte de tu proyecto, desde el descubrimiento inicial, la ideación y la arquitectura, hasta el diseño y el desarrollo
                 </p>

                        <button className="btn-c">Cotizar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;