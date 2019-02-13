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
                    <div className="redes">
                        <h3>Redes</h3>
                        <a href="https://www.facebook.com/Fixterorg-1333568760053068/" target={"blank"} >
                            <FontAwesome name="facebook"/>
                        </a>
                        <a href="https://wa.me/5217714348038" target={"blank"}>
                            <FontAwesome name="whatsapp"/>
                        </a>
                        <a href="https://www.linkedin.com/company/28982942/admin/" target={"blank"}>
                            <FontAwesome name="linkedin"/>
                        </a>
                        <a href="mailto:brenda@fixter.org" >
                            <FontAwesome name="envelope"/>
                        </a>

                        {/*
                        <p>Preguntas Frecuentes</p>
*/}
                    </div>
                    <div>
                        <h3>Ubicación</h3>
                        <p>Jalapa #100, Roma Norte, CDMX</p>
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