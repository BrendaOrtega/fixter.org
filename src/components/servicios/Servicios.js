import React, { Component } from 'react';
import './Servicios.css';
import FontAwesome from 'react-fontawesome';
import {Link} from "react-router-dom";

class Servicios extends Component {
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
                    content="software, startups, tecnología, desarrollo, crecimiento, página web, servicios de desarrollo, servicios, web, ecommerce, wordpress"
                />
                <title>Servicios | Fixter</title>
                <div className="servicios">

                </div>
                <div className="general-description">
                    <div>
                        <h2>Soluciones personalizadas para tu negocio</h2>
                        <p>Desde 2016, ofrecemos a nuestros clientes el desarrollo de aplicaciones web y móviles a la medida
                        siguiendo estrictos estándares de calidad para lograr experiencias digitales atractivas. Cada una de
                            nuestras aplicaciones son escalables, eficientes y fáciles de usar. </p>
                        <p>
                            Trabajamos arduamente para desarrollar aplicaciones a la medida que cubran las necesidades
                            de nuestros clientes, seguimos metodologías de desarrollo como SCRUM que se adapten a nuestro proceso de
                            desarrollo, desde el diagnóstico y diseño, hasta el desarrollo.
                        </p>
                    </div>
                    <div className="box-img-general">
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fexample.svg?alt=media&token=a672870f-0278-44ca-ad77-49a03474a646" alt=""/>
                    </div>
                </div>
                <div className="services-box" >
                    <div className="cortina">
                    </div>
                    <div className="slide-services">
                    <div uk-slider="center: false">

                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                            <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                                <li>
                                    <div className="card-service">
                                        <div className="uk-card-media-top" style={{float:"right"}}>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fdev.png?alt=media&token=304af209-ae23-4c3b-93ec-77ac1c534542" alt=""/>
                                        </div>
                                        <br/>
                                        <div className="uk-card-body">
                                            <h3>Desarrollo Web</h3>
                                            <p>Ayudamos a nustros clientes a desarrollar productos digitales para que expandan su mercado.
                                                Llevamos a cabo un proceso de acompanamiento, desde el proceso de ideación y diseño, hasta el desarrollo, en donde
                                                construimos el backend y la interfaz para crear una nueva experiencia.

                                            </p>
                                            <Link to="/contacto-fixter">
                                                <span className="info">Me interesa → </span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="card-service">
                                        <div className="uk-card-media-top" style={{float:"right"}}>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fapps.png?alt=media&token=5bf76c59-2690-496a-8236-f82285e00a34" alt=""/>
                                        </div>
                                        <br/>
                                        <div className="uk-card-body">
                                            <h3>Desarrollo de Aplicaciones móviles</h3>
                                            <p>Construimos de la mano de nuestros clientes aplicaciones móviles para Android y IOS,
                                                buscando la solución más asequible a sus necesidades. Entregando así productos usables, útiles
                                                y eficientes para los usuarios finales.

                                            </p>
                                            <br/>
                                            <br/>
                                            <Link to="/contacto-fixter">
                                                <span className="info">Me interesa → </span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="card-service">
                                        <div className="uk-card-media-top" style={{float:"right"}}>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fdesign.png?alt=media&token=e0b53d5d-bd1e-4ff1-b541-b7a92fc9a5d5" alt=""/>
                                        </div>
                                        <br/>
                                        <div className="uk-card-body">
                                            <h3>Diseño web</h3>
                                            <p>Si lo que buscas es un aliado estrategico que colabore contigo en el diseño de tu sitio o sistema web,
                                                somos el candidato ideal. Nuestra experiencia en el área nos permite disenar interfaces de forma rápida
                                                sin perder de vista las reglas de usabilidad, accesibilidad y experiencia de usuario.
                                            </p>
                                            <br/>
                                            <Link to="/contacto-fixter">
                                                <span className="info">Me interesa → </span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="card-service">
                                        <div className="uk-card-media-top" style={{float:"right"}}>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fpubli.png?alt=media&token=2fd5b18f-c4d9-4355-95ea-2981733d2f97" alt=""/>
                                        </div>
                                        <br/>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Analytics y publicidad</h3>
                                            <p>¿Quieres mejorar la eficiencia de tus campañas publicitarias y conocer mejor a tus usuarios?
                                                Te ayudamos a implementar Google Analytics y Facebook Píxel, dar de alta tu empresa en Google My Business,
                                                además de crear tu plan de medios digitales.

                                            </p>
                                            <br/>
                                            <Link to="/contacto-fixter">
                                                <span className="info">Me interesa → </span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="card-service">
                                        <div className="uk-card-media-top" style={{float:"right"}}>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fcap.png?alt=media&token=78ddc19e-d267-459c-973e-269bc30f2ff0" alt=""/>
                                        </div>
                                        <br/>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Consultoría </h3>
                                            <p>¿Tienes una startup o empresa que necesita asesoriamiento en TI? Como parte de nuestros servicios,
                                                ofrecemos una evaluación tecnológica exhaustiva de tu empresa y te proponemos herramientas a implementar o desarrollar
                                                y como hacerlo de la forma más eficiente.
                                            </p>
                                            <br/>
                                            <Link to="/contacto-fixter">
                                                <span className="info">Me interesa → </span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>

                            </ul>

                            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#"
                               uk-slidenav-previous uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#"
                               uk-slidenav-next uk-slider-item="next"></a>

                        </div>

                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

                    </div></div>
                </div>
                <div className="invite">

                    <h2>Soluciones Tecnológicas</h2>
                        <p>
                            ¿Buscas un desarrollo más específico? ¿Cómo videojuegos, recorridos virtuales, data science, o machine learning?
                            No te preocupes, ponte en contacto con nosotros, te aseguro que tenemos una propuesta para ti.
                        </p>
                        <Link to="/contacto-fixter">
                            <span className="info">Contactar → </span>
                        </Link>

                </div>
            </section>
        );
    }
}

export default Servicios;