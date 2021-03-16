import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import TagT from "./TagT";
const img = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FCOCOYO.png?alt=media&token=03dbce9c-d3ed-4185-811d-4e3c9b605ef4"
const img2 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fzenda.png?alt=media&token=6c069e72-2b03-45cf-bb08-31dfc6b03f89"
const img3 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FPANEL3.png?alt=media&token=365a6206-95fa-4762-99b2-be1565fe6129"


class Projects extends Component {

    render() {
        return (
            <div>
            <section className="projects-section">
                <h2>Algunos de nuestros proyectos</h2>
                <div className="proyecto">
                    <img src={img}/>
                    <div className="proyecto-info">
                        <h3>Lomas de Cocoyoc</h3>
                        <p>Sistema de Administración interna para administración de provedores, registros, clientes.</p>
                        <TagT text="User Research"/> <TagT text="UI Design"/> <TagT text="Frontend"/> <TagT text="Backend"/> <TagT text="API's"/>
                    </div>
                </div>
                <div className="proyecto">
                    <div className="proyecto-info">
                        <h3>Zendal.la</h3>
                        <p>Plataforma Web para la adquisición de seguros de vida y/ seguros de auto.</p>
                        <TagT text="Frontend"/> 
                    </div>
                    <img src={img2}/>

                </div>
                <div className="proyecto">
                    <img src={img3}/>
                    <div className="proyecto-info">
                        <h3>Collectum Datos Panel</h3>
                        <p>Sistema de Administración interna</p>
                        <TagT text="User Research"/> <TagT text="UI Design"/> <TagT text="Frontend"/> <TagT text="Backend"/><TagT text="Google Analytics"/> 
                    </div>
                </div>
      
              
            </section>
            {/* <section className="projects">
                <h2>Algunos de nuestros proyectos</h2>
                <div className="projects-fl">
                    <div className="arango">
                        <Link to="/arango">
                            <div className="cover">
                                <div>
                                    <h3>ARANGO <br/> RESTAURANTE</h3>
                                    <FontAwesome name="braille"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="allende">
                        <Link to="/allende">
                            <div className="cover">
                                <div>
                                    <h3>CERVECERÍA <br/> ALLENDE</h3>
                                    <FontAwesome name="braille"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="concamin">
                        <Link to="/blog">
                            <div className="cover">
                                <div>
                                    <h3>BLOG</h3>
                                    <FontAwesome name="braille"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="blog">
                        <Link to="/horizonte">
                            <div className="cover">
                                <div>
                                    <h3>HORIZONTE</h3>
                                    <FontAwesome name="braille"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="firebase ">
                        <Link to="/fire">
                            <div className="cover">
                                <div>
                                    <h3>FIREBASE <br/> PLATFORM</h3>
                                    <FontAwesome name="braille"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="artesanias">
                        <Link to="/zendala">
                            <div className="cover">
                                <div>
                                    <h3>ZENDA.LA</h3>
                                    <FontAwesome name="braille"/>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </section> */}
            </div>
        );
    }
}

export default Projects;
