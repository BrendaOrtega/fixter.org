import React, { Component } from 'react';
import './Projects.css';

class Suki extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="project">
                <div className="back">
                    <div className="size">
                        <div className="box-projects">
                            <div className="card-p trece">

                            </div>
                            <div className="card-p catorce">

                            </div>
                            <div className="card-p quince">

                            </div>
                            <div className="card-p dizseis">

                            </div>
                            <div className="card-p dizsiete">

                            </div>
                            <div className="card-p dizocho">

                            </div>
                            <div className="card-p diznueve">

                            </div>
                            <div className="card-p veinte">

                            </div>
                            <div className="card-p vuno">

                            </div>
                        </div>
                        <div className="box-text">
                            <h2>Blog</h2>
                            <p>Trabajamos en el diseño y desarollo de blogs personales o empresariales.
                                Utilizamos ReactJs y Firebase como Stack de desarrollo. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Suki;