import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';

class Banner extends Component {

    render() {
        return (
            <div className="banner">
                <div className="cover-orange">
                    <div>
                        <h3>We have the expertise to build products and
                            new capabilities from the ground up
                        </h3>
                        <p>Wizeline source the expertise you need, including initial discovery, ideation, roadmapping,
                            design, and development.</p>
                        <br/>
                        <button className="btn-c">Cotizar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;