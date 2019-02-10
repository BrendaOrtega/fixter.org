import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';

class About extends Component {

    render() {
        return (
            <div className="about">
                <h2>Creating beautiful interfaces for web and mobile</h2>
                <p>I'm a independent Designer from Belgium and I believe in making the complex simple, beautiful and a little fun. I create, develop, and improve user experiences to increase conversions and improve your business.
                </p>
                <span className="info">Find out more about me → </span>
            </div>
        );
    }
}

export default About;