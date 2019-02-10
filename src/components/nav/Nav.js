import React, { Component } from 'react';
import './Nav.css';
import FontAwesome from 'react-fontawesome';

class Nav extends Component {

    render() {
        return (
            <div className="navbar">
                <div className="menu fl">
                    <h1>A diferent design</h1>
                    <hr className="division"/>
                    <div className="pestanas fl">
                        <p>Nosotros</p>
                        <p>Capacitación</p>
                        <p>Contacto</p>
                    </div>
                </div>
                <div className="redes fl">
                    <a href="https://www.facebook.com/Fixterorg-1333568760053068/" target="_blank">
                        <FontAwesome name="facebook"/>
                    </a>
                    <a href="https://wa.me/5217714348038" target="_blank">
                        <FontAwesome name="whatsapp"/>
                    </a>
                    <a href="https://www.linkedin.com/company/28982942/admin/" target="_blank">
                        <FontAwesome name="linkedin"/>
                    </a>
                    <a href="mailto:brenda@fixter.org" >
                        <FontAwesome name="envelope"/>
                    </a>


                </div>
            </div>
        );
    }
}

export default Nav;