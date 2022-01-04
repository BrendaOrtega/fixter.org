import * as React from 'react'
import styles from "./Footer.module.css"
import Button from "../common/Button"

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FFIXTER_ORG_BORDE-01%202.png?alt=media&token=4c269077-81a4-4800-87e7-760b51a302d7"

const Footer = () => (
    <section >
        <div className={styles.footer}>
            <div className={styles.footerHeader}>
                <p className={styles.legend}>¿Tienes alguna duda? ¿Quieres cotizar tu proyecto? <br />Escríbenos a</p>
                <p className={styles.mail}>brenda@fixter.org</p>
            </div>
            <div className={styles.footerSection}>
                <h3>Sobre Fixter</h3>
                <p>Acerca de</p>
                <p>Portafolio</p>
                <p>Contacto</p>
            </div>
            <div className={styles.footerSection}>
                <h3>Sobre Fixter</h3>
                <p>Acerca de</p>
                <p>Portafolio</p>
                <p>Contacto</p>
            </div>
        </div>
        <div className={styles.legals}>
            <img src={logo} />
            <p>Política de privacidad</p>
            <p>Terminos y condiciones</p>
            <p>© 2021 Copyright Fixter</p>
        </div>
    </section >
)

export default Footer