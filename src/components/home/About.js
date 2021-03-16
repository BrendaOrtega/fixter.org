import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
const img = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FRecurso%201.png?alt=media&token=76d5aab3-3335-4754-944d-499dd9205a1b"


class About extends Component {

    render() {
        return (
            <section className="ser_box">
                {/* <div>
                    <img src={img}/>
                </div>
                <div>
                    <h2></h2>
                </div> */}

{/* 
            <div className="about">
                <h2>Soluciones Tecnológicas</h2>
                <p>
                Somos amantes de la innovación y la mejora continúa por lo que ofrecemos un servicio completo en cuanto
                       a tecnología se refiere:
                </p> */}
                {/* <Link to="/nosotros-fixter">
                    <span className="info">Saber más de Fixter → </span>
                </Link>
            </div> */} 
            </section>
        );
    }
}

export default About;