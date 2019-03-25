import React, { Component } from 'react';
import './Projects.css';

class Allende extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="project">
                <div className="back">
                    <div className="size">
                        <div className="box-projects">
                            <div className="card-p diez">

                            </div>
                            <div className="card-p once">

                            </div>
                            <div className="card-p doce">

                            </div>
                        </div>
                        <div className="box-text">
                            <h2>Cervecería Allende </h2>
                            <p>Trabajamos con Cervecería Allende en el diseño, desarollo, testing y UX/UI research
                                de un sistema de administración (CRM).
                                Utilizamos ReactJs, NodeJs, MongoDB, Express y React Native como Stack de desarrollo. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Allende;