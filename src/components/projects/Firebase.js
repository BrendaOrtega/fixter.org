import React, { Component } from 'react';
import './Projects.css';

class Firebase extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <section className="project">
                <div className="back">
                    <div className="size">
                        <div className="box-projects">
                            <div className="card-p vdos">

                            </div>
                            <div className="card-p vtres">

                            </div>
                            <div className="card-p vcuatro">

                            </div>
                            <div className="card-p vcinco">

                            </div>
                            <div className="card-p vseis">

                            </div>
                            <div className="card-p vsiete">

                            </div>
                            <div className="card-p vocho">

                            </div>
                            <div className="card-p vnueve">

                            </div>
                            <div className="card-p treinta">

                            </div>
                        </div>
                        <div className="box-text">
                            <h2>Firebase Learning Platform</h2>
                            <p>Trabajamos con FirebaseMx en el diseño, desarollo, testing y UX/UI research
                                de una plataforma de e-Learning.
                                Utilizamos ReactJs y Firebase como Stack de desarrollo. </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Firebase;