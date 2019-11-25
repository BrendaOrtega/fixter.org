import React, { Component } from 'react';
import './Nosotros.css';
import FontAwesome from 'react-fontawesome';

class Nosotros extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <section>
                <meta
                    name="description"
                    content="Impulsa el crecimiento de tu empresa con nosotros. Desarrollo de Software de forma ágile, rápida y escalable."
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
                    <p>Fixter es una casa de desarrollo fundada en Hidalgo, en el 2016, con el objetivo de
                        ayudar a los emprendedores y startups a tener mejores productos digitales,
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FLogoRetoZapopan.svg?alt=media&token=b1c496ec-0ad7-4df2-b68e-307e346ddd02" alt="reto-zapopan"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fgobierno-del-estado-de-hidalgo-logo-83001C1D96-seeklogo.com.png?alt=media&token=5bee7633-5d3f-4cc3-a2e6-96aee46627da" alt="gobierno-hidalgo"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Farango_logo.9209e5d7.png?alt=media&token=b959315e-2ac0-4645-a7f8-3b1eabfef786" alt="arango"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fheader-logo-concamin.png?alt=media&token=e954bccc-8857-4bcc-8dba-22b40375e6bf" alt="concamin"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FGroup.png?alt=media&token=e79d81df-b432-4c6c-86f8-f7fa0c104def" alt="allende"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Flogo_horizontal.png?alt=media&token=e7a57bf9-5046-4c76-8cbe-60acd3f19796" alt="horizonte"/></div>

                <div className="uk-position-relative uk-visible-toggle uk-light movil" tabIndex="-1" uk-slider="center: true, autoplay:true">

                    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                        <li className="uk-width-3-4">
                            <div className="uk-panel" style={{textAlign:"center"}}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FLogoRetoZapopan.svg?alt=media&token=b1c496ec-0ad7-4df2-b68e-307e346ddd02" alt="reto-zapopan"/>

                            </div>
                        </li>
                        <li className="uk-width-3-4"  style={{textAlign:"center"}}>
                            <div className="uk-panel">
                                <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fgobierno-del-estado-de-hidalgo-logo-83001C1D96-seeklogo.com.png?alt=media&token=5bee7633-5d3f-4cc3-a2e6-96aee46627da" alt="gobierno-hidalgo"/>

                            </div>
                        </li>
                        <li className="uk-width-3-4"  style={{textAlign:"center"}}>
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Farango_logo.9209e5d7.png?alt=media&token=b959315e-2ac0-4645-a7f8-3b1eabfef786" alt="arango"/>

                            </div>
                        </li>
                        <li className="uk-width-3-4"  style={{textAlign:"center"}}>
                            <div className="uk-panel">
                                <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fheader-logo-concamin.png?alt=media&token=e954bccc-8857-4bcc-8dba-22b40375e6bf" alt="concamin"/>

                            </div>
                        </li>
                        <li className="uk-width-3-4"  style={{textAlign:"center"}}>
                            <div className="uk-panel">
                                <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FGroup.png?alt=media&token=e79d81df-b432-4c6c-86f8-f7fa0c104def" alt="allende"/>
                            </div>
                        </li>
                        <li className="uk-width-3-4"  style={{textAlign:"center"}}>
                            <div className="uk-panel">
                                <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Flogo_horizontal.png?alt=media&token=e7a57bf9-5046-4c76-8cbe-60acd3f19796" alt="horizonte"/>
                            </div>
                        </li>
                    </ul>
                    <a aria-label="previo"  className="uk-position-center-left uk-position-small uk-hidden-hover" style={{color:"black"}} href="/"
                       uk-slidenav-previous uk-slider-item="previous" > <p style={{display:"none"}}>Preview</p></a>
                    <a aria-label="next"  className="uk-position-center-right uk-position-small uk-hidden-hover" href="/" uk-slidenav-next
                       uk-slider-item="next"> <p style={{display:"none"}}>Next</p></a>
                </div>
                </div></div>
            </section>
        );
    }
}

export default Nosotros;