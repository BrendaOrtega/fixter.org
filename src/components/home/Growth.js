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
                    <a className="line" href="https://www.milenio.com/opinion/varios-autores/ciencia-tecnologia/se-el-nerd" target="_blank">
                        <img className="img" src={milenio} alt="milenio"/>
                    </a>
                    <a className="line" href="https://www.gob.mx/se/prensa/otorgan-premio-a-los-ganadores-del-reto-crowfunding-reto-zapopan" target="_blank">
                        <img className="img" src={gob} alt="gob"/>
                    </a>
                    <a className="line" href="https://www.elindependientedehidalgo.com.mx/archivo/2016/04/324454" target="_blank">
                        <img className="img" src={independiente} alt="independiente"/>
                    </a>
                    <a href="http://comunicacion.hidalgo.gob.mx/?p=26428" target="_blank">
                        <img style={{borderBottom:"1px solid #ccc", width:"250px"}} src={hgo} alt=""/>
                    </a>
                    <a className="lin" href="http://www.impuestum.com/noticias/23/Premian+a+empresa+por+plataforma+crowfunding" target="_blank">
                        <img className="img" src="https://impuestumcontadores.com/santafe/wp-content/uploads/2015/10/cropped-icono.png" alt="milenio"/>
                    </a>
                    <a className="lin" href="https://www.gob.mx/se/prensa/otorgan-premio-a-los-ganadores-del-reto-crowfunding-reto-zapopan" target="_blank">
                        <img className="img" src={gob} alt=""/>
                    </a>
                    <a className="lin" href="https://www.elindependientedehidalgo.com.mx/archivo/2016/04/324454" target="_blank">
                        <img className="img" src={independiente} alt=""/>
                    </a>
                    <a href="http://comunicacion.hidalgo.gob.mx/?p=26428" target="_blank">
                        <img style={{ width:"250px"}} src={hgo} alt=""/>
                    </a>


                </div>
                <div className="uk-position-relative uk-visible-toggle uk-light movil" tabIndex="-1" uk-slider="center: true, autoplay:true">

                    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <a  href="https://www.milenio.com/opinion/varios-autores/ciencia-tecnologia/se-el-nerd" target="_blank">
                                    <img className="img" src={milenio} alt=""/>
                                </a>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <a  href="https://www.gob.mx/se/prensa/otorgan-premio-a-los-ganadores-del-reto-crowfunding-reto-zapopan" target="_blank">
                                    <img className="img" src={gob} alt=""/>
                                </a>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div>
                                <a  href="https://www.elindependientedehidalgo.com.mx/archivo/2016/04/324454" target="_blank">
                                    <img className="img" src={independiente} alt=""/>
                                </a>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <a href="http://www.impuestum.com/noticias/23/Premian+a+empresa+por+plataforma+crowfunding" target="_blank">
                                    <img className="img" src="https://impuestumcontadores.com/santafe/wp-content/uploads/2015/10/cropped-icono.png" alt=""/>
                                </a>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <a href="https://www.milenio.com/opinion/varios-autores/ciencia-tecnologia/fixter-camp-1" target="_blank">
                                    <img className="img" src={milenio} alt=""/>
                                </a>
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