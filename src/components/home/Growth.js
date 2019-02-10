import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import milenio from '../../assets/milenio-01.svg';
import gob from '../../assets/not1-01.svg';
import independiente from '../../assets/indep-01.svg';
import hgo from '../../assets/hgo-01.svg';


class Growth extends Component {

    render() {
        return (
            <div className="growth">
                <h2>Lo que dicen de nosotros</h2>
                <div className="medios">
                    <img className="img" src={milenio} alt=""/>
                    <img className="img" src={gob} alt=""/>
                    <img className="img" src={independiente} alt=""/>
                    <img style={{borderBottom:"1px solid #ccc", width:"250px"}} src={hgo} alt=""/>
                    <img className="tp" src={milenio} alt=""/>
                    <img className="tp" src={gob} alt=""/>
                    <img className="tp" src={independiente} alt=""/>
                    <img style={{width:"250px"}} src={hgo} alt=""/>

                </div>
            </div>
        );
    }
}

export default Growth;