import * as React from 'react'
import NavBar from "./NavBar"
import "./Home/Home.css"
import Button from "./common/Button"
import Intro from "./Home/Intro.jsx"
import Services from "./Home/Services"
import Reasons from "./Home/Reasons"
import Footer from "./Home/Footer"

const img1 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fwelcome-img1.png?alt=media&token=89d95439-1a44-4df3-881b-cc4b04a3a1cf"
const img2 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fwelcome-img2.svg?alt=media&token=7d6e7160-f8b8-4d76-b367-37bd4ce3af2f"
const img3 = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fwelcome.img3.png?alt=media&token=fc032eb9-b86c-4fe6-93ca-60a17299ad74"

const Home = () => (

    <section className='home'>
        <NavBar />
        <section className='welcome-section'>
            <div className='welcome-info'>
                <div>
                    <h1 className='welcome-title'>Impulsa el crecimiento de tu negocio con nosotros</h1>
                    <p className='welcome-text'>Resuelve los desafíos de tu negocio con diseño y tecnología</p>
                    <Button text="Cotizar" />
                    <p className='text-cta' >Llamános al <strong>775 760 92 76</strong> o escríbenos a <strong>brenda@fixter.org</strong> </p>
                </div>
                <div>
                    <img className='img-left' src={img1} />
                    <img className='img-bottom' src={img2} />
                    <img className='img-right' src={img3} />
                </div>

            </div>
            <div>
                <div className=" clientes-logos ">
                    <div className="clientes-box">
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fgobierno-del-estado-de-hidalgo-logo-83001C1D96-seeklogo.com.png?alt=media&token=5bee7633-5d3f-4cc3-a2e6-96aee46627da" alt="gobierno-hidalgo logo" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fbb.svg?alt=media&token=d6730f93-7913-43f2-9fe7-56bdc1a3ca05" alt="bfluency logo" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FLogoRetoZapopan.svg?alt=media&token=b1c496ec-0ad7-4df2-b68e-307e346ddd02" alt="reto-zapopan" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fpanelito.svg?alt=media&token=639e0a93-fe0e-465a-b118-7d57c23d6222" alt="collcetum datos logo" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fheader-logo-concamin.png?alt=media&token=e954bccc-8857-4bcc-8dba-22b40375e6bf" alt="concamin" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FGroup.png?alt=media&token=e79d81df-b432-4c6c-86f8-f7fa0c104def" alt="allende" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Flogo_horizontal.png?alt=media&token=e7a57bf9-5046-4c76-8cbe-60acd3f19796" alt="horizonte" /></div>
                </div>
            </div>
        </section>
        <Intro />
        <Services />
        <Reasons />
        <Footer />
    </section >
)

export default Home