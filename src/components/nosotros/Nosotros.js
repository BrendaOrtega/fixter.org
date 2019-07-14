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
                <meta
                    name="description"
                    content="Software development"
                />
                <meta
                    name="keywords"
                    content="software, startups, tecnología, desarrollo, crecimiento, página web"
                />
                <title>Sobre Fixter | Fixter</title>
                <div className="nosotros">

                </div>
                <div className="ns">
                    <h2>¿Qué es Fixter?</h2>
                    <p>Fixter es una casa de desarrollo fundada en Pachuca, Hidalgo, en 2016, con el objetivo de
                        ayudar a los emprendedores y startups a tener mejores productos digitales
                        que cumplan sus expectativas y cubran sus necesidades.

                    </p>
                    <p>En Fixter buscamos ofrecer productos digitales de alto nivel, que cubran
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
                            <a href="https://www.facebook.com/brenda.ortega.7121">
                                <FontAwesome name="facebook-square" />
                            </a>
                            <a href="https://www.linkedin.com/in/brenda-ort/" target="blank">
                                <FontAwesome name="linkedin"/>
                            </a>
                        </div>
                        <div className="box_team">
                            <div className="circle bliss">

                            </div>
                            <h4>Héctor Bliss</h4>
                            <p>Co-Founder & CTO</p>
                            <a href="https://www.facebook.com/hector.bliss">
                                <FontAwesome name="facebook-square" />
                            </a>
                            <a href="https://www.linkedin.com/in/hectorbliss/" target="blank">
                                <FontAwesome name="linkedin"/>
                            </a>
                        </div>
                        <div className="box_team">
                            <div className="circle oscar">

                            </div>
                            <h4>Oscar Villeda</h4>
                            <p>CMO</p>
                                <FontAwesome name="facebook-square" />
                            <a href="https://www.linkedin.com/in/hectorbliss/" target="blank">
                                <FontAwesome name="linkedin"/>
                            </a>
                        </div>
                        <div className="box_team">
                            <div className="circle david">

                            </div>
                            <h4>David Zavala</h4>
                            <p>FullStack Developer</p>
                            <a href="https://www.facebook.com/david.pzmck">
                                <FontAwesome name="facebook-square" />
                            </a>
                            <a href="https://www.linkedin.com/in/david-zavala-bartolome/" target="blank">
                                <FontAwesome name="linkedin"/>
                            </a>
                        </div>
                        <div className="box_team">
                            <div className="circle os">

                            </div>
                            <h4>Oswaldo Martinez</h4>
                            <p>FullStack Developer</p>
                            <a href="https://www.facebook.com/oswwaldom">
                                <FontAwesome name="facebook-square" />
                            </a>
                            <a href="https://www.linkedin.com/in/oswaldinho24k/" target="blank">
                                <FontAwesome name="linkedin"/>
                            </a>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <h2>Algunos de nuestros clientes</h2>
                    <div className=" clientes ">
                        <div className="nn">
                        <img src="http://www.retozapopan.com.mx/img/LogoRetoZapopan.svg" alt="reto-zapopan"/>
                        <img src="https://seeklogo.com/images/G/gobierno-del-estado-de-hidalgo-logo-83001C1D96-seeklogo.com.png" alt="gobierno-hidalgo"/>
                        <img src="https://arangorestaurante.com/static/media/arango_logo.9209e5d7.png" alt="arango"/>
                        <img src="http://concamin.mx/wp-content/uploads/2015/08/header-logo-concamin.png" alt="concamin"/>
                        <img src="http://cerveceriaallende.mx/wp-content/uploads/2015/05/logo.png" alt="allende"/>
                        <img src="https://firebasemx.com/static/media/firemx.018fbe39.png" alt="firebase"/></div>

                <div className="uk-position-relative uk-visible-toggle uk-light movil" tabIndex="-1" uk-slider="center: true, autoplay:true">

                    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <img src="http://www.retozapopan.com.mx/img/LogoRetoZapopan.svg" alt="reto-zapopan"/>

                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <img src="https://seeklogo.com/images/G/gobierno-del-estado-de-hidalgo-logo-83001C1D96-seeklogo.com.png" alt="gobierno-hidalgo"/>

                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div>
                                <img src="https://arangorestaurante.com/static/media/arango_logo.9209e5d7.png" alt="arango"/>

                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <img src="http://concamin.mx/wp-content/uploads/2015/08/header-logo-concamin.png" alt="concamin"/>

                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <img src="http://cerveceriaallende.mx/wp-content/uploads/2015/05/logo.png" alt="allende"/>
                            </div>
                        </li>
                    </ul>
                    <a aria-label="previo"  className="uk-position-center-left uk-position-small uk-hidden-hover" style={{color:"black"}} href="/"
                       uk-slidenav-previous uk-slider-item="previous"></a>
                    <a aria-label="next"  className="uk-position-center-right uk-position-small uk-hidden-hover" href="/" uk-slidenav-next
                       uk-slider-item="next"></a>
                </div>
                </div></div>
            </div>
        );
    }
}

export default Nosotros;