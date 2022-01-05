import * as React from 'react'
import Fade from 'react-reveal/Fade';

import styles from "./Reasons.module.css"

const icon1 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Ficon-sales.svg?alt=media&token=d3d355c4-0255-4f53-b745-0c600cc6a606"
const icon2 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Ficon2.svg?alt=media&token=41649677-8bf5-46e7-8f67-e3871877e7c4"
const icon3 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Ficon3.svg?alt=media&token=3228143d-b806-4140-b0fa-0ec3c2361252"
const send = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fsend.png?alt=media&token=a26d430f-ceac-4517-b78b-5fb15fbf87da"

const Reasons = () => (

    <section className={styles.reasons}>
        <div className={styles.reasonsBox}>
            <div>
                <Fade>
                    <h3>¿Por qué digitalizar tu negocio?</h3>
                    <p>En esta era digital, digitalizar tu negocio te da más credibilidad antes tus clientes, incrementar tus ventas y hasta reducir tus gastos a mediano plazo al digitalizar procesos internos.</p>
                </Fade>
            </div>
            <div>
                <Fade>
                    <img src={icon1} alt="icon sales" />
                    <h4>Incrementa tus ventas</h4>
                    <p>Una tienda en línea mostrando todos tus productos o servicios, puede incrementar tus ventas y mejorar tus procesos de logística.</p>
                </Fade>
            </div>
            <div>
                <Fade>
                    <img src={icon2} alt="icon sales" />
                    <h4>Llega a más clientes</h4>
                    <p>El contar con un sitio web te permite llegar a más clientes, de forma nacional e internacional y construir una relación cercana con ellos.</p>
                </Fade>
            </div>
            <div>
                <Fade>
                    <img src={icon3} alt="icon sales" />
                    <h4>Automatiza tus procesos</h4>
                    <p>Los procesos manuales y repetitivos pueden digitalizarse para disminuir costos y que tus colaboradores puedan enfocarse en lo que de verdad importa, ¡Hacer crecer tu empresa!</p>
                </Fade>
            </div>
        </div>
        <a href='https://brenda481.typeform.com/to/ddDz3Uvw' aria-label="quotation form" target={"blank"} rel="noopener noreferrer">
            <div className={styles.cta}>
                <Fade>
                    <h3>¿Estás listo para empezar?</h3>
                    <h2>Cotiza tu proyecto y trabaja con nosotros</h2>
                    <img src={send} alt="sending ilustration" />
                </Fade>
            </div>
        </a>
    </section >
)

export default Reasons