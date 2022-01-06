import * as React from 'react'
import classNames from 'classnames'
import TabBar from './TabBar'
import Fade from 'react-reveal/Fade';

import styles from "./Services.module.css"
const service1 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fsustitute.jpg?alt=media&token=b8b0e9eb-9c32-4f43-9d4f-0677884a7949"
const service2 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fappss.png?alt=media&token=9238654f-b80a-4b94-80e0-0adfeda05537"
const service3 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fproyecto-3.png?alt=media&token=3f922eee-2c92-4aa2-90bb-1d14905681b9"
const service5 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fservicio-6.png?alt=media&token=db2355d6-4414-48ed-965f-fc379e2312ee"

const Services = ({ onClick }) => {
    const [active, setActive] = React.useState(0)
    const handleClick = (index, title) => {
        setActive(index)
    }

    return <section className={styles.services}>
        <Fade>
            <h2 style={{ textAlign: "center" }}>Nuestros servicios</h2>
            <p style={{ textAlign: "center" }}> Dominamos el desarrollo de productos digitales, desde la definición del producto, investigación de usuario, diseño, arquitectura, código, pruebas de usabilidad e implementación, hasta su lanzamiento. </p>
        </Fade>
        <Fade>
            <TabBar onClick={handleClick} />
            <div className={classNames(styles.info, {
                [styles.visible]: active === 0
            })}>
                <div className={styles.serviceDescription}>
                    <div className={styles.serviceImg}>
                        <img src={service1} alt="software development" />
                    </div>
                    <div className={styles.serviceText}>
                        <h3>Desarrollo de software</h3>
                        <p>Los servicios de desarrollo de software abarcan aplicaciones comerciales o internas completamente personalizadas, desde E-commerce, websites, CRM, CMS, Social Media Platforms, soluciones en la Nube, o cualquier aplicación web custom que tu negocio necesite.</p>
                        <p>Estas soluciones se extienden por todo el ciclo de vida del producto, estaremos contigo desde la concepción del producto hasta su lanzamiento.</p>
                        <p>¿Tienes alguna idea? ¿Tu compañía quiere digitalizar procesos internos? ¿Quieres llegar a nuevos clientes? Contáctanos y encontraremos la mejor solución.</p>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.info, {
                [styles.visible]: active === 1
            })}>
                <div className={styles.serviceDescription}>
                    <div className={styles.serviceImg}>
                        <img src={service2} alt="software development" />
                    </div>
                    <div className={styles.serviceText}>
                        <h3>Aplicaciones Móviles IOS/Android</h3>
                        <p>Actualmente, los clientes navegan por la red para interactuar con las marcas o conocer nuevas desde sus dispositivos móviles, así que si no te acercas a ellos en ese entorno, probablemente estes perdiendo ingresos o visibilidad en el mercado.</p>
                        <p>Ya sea una aplicación híbrida o nativa, nos encargamos de evaluar la mejor solución para tu compañía y tus clientes, diseñaremos y desarrollaremos aplicaciones móviles que cumplan las necesidades de tus clientes, mejoren tu tasa de conversión y la experiencia de usuario de tus clientes al interactuar con tu marca.</p>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.info, {
                [styles.visible]: active === 2
            })}>
                <div className={styles.serviceDescription}>
                    <div className={styles.serviceImg}>
                        <img src={service3} alt="software development" />
                    </div>
                    <div className={styles.serviceText}>
                        <h3>Diseño UX/UI</h3>
                        <p>El diseño de experiencia de usuario y diseño de interfaces harán que los sistemas complejos parezcan fáciles de usar para el usuario final.
                        </p>
                        <p>Siguiendo la filosofía de Diseño Centrado en el Usuario (DCU) mantenemos las necesidades tanto de los usuarios como de la empresa como centro fundamental al momento de tomar decisiones de definición, arquitectura, usabilidad o interacción,
                            para así, asegurarnos que al finalizar el producto, esté ofrezca un valor agregado a los usuarios cumpliendo con las reglas de negocio de la empresa.
                        </p>
                        <p></p>
                    </div>
                </div>
            </div>
            {/* <div className={classNames(styles.info, {
                [styles.visible]: active === 3
            })}>
                <div className={styles.serviceDescription}>
                    <div className={styles.serviceImg}>
                        <img src={service1} alt="software development" />
                    </div>
                    <div className={styles.serviceText}>
                        <h3>Diseño Web 3D</h3>
                        <p>Cada día más empresas tienen presencia en internet, ofreciendo productos similares... </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    </div>
                </div>
            </div> */}
            <div className={classNames(styles.info, {
                [styles.visible]: active === 4
            })}>
                <div className={styles.serviceDescription}>
                    <div className={styles.serviceImg}>
                        <img src={service5} alt="software development" />
                    </div>
                    <div className={styles.serviceText}>
                        <h3>Capacitación</h3>
                        <p>Si tu equipo necesita actualizarse, estas en el lugar correcto.</p>
                        <p>Nuestro servicio consiste en crear un programa personalizado con base en los objetivos de tu empresa, considerando lenguajes y herramientas como: JavaScript, ReactJs, VueJs, Firebase, Docker, Go, ReactNative, Kotlin, Java, Swift, NodeJs, Python, Django, SQL, Bases de Datos, y más.</p>

                    </div>
                </div>
            </div>
        </Fade>
    </section>
}
export default Services