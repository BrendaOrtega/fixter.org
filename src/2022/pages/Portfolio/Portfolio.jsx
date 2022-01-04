import * as React from 'react'
import classNames from 'classnames'
import NavBar from "../NavBar"
import { Card } from "../common/Card"
import styles from "./Portfolio.module.css"

const bfluency = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fbf-1.svg?alt=media&token=1dc50bcb-6ae1-4e02-a7bc-e13627b6267c"
const zenda = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fproject2.svg?alt=media&token=4f7248dd-603c-4571-9a6a-19f626eeab4f"
const spike = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fspike.svg?alt=media&token=e007a3f1-527c-4173-984a-9a122852ee4f"
const collectum = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fcollectum.svg?alt=media&token=63faa893-6b53-4a87-8ede-455ad4fa5f11"
const lomas = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fpanel.svg?alt=media&token=9c787600-ba59-4968-995c-98f80cbfab64"
const arango = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Farango.svg?alt=media&token=8606efe4-cd51-437e-ace3-71150fc65c38"

const Portfolio = () => (

    <section >
        <NavBar />
        <section className={styles.portfolio}>
            <h2 className={styles.header}>Creamos mejores experiencias para tus clientes</h2>
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
    </section>
)


export default Portfolio