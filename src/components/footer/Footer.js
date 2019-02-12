import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="footer-box">
                    <div>
                        <h3>Fixter.org</h3>
                        <p>Empresa dedicada al desarrollo de software multiplataforma.
                            Creamos para ti, desde páginas web hasta videojuegos; siempre con las herramientas más modernas, seguras y escalables.
                        </p>
                    </div>
                    <div>
                        <h3>Ayuda</h3>
                        <p>Preguntas Frecuentes</p>
                        <p>Contacto</p>
                    </div>
                    <div>
                        <h3>Ubicación</h3>
                        <p>Jalapa #100, Roma Norte</p>
                        <p>(+52) 775 760 9276</p>
                    </div>
                </div>
                <div className="copy">
                    © Copright 2018 Fixter
                </div>
            </div>
        );
    }
}

export default Footer;