import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Nav extends Component {

    render() {
        return (
            <section className="navbar">
                <div className="menu fl">
                    <Link to="/" >
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FFIXTER_ORG_BORDE-01.png?alt=media&token=2928c937-2be2-4678-bd07-f8118cb38ca2" alt="logo"/>
                    </Link>
                    <hr className="division"/>
                    <div className="pestanas fl">
                        <Link to="/nosotros-fixter">
                            <p>Nosotros</p>
                        </Link>
                        <Link to="/servicios-fixter">
                            <p>Servicios</p>
                        </Link>
                        <Link to="capacitacion-fixter">
                            <p>Capacitación</p>
                        </Link>

                        <Link to="contacto-fixter">
                            <p>Contacto</p>
                        </Link>
                    </div>
                </div>
                <div className="redes fl">
                    <a href="https://www.facebook.com/Fixterorg-1333568760053068/" aria-label="Facebook" target={"blank"} rel="noopener noreferrer">
                        <FontAwesome name="facebook"/>
                    </a>
                    <a href="https://wa.me/5217757609276" aria-label="Whats app" target={"blank"} rel="noopener noreferrer">
                        <FontAwesome name="whatsapp"/>
                    </a>
                    <a href="https://www.linkedin.com/company/28982942/admin/" aria-label="Linkedin" target={"blank"} rel="noopener noreferrer">
                        <FontAwesome name="linkedin"/>
                    </a>
                    <a href="mailto:brenda@fixter.org" aria-label="Mail" rel="noopener noreferrer">
                        <FontAwesome name="envelope"/>
                    </a>


                </div>
            </section>
        );
    }
}

export default Nav;