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
                <div className="medios web">
                    <img className="img" src={milenio} alt=""/>
                    <img className="img" src={gob} alt=""/>
                    <img className="img" src={independiente} alt=""/>
                    <img style={{borderBottom:"1px solid #ccc", width:"250px"}} src={hgo} alt=""/>
                    <img className="tp" src={milenio} alt=""/>
                    <img className="tp" src={gob} alt=""/>
                    <img className="tp" src={independiente} alt=""/>
                    <img style={{width:"250px"}} src={hgo} alt=""/>

                </div>
                <div className="uk-position-relative uk-visible-toggle uk-light movil" tabIndex="-1" uk-slider="center: true, autoplay:true">

                    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <img className="img" src={milenio} alt=""/>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <img className="img" src={gob} alt=""/>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div>
                                <img className="img" src={independiente} alt=""/>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <img className="img" src={milenio} alt=""/>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <img className="img" src={gob} alt=""/>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div>
                                <img className="img" src={independiente} alt=""/>
                            </div>
                        </li>

                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" style={{color:"black"}} href="#"
                       uk-slidenav-previous uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                       uk-slider-item="next"></a>

                </div>

            </div>

        );
    }
}

export default Growth;