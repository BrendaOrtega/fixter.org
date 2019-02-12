
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
                <p>Tienes alguna duda? Quieres cotizar un producto? Completa el formulario</p>
                <div className="container">
                    <div className={ ' row '}>
                        <div >
                            <h3 >Estamos ubicados en...</h3>
                            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.9910732526796!2d-98.80388768503683!3d20.134420023080985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a125b9171db7%3A0xf0ef93b8ffdce18c!2sFixTeR!5e0!3m2!1ses-419!2smx!4v1492123614514" allowFullScreen></iframe>
                        </div>
                        <div >
                            <h3>Si deseas más información, completa el formulario</h3>
                            <form method="post" name="sentMessage" action="" onSubmit={onSave}>
                                <div>
                                    <div >
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <input value={name} onChange={onChangeMessage} type="text" name="nombre"  placeholder="Nombre" id="name" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                                        <p className="help-block text-danger"></p></div>
                                </div>
                                <div >
                                    <div >
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <input value={email} onChange={onChangeMessage} type="email" name="email"  placeholder="Email" id="email" required data-validation-required-message="Porfavor ingresa tu e-mail"/>
                                        <p className="help-block text-danger"></p></div>
                                </div>
                                <div >
                                    <div >
                                        <i className="fa fa-phone" aria-hidden="true"></i>

                                        <input value={tel} onChange={onChangeMessage}  type="tel" name="tel" placeholder="Teléfono" id="phone" required data-validation-required-message="Porfavor ingresa tu numero telefonico"/>
                                        <p className="help-block text-danger"></p></div>
                                </div>
                                <div >
                                    <p>Desea recibir información de nuestros servicios:</p>
                                    <div className="checkbox">
                                        <label>
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
                                            <p>Hosting y más</p>
                                        </label>
                                    </div>
                                </div>
                                <div >
                                    <div >
                                        <div >
                                            <i className="fa fa-commenting" aria-hidden="true"></i></div>

                                        <textarea value={msj} onChange={onChangeMessage}  type="text" name="msj"  placeholder="Mensaje" id="message" required data-validation-required-message="Porfavor ingresa tu mensaje"/>
                                        <p className="help-block text-danger"></p></div>
                                </div>
                                <div >
                                    <button >Enviar</button>
                                    <p className="help-block text-danger"></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}