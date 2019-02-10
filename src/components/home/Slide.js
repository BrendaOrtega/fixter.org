import React, { Component } from 'react';
import './Home.css';


class Slide extends Component {

    render() {
        return (
            <div className="portada">
                <div className="box-slogan">
                    <div>
                        <h2 className="slogan">Impulsa el crecimiento de tu empresa con nosotros</h2>
                        <button className="btn-c">Cotizar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;