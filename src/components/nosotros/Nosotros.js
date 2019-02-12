import React, { Component } from 'react';
import './Nosotros.css';
import FontAwesome from 'react-fontawesome';

class Nosotros extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <div className="nosotros">

                </div>
                <div className="ns">
                    <h2>¿Qué es Fixter?</h2>
                    <p>Fixter es una casa de desarrollo fundada en Pachuca, Hidalgo, en 2016, con el objetivo de
                        ayudar a los emprendedores y startups a tener mejores productos digitales
                        que cumplan sus expectativas y cubran sus necesidades.

                    </p>
                    <p>En Fixter buscamos ofrecer productos digitales de alta calidad, que cubran
                    altos estándares de calidad y eficiencia. Por lo que somos amantes de la innovación y la mejora continúa.
                    </p>


                    <p>En Fixter tenemos una ideología: </p>
                    <blockquote>"El software nunca esta terminado"</blockquote>
                    <p>Nuestra metodología de desarrollo nos permite crear software modularizado y funcional, lo que permite
                        a nuestros clientes escalar de forma más efectiva sin desechar el producto, solo agregar componentes.
                    </p>
                    <hr/>
                    <h2>Equipo</h2>
                    <div className="fl-team">
                        <div className="box_team">
                            <div className="circle brenda">

                            </div>
                            <h4>Brenda Ortega</h4>
                            <p>Co-Founder & CEO</p>

                            <FontAwesome name="facebook-square" />
                            <FontAwesome name="linkedin"/>
                        </div>
                        <div className="box_team">
                            <div className="circle bliss">

                            </div>
                            <h4>Héctor Bliss</h4>
                            <p>Co-Founder & CTO</p>

                            <FontAwesome name="facebook-square" />
                            <FontAwesome name="linkedin"/>
                        </div>
                        <div className="box_team">
                            <div className="circle oscar">

                            </div>
                            <h4>Oscar Villeda</h4>
                            <p>CMO</p>

                            <FontAwesome name="facebook-square" />
                            <FontAwesome name="linkedin"/>
                        </div>
                        <div className="box_team">
                            <div className="circle david">

                            </div>
                            <h4>David Zavala</h4>
                            <p>FullStack Developer</p>

                            <FontAwesome name="facebook-square" />
                            <FontAwesome name="linkedin"/>
                        </div>
                        <div className="box_team">
                            <div className="circle os">

                            </div>
                            <h4>Oswaldo Martinez</h4>
                            <p>FullStack Developer</p>

                            <FontAwesome name="facebook-square" />
                            <FontAwesome name="linkedin"/>
                        </div>
                    </div>
                    <hr/>
                    <h2>Algunos de nuestros clientes</h2>
                    <div className="fl clientes">
                        <img src="http://www.retozapopan.com.mx/img/LogoRetoZapopan.svg" alt="reto-zapopan"/>
                        <img src="https://seeklogo.com/images/G/gobierno-del-estado-de-hidalgo-logo-83001C1D96-seeklogo.com.png" alt="gobierno-hidalgo"/>
                        <img src="https://arangorestaurante.com/static/media/arango_logo.9209e5d7.png" alt="arango"/>
                        <img src="http://concamin.mx/wp-content/uploads/2015/08/header-logo-concamin.png" alt="concamin"/>
                        <img src="http://cerveceriaallende.mx/wp-content/uploads/2015/05/logo.png" alt="allende"/>
                        <img src="https://firebasemx.com/static/media/firemx.018fbe39.png" alt="firebase"/></div>
                </div>
            </div>
        );
    }
}

export default Nosotros;