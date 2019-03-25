import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class Projects extends Component {

    render() {
        return (
            <div className="projects">
                <h2>Proyectos</h2>
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
                        <Link to="/concamin">
                            <div className="cover">
                                <div>
                                    <h3>CONCAMIN</h3>
                                    <FontAwesome name="braille"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="blog">
                        <Link to="/blog">
                            <div className="cover">
                                <div>
                                    <h3>BLOG</h3>
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
                        <div className="cover">
                            <div>
                                <h3>ARTESANÍAS <br/> HIDALGO</h3>
                                <FontAwesome name="braille"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Projects;
