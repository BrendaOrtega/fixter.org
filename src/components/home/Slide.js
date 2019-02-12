import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

class Slide extends Component {

    render() {
        return (
            <div className="portada">
                <div className="box-slogan">
                    <div>
                        <h2 className="slogan">Impulsa el crecimiento de tu empresa con nosotros</h2>
                        <Link to="/contacto">
                            <button className="btn-c">Cotizar</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;