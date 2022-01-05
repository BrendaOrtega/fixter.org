import React from 'react';
import Button from "../common/Button"
import styles from "./Contact.module.css"
import Fade from 'react-reveal/Fade';

export const Contacto = ({ onSave, errors, onChangeMessage, name, email, tel, msj, software, web, apps, host }) => {

    return (
        <section className={styles.contactSection}>
            <meta
                name="description"
                content="Software development: calidad, precio, y rapidez."
            />
            <meta
                name="keywords"
                content="software, startups, tecnología, desarrollo, crecimiento, página web"
            />
            <title>Contacto | Fixter</title>

            <div className={styles.contacto}>

            </div>
            <div className={styles.contactContainer}>
                <div className={styles.cardForm}>
                    <Fade>
                        <h2>
                            ¿Tienes alguna pregunta? ¡Escríbenos!
                        </h2>
                        <p>Ingresa la siguiente información y uno de nuestros colaboradores se pondrá en contacto contigo.</p>
                    </Fade>
                    <Fade>
                        <div className={styles.container} >
                            <div className={styles.form}>
                                <form method="post" name="sentMessage" action="" onSubmit={onSave}>
                                    <div className={styles.inputGroup}>
                                        <div>
                                            <label className={styles.label}>Nombre <span>*</span></label>
                                            <input className={styles.inp} value={name} onChange={onChangeMessage} type="text" name="nombre" placeholder="Ingresa tu nombre" id="name" required data-validation-required-message="Porfavor ingresa tu nombre" />
                                            <p className="help-block text-danger"></p>
                                        </div>

                                        <div >
                                            <label className={styles.label}>Empresa <span>*</span></label>

                                            <input className={styles.inp} value={software} onChange={onChangeMessage} type="text" name="software" placeholder="Ingresa el nombre de la empresa" id="company" required data-validation-required-message="Porfavor ingresa el nombre de la empresa" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <div >
                                            <label className={styles.label}>Email <span>*</span></label>
                                            <input className={styles.inp} value={email} onChange={onChangeMessage} type="email" name="email" placeholder="ejemplo@gmail.com" id="email" required data-validation-required-message="Porfavor ingresa tu e-mail" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div >
                                            <label className={styles.label}>Teléfono <span>*</span></label>
                                            <input className={styles.inp} value={tel} onChange={onChangeMessage} type="tel" name="tel" placeholder="55 555 55 55" id="phone" required data-validation-required-message="Porfavor ingresa tu numero telefonico" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div >
                                        <label className={styles.label}>Mensaje <span>*</span></label>
                                        <textarea className={styles.textArea} value={msj} onChange={onChangeMessage} type="text" name="msj" placeholder="Ingresa un mensaje" id="message" required data-validation-required-message="Porfavor ingresa tu mensaje" />

                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <Button text="Enviar" />
                                        <p className="help-block text-danger"></p>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </Fade>
                </div>
                <div className={styles.address}>
                    <div>
                        <Fade>
                            <h4>Contáctanos</h4>
                            <a href="tel:+527757609276" aria-label="Mail" rel="noopener noreferrer">
                                <p>+52 775 760 9276</p>
                            </a>
                            <a href="mailto:brenda@fixter.org" aria-label="Mail" rel="noopener noreferrer">
                                <p>brenda@fixter.org</p>
                            </a>
                        </Fade>
                    </div>
                    <br />
                    <div>
                        <Fade>
                            <h4>Visitános en</h4>
                            <p>Jalapa #100, Roma Norte, CDMX, México</p>
                        </Fade>
                    </div>
                </div>
            </div>

        </section >
    );
}