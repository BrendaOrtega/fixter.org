import * as React from 'react'
import classNames from 'classnames'

import styles from "./TabBar.module.css"

const TabBar = ({ onClick }) => {
    const [active, setActive] = React.useState(0)
    const handleClick = (index, title) => {
        setActive(index)
        onClick(index, title)
    }
    return (
        <section className={styles.wrap}>
            <div className={styles.container}>
                <button
                    onClick={() => handleClick(0, 'Desarrollo Software')}
                    className={classNames(styles.toggleButton, {
                        [styles.active]: active === 0
                    })}>Desarrollo Software</button>
                <button
                    onClick={() => handleClick(1)}
                    className={classNames(styles.toggleButton, {
                        [styles.active]: active === 1
                    })}>Apps móviles</button>
                <button
                    onClick={() => handleClick(2)}
                    className={classNames(styles.toggleButton, {
                        [styles.active]: active === 2
                    })}>UX/UI Design</button>
                {/* <button
                    onClick={() => handleClick(3)}
                    className={classNames(styles.toggleButton, {
                        [styles.active]: active === 3
                    })}>Diseño web 3D</button> */}
                <button
                    onClick={() => handleClick(4)}
                    className={classNames(styles.toggleButton, {
                        [styles.active]: active === 4
                    })}>Capacitación</button>
            </div>
        </section>
    )
}

export default TabBar