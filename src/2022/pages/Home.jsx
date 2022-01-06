import * as React from 'react'
import "./Home/Home.css"
import Button from "./common/Button"
import Intro from "./Home/Intro.jsx"
import Services from "./Home/Services"
import Reasons from "./Home/Reasons"
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom"
import { useSpring, animated } from 'react-spring'


const img1 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fwc1.png?alt=media&token=85d8312f-4e38-4ddc-aabb-ff49f5e4c555"
const img2 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fwc2.png?alt=media&token=f882bf99-2c15-4200-bcb9-c9504cbbf5e1"
const img3 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2Fwc3.png?alt=media&token=9a37d7fb-0207-4410-b5fc-d434f65b28b2"

const Home = () => {
    const styles = useSpring({
        // loop: { reverse: true },
        from: { transform: `translate3d(0,20%,0)`, },
        to: { transform: `translate3d(0,-3%,0)`, },
        config: {
            duration: 3000,
        },
        delay: 1000,
    })

    const styles2 = useSpring({
        // loop: { reverse: true },
        from: { transform: `translate3d(0,-20%,0)`, },
        to: { transform: `translate3d(0,3%,0)`, },
        config: {
            duration: 3000,
        },
        delay: 1000,
    })

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <section className='home'>
            <section className='aside'>
                <div className='welcome-section'>
                    <div className='welcome-info'>
                        <Fade>
                            <div>
                                <h1 className='welcome-title'>Impulsa el crecimiento de tu negocio con nosotros</h1>
                                <p className='welcome-text'>Resuelve los desafíos de tu negocio con tecnología</p>
                                <Link to="/contacto">
                                    <Button text="Contactar" />
                                </Link>
                                <p className='text-cta' >Llamános al                             <a href="tel:+527757609276" aria-label="Mail" rel="noopener noreferrer">
                                    <strong>775 760 92 76</strong> </a> o escríbenos a                 <a href="mailto:brenda@fixter.org" aria-label="Mail" rel="noopener noreferrer">
                                        <strong>brenda@fixter.org</strong></a> </p>
                            </div>
                        </Fade>
                        <Fade>
                            <div>
                                <animated.img style={styles} className='img-left' src={img1} alt="Welcome part 1" loading="lazy" />
                                <animated.img style={styles2} className='img-bottom' src={img2} alt="Welcome part 2" loading="lazy" />
                                <animated.img style={styles} className='img-right' src={img3} alt="Welcome part 3" loading="lazy" />
                            </div>
                        </Fade>
                    </div>
                    <div>
                        <Fade>
                            <div className=" clientes-logos ">
                                <div className="clientes-box">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fgobierno-del-estado-de-hidalgo-logo-83001C1D96-seeklogo.com.png?alt=media&token=5bee7633-5d3f-4cc3-a2e6-96aee46627da" alt="gobierno-hidalgo logo" loading="lazy" />
                                    <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fbb.svg?alt=media&token=d6730f93-7913-43f2-9fe7-56bdc1a3ca05" alt="bfluency logo" loading="lazy" />
                                    <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FLogoRetoZapopan.svg?alt=media&token=b1c496ec-0ad7-4df2-b68e-307e346ddd02" alt="reto-zapopan" loading="lazy" />
                                    <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fpanelito.svg?alt=media&token=639e0a93-fe0e-465a-b118-7d57c23d6222" alt="collectum datos logo" loading="lazy" />
                                    <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fheader-logo-concamin.png?alt=media&token=e954bccc-8857-4bcc-8dba-22b40375e6bf" alt="concamin" loading="lazy" />
                                    <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FGroup.png?alt=media&token=e79d81df-b432-4c6c-86f8-f7fa0c104def" alt="allende" loading="lazy" />
                                    <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Flogo_horizontal.png?alt=media&token=e7a57bf9-5046-4c76-8cbe-60acd3f19796" alt="horizonte" loading="lazy" /></div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            <Intro />
            <Services />
            <Reasons />
        </section >
    )
}
export default Home