import * as React from 'react'
import classNames from 'classnames'
import TabBar from './TabBar'

import styles from "./Services.module.css"
const service1 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fservice1.png?alt=media&token=e9172220-627d-4bc3-b302-00572e8d3e90"

const Services = ({ onClick }) => {
    const [active, setActive] = React.useState(0)
    const handleClick = (index, title) => {
        setActive(index)
    }

    return <section className={styles.services}>
        <h2 style={{ textAlign: "center" }}>Nuestros servicios</h2>
        <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
        <TabBar onClick={handleClick} />
        <div className={classNames(styles.info, {
            [styles.visible]: active === 0
        })}>
            <div className={styles.serviceDescription}>
                <div className={styles.serviceImg}>
                    <img src={service1} alt="software development image" />
                </div>
                <div className={styles.serviceText}>
                    <h3>Desarrollo de software</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                </div>
            </div>
        </div>
        <div className={classNames(styles.info, {
            [styles.visible]: active === 1
        })}>
            <div className={styles.serviceDescription}>
                <div className={styles.serviceImg}>
                    <img src={service1} alt="software development image" />
                </div>
                <div className={styles.serviceText}>
                    <h3>Desarrollo de software</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                </div>
            </div>
        </div>
        <div className={classNames(styles.info, {
            [styles.visible]: active === 2
        })}>
            <div className={styles.serviceDescription}>
                <div className={styles.serviceImg}>
                    <img src={service1} alt="software development image" />
                </div>
                <div className={styles.serviceText}>
                    <h3>Desarrollo de software</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                </div>
            </div>
        </div>
        <div className={classNames(styles.info, {
            [styles.visible]: active === 3
        })}>
            <div className={styles.serviceDescription}>
                <div className={styles.serviceImg}>
                    <img src={service1} alt="software development image" />
                </div>
                <div className={styles.serviceText}>
                    <h3>Desarrollo de software</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                </div>
            </div>
        </div>
        <div className={classNames(styles.info, {
            [styles.visible]: active === 4
        })}>
            <div className={styles.serviceDescription}>
                <div className={styles.serviceImg}>
                    <img src={service1} alt="software development image" />
                </div>
                <div className={styles.serviceText}>
                    <h3>Desarrollo de software</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scele</p>
                </div>
            </div>
        </div>
    </section>
}
export default Services