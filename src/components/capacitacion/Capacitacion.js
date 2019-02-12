import React, { Component } from 'react';
import './Capacitacion.css';
import FontAwesome from "../nosotros/Nosotros";


class Capacitacion extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <div className="cap">

                </div>
                <div className="ns">
                    <h2>¿Quieres capacitar a tu equipo?</h2>
                    <p>Contamos con capacitación personalizada para empresas y startups en diversas tecnologías como: NodeJs, Python, Laravel,
                    Firebase, ReacJs, AngularJs, VueJs, Swift, Android, React Native, Native Script, y más.</p>
                    <p>Contactanos, cuentanos lo que necesitas y te mandaremos un programa de capacitación adoc a tus necesidades.</p>
                    <br/>
                    <span className="info">Contactar → </span>
                </div>
            </div>
        );
    }
}

export default Capacitacion;