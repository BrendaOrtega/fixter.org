import * as React from 'react'
import Button from "../common/Button"
import styles from "./Reasons.module.css"

const icon1 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Ficon-sales.svg?alt=media&token=d3d355c4-0255-4f53-b745-0c600cc6a606"
const icon2 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Ficon2.svg?alt=media&token=41649677-8bf5-46e7-8f67-e3871877e7c4"
const icon3 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Ficon3.svg?alt=media&token=3228143d-b806-4140-b0fa-0ec3c2361252"

const Reasons = () => (

    <section className={styles.reasons}>
        <div className={styles.reasonsBox}>
            <div>
                <h3>¿Por qué digitalizar tu negocio?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. </p>
            </div>
            <div>
                <img src={icon1} alt="icon sales" />
                <h4>Incrementa tus ventas</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. </p>
            </div>
            <div>
                <img src={icon2} alt="icon sales" />
                <h4>Llega a más clientes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. </p>
            </div>
            <div>
                <img src={icon3} alt="icon sales" />
                <h4>Automatiza tus procesos</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. </p>
            </div>
        </div>
    </section >
)

export default Reasons