import React, { Component } from 'react';
import './Projects.css';

class Arango extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <section className="project">
                <div className="back">
                    <div className="size">
                        <div className="box-projects">
                            <div className="card-p uno">

                            </div>
                            <div className="card-p dos">

                            </div>
                            <div className="card-p tres">

                            </div>
                            <div className="card-p cuatro">

                            </div>
                            <div className="card-p cinco">

                            </div>
                            <div className="card-p seis">

                            </div>
                            <div className="card-p siete">

                            </div>
                            <div className="card-p ocho">

                            </div>
                            <div className="card-p nueve">

                            </div>
                        </div>
                        <div className="box-text">
                            <h2>Arango Restaurante</h2>
                            <p>Trabajamos con Arango Restaurante en el diseño, desarollo, testing y UX/UI research
                                para el desarrollo de su sitio web.
                                Utilizamos ReactJs y Firebase como Stack de desarrollo. </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Arango;