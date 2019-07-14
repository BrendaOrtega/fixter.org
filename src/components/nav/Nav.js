import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import logo from '../../assets/FIXTER_ORG_BORDE-01.png';

class Nav extends Component {

    render() {
        return (
            <div className="navbar">
                <div className="menu fl">
                    <Link to="/" >
                        <img src={logo} alt="logo"/>
                    </Link>
                    <hr className="division"/>
                    <div className="pestanas fl">
                        <Link to="/nosotros-fixter">
                            <p>Nosotros</p>
                        </Link>
                        <Link to="capacitacion-fixter">
                            <p>Capacitación</p>
                        </Link>
                        <a href="">
                            <p>Blog</p>
                        </a>
                        <Link to="contacto-fixter">
                            <p>Contacto</p>
                        </Link>
                    </div>
                </div>
                <div className="redes fl">
                    <a href="https://www.facebook.com/Fixterorg-1333568760053068/" aria-label="Facebook" target={"blank"}>
                        <FontAwesome name="facebook"/>
                    </a>
                    <a href="https://wa.me/5217714348038" aria-label="Whats app" target={"blank"}>
                        <FontAwesome name="whatsapp"/>
                    </a>
                    <a href="https://www.linkedin.com/company/28982942/admin/" aria-label="Linkedin" target={"blank"}>
                        <FontAwesome name="linkedin"/>
                    </a>
                    <a href="mailto:brenda@fixter.org" aria-label="Mail" >
                        <FontAwesome name="envelope"/>
                    </a>


                </div>
            </div>
        );
    }
}

export default Nav;