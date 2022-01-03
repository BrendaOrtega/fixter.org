import * as React from 'react'
import "./Home.css"
import Button from "../common/Button"


const Intro = () => (

    <section className='intro'>
        <div className='box-img'>
            <div className='first-box'>
                <div className='img1'></div>
                <div className='img2'></div>
            </div>
            <div className='scnd-box'>
                <div className='img3'></div>
                <div className='img4'></div>
            </div>
        </div>
        <div className='text-intro'>
            <h2>Impulsa el crecimiento de tu negocio con nosotros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam integer nunc orci volutpat laoreet. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque. t. Scelerisque varius ipsum amet sit pellentesque.</p>
            <p>Magna vulputate non varius faucibus nullam. Eu quisque et purus dolor lacus quis amet. Vel ut dui, eros, purus. Cursus tristique curabitur dis nulla at nunc aliquam. Vestibulum sed commodo, pulvinar est tempus sagm. </p>
            <Button text="Cotizar" />
        </div>
    </section >
)

export default Intro