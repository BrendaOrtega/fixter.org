import React, { Component } from 'react';
import './Home.css';

class Growth extends Component {

    render() {
        return (
            <section className="growth">

                <h2>Lo que dicen de nosotros</h2>
                <div className="medios web">
                    <a className="line" href="https://www.milenio.com/opinion/varios-autores/ciencia-tecnologia/se-el-nerd" target={"blank"} rel="noopener noreferrer">
                        <img className="img" src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fmilenio-01.svg?alt=media&token=b9081365-2b53-437d-957d-d7f3ffab3c33" alt="milenio"/>
                    </a>
                    <a className="line" href="https://www.gob.mx/se/prensa/otorgan-premio-a-los-ganadores-del-reto-crowfunding-reto-zapopan" target={"blank"} rel="noopener noreferrer">
                        <img className="img" src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fnot1-01.svg?alt=media&token=24cc0942-6f85-494b-98d5-3fcb4dd4a8ab" alt="gob"/>
                    </a>
                    <a className="line" href="https://www.elindependientedehidalgo.com.mx/archivo/2016/04/324454" target={"blank"} rel="noopener noreferrer">
                        <img className="img" src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Findep-01.svg?alt=media&token=8c9f1c78-5381-4657-b356-74120e2d3224" alt="independiente"/>
                    </a>
                    <a href="http://comunicacion.hidalgo.gob.mx/?p=26428" target={"blank"} rel="noopener noreferrer">
                        <img style={{ width:"250px"}} src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fhgo-01.svg?alt=media&token=76801941-5ec3-4287-9c25-68978fe831e9" alt="hgo"/>
                    </a>



                </div>
                <div className="uk-position-relative uk-visible-toggle uk-light movil" tabIndex="-1" uk-slider="center: true, autoplay:true">

                    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <a  href="https://www.milenio.com/opinion/varios-autores/ciencia-tecnologia/se-el-nerd" target={"blank"} rel="noopener noreferrer">
                                    <img className="img" src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fmilenio-01.svg?alt=media&token=b9081365-2b53-437d-957d-d7f3ffab3c33" alt="milenio"/>
                                </a>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <a  href="https://www.gob.mx/se/prensa/otorgan-premio-a-los-ganadores-del-reto-crowfunding-reto-zapopan" target={"blank"} rel="noopener noreferrer">
                                    <img className="img" src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fnot1-01.svg?alt=media&token=24cc0942-6f85-494b-98d5-3fcb4dd4a8ab" alt="gpb"/>
                                </a>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div>
                                <a  href="https://www.elindependientedehidalgo.com.mx/archivo/2016/04/324454" target={"blank"} rel="noopener noreferrer">
                                    <img className="img" src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Findep-01.svg?alt=media&token=8c9f1c78-5381-4657-b356-74120e2d3224" alt="independiente"/>
                                </a>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <a href="http://www.impuestum.com/noticias/23/Premian+a+empresa+por+plataforma+crowfunding" target={"blank"} rel="noopener noreferrer">
                                    <img className="img" src="https://impuestumcontadores.com/santafe/wp-content/uploads/2015/10/cropped-icono.png" alt="zapopan"/>
                                </a>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <a href="https://www.milenio.com/opinion/varios-autores/ciencia-tecnologia/fixter-camp-1" target={"blank"} rel="noopener noreferrer">
                                    <img className="img" src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fmilenio-01.svg?alt=media&token=b9081365-2b53-437d-957d-d7f3ffab3c33" alt="milenio"/>
                                </a>
                            </div>
                        </li>


                    </ul>

                    <a aria-label="previo" className="uk-position-center-left uk-position-small uk-hidden-hover" style={{color:"black"}} href="/"
                       uk-slidenav-previous uk-slider-item="previous"><p style={{display:"none"}}>Preview</p></a>
                    <a aria-label="next" className="uk-position-center-right uk-position-small uk-hidden-hover" href="/" uk-slidenav-next
                       uk-slider-item="next"><p style={{display:"none"}}>Next</p></a>

                </div>

            </section>

        );
    }
}

export default Growth;