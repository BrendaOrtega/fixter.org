
import React from 'react';
import './Contacto.css';

export const Contacto = ({onSave, errors, onChangeMessage, name, email, tel, msj, software, web, apps, host }) => {

    return (
        <div >
            <div className="contacto">

            </div>
            <div className="ns">
                <h2>
                    Contáctanos
                </h2>
                <p>¿Tienes alguna duda? ¿Quieres cotizar un producto? Completa el formulario</p>
                <div className="container">
                        <div className="map">
                            <iframe title="GoogleMaps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.7137344550645!2d-99.16168661192029!3d19.418672699176746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff64fd93e671%3A0xc40af0559e2c5381!2sFixter+Software+Development!5e0!3m2!1ses-419!2smx!4v1549991728751"
                                frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                        </div>
                        <div className="form">
                            <form method="post" name="sentMessage" action="" onSubmit={onSave}>
                                <div>
                                    <div className="inp">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <input value={name} onChange={onChangeMessage} type="text" name="nombre"  placeholder="Nombre" id="name" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                                        </div>
                                </div>
                                <div >
                                    <div className="inp">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <input value={email} onChange={onChangeMessage} type="email" name="email"  placeholder="Email" id="email" required data-validation-required-message="Porfavor ingresa tu e-mail"/>
                                        <p className="help-block text-danger"></p></div>
                                </div>
                                <div >
                                    <div className="inp">
                                        <i className="fa fa-phone" aria-hidden="true"></i>

                                        <input value={tel} onChange={onChangeMessage}  type="tel" name="tel" placeholder="Teléfono" id="phone" required data-validation-required-message="Porfavor ingresa tu numero telefonico"/>
                                        <p className="help-block text-danger"></p></div>
                                </div>
                               {/* <div >
                                    <p style={{marginBottom:"0px"}}>Desea recibir información de nuestros servicios:</p>
                                    <div className="checkbox" style={{display:"flex;"}}>
                                        <label >
                                            <input onChange={onChangeMessage}  type="checkbox" id="checkboxSuccess" value={software} name="soft" />
                                            Software
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input onChange={onChangeMessage}  type="checkbox" id="checkboxSuccess" value={web} name="web" />
                                            Diseño Web
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input onChange={onChangeMessage}  type="checkbox" id="checkboxSuccess" value={apps}  name="app"/>
                                            Apps móviles
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input onChange={onChangeMessage}  type="checkbox" id="checkboxSuccess" value={host} name="host"/>
                                            Hosting y más
                                        </label>
                                    </div>
                                </div>*/}
                                <div >
                                        <div className="inp">
                                            <i className="fa fa-commenting" aria-hidden="true"></i>
                                            <textarea value={msj} onChange={onChangeMessage}  type="text" name="msj"  placeholder="Mensaje" id="message" required data-validation-required-message="Porfavor ingresa tu mensaje"/>

                                        </div>

                                        </div>
                                <div style={{textAlign:"center"}}>
                                    <button  className="btn-c">Enviar</button>
                                    <p className="help-block text-danger"></p>
                                </div>

                            </form>
                        </div>

                </div>
            </div>

        </div>
    );
}