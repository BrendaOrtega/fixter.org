import * as React from 'react'
import NavBar from "../NavBar"
import { Card } from "../common/Card"
import styles from "./Portfolio.module.css"
import Fade from 'react-reveal/Fade';

const bfluency = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fproyecto1.jpg?alt=media&token=d6d89dde-6f68-4b91-8562-ba13842a58b1"
const zenda = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fproyecto2.png?alt=media&token=bea6ba9f-e642-41b6-98fd-d98edb1311e2"
const spike = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fproyecto3.jpg?alt=media&token=ac02f047-f828-4c44-a918-32cf4d08c5f0"
const collectum = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fproyecto4.jpg?alt=media&token=d0c60e1b-66b7-4bbc-970e-903dd474ee5e"
const lomas = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fproyecto5.jpg?alt=media&token=4da9e465-8f3d-4d23-805c-e2294fa12379"
const arango = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fproyecto6.jpg?alt=media&token=d1eaccb8-b9ed-4149-b51f-ad80d0093945"

const Portfolio = () => {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        < section >
            <NavBar />
            <section className={styles.portfolio}>
                <Fade>
                    <h2 className={styles.header}>Creamos mejores experiencias para tus clientes</h2>
                </Fade>
                <div className={styles.projectsBox}>
                    <Card
                        tag="Plataforma de cursos"
                        project="bfluency"
                        description="Website y plataforma para la contratación y visualización de programas de entrenamiento con herramientas propias del Alto Rendimiento Deportivo."
                        image={bfluency} />
                    <Card
                        tag="Plataforma de seguros"
                        project="Zenda.la"
                        description="Frontend de plataforma de contratación de seguros de gastos médicos mayores de forma 100% digital, visualización de datos médicos, etc."
                        image={zenda} />
                    <Card
                        tag="Website"
                        project="Spike Stinger"
                        description="Website de Spike Stinger International en donde se muestra toda la información de los productos, galería, ubicación y contacto."
                        image={spike} />
                    <Card
                        tag="Plataforma de encuestas"
                        project="Collectum Datos Panel"
                        description="Website y plataforma en donde la comunidad de panelistas pueden compartir sus experiencias con algunos productos, obtener puntos y canjearlos por regalos. "
                        image={collectum} />
                    <Card
                        tag="Aplicación de uso interno"
                        project="Lomas de Cocoyoc"
                        description="Aplicación web de uso interno para la administración de pagos, gastos y propiedades. "
                        image={lomas} />
                    <Card
                        tag="Website"
                        project="Arango"
                        description="Website de restaurante en donde los clientes pueden visualizar la carta, reservar, y deleitarse con la galería de fotos.  "
                        image={arango} />
                </div>
            </section>
        </section >
    )

}
export default Portfolio