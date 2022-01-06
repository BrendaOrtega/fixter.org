import * as React from 'react'
import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome';

import styles from "./Footer.module.css"

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FFIXTER_ORG_BORDE-01%202.png?alt=media&token=4c269077-81a4-4800-87e7-760b51a302d7"

const Footer = () => (
    <section >
        <div className={styles.footer}>
            <div className={styles.footerHeader}>
                <p className={styles.legend}>¿Tienes alguna duda? ¿Quieres cotizar tu proyecto? <br />Escríbenos a</p>
                <a href="mailto:brenda@fixter.org" aria-label="Mail" rel="noopener noreferrer">
                    <p className={styles.mail}>brenda@fixter.org</p>
                </a>
            </div>
            <div className={styles.footerSection}>
                <h3>Sobre Fixter</h3>
                <p>Acerca de</p>
                <Link to="/2022/portafolio">
                    <p>Portafolio</p>
                </Link>
                <Link to="politicas-de-privacidad">
                    <p>Política de privacidad</p>
                </Link>
                <Link to="/2022/contacto">
                    <p>Contacto</p>
                </Link>
            </div>
            <div className={styles.footerMedia}>
                <h3>Redes</h3>
                <a href="https://www.facebook.com/Fixterorg-1333568760053068/" aria-label="Facebook" target={"blank"} rel="noopener noreferrer">
                    <FontAwesome name="facebook" />
                </a>
                <a href="https://wa.me/5217757609276" aria-label="Whats app" target={"blank"} rel="noopener noreferrer">
                    <FontAwesome name="whatsapp" />
                </a>
                <a href="https://www.linkedin.com/company/28982942/admin/" aria-label="Linkedin" target={"blank"} rel="noopener noreferrer">
                    <FontAwesome name="linkedin" />
                </a>
                <a href="mailto:brenda@fixter.org" aria-label="Mail" rel="noopener noreferrer">
                    <FontAwesome name="envelope" />
                </a>
            </div>
        </div>
        <div className={styles.legals}>
            <img src={logo} alt="logo" />

            {/* <Link to="politicas-de-privacidad">
                <p>Terminos y condiciones</p>
            </Link> */}
            <p>© 2021 Copyright Fixter</p>
        </div>
    </section >
)

export default Footer