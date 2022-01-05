import * as React from 'react'
import "./Home.css"
import Button from "../common/Button"
import Fade from 'react-reveal/Fade';


const Intro = () => (

    <section className='intro'>
        <div className='box-img'>
            <div className='first-box'>
                <Fade>
                    <div className='img1'></div>
                    <div className='img2'></div>
                </Fade>
            </div>
            <div className='scnd-box'>
                <Fade>
                    <div className='img3'></div>
                    <div className='img4'></div>
                </Fade>
            </div>
        </div>
        <div className='text-intro'>
            <Fade>
                <h2>Una empresa joven con <strong style={{ color: "#F79B36" }}>ideas frescas</strong></h2>
                <p>Fixter es una empresa de desarrollo de software constituida en México en 2016. Está fundada por ingenieros de software y amantes de la tecnología que tienen una experiencia significativa como líderes técnicos, arquitectos y diseñadores de productos digitales en empresas internacionales.</p>
                <p>Somos especialistas, así que no tendrás que preocuparte por el lenguaje de programación, ni el framework, ni el diseño, ¡nosotros nos encargamos de eso! Solo nos enfocaremos en el problema y su solución con el objetivo de ofrecer la mejor experiencia a tus clientes o usuarios.</p>
                <a href='https://brenda481.typeform.com/to/ddDz3Uvw' aria-label="quotation form" target={"blank"} rel="noopener noreferrer">
                    <Button text="Cotizar" />
                </a>
            </Fade>
        </div>
    </section >
)

export default Intro