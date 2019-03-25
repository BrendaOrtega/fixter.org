import React, { Component } from 'react';
import './Capacitacion.css';
import {Link} from 'react-router-dom';

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
                    <p>Contáctanos, cuentanos lo que necesitas y te mandaremos un programa de capacitación adecuado a tus necesidades.</p>
                    <br/>
                    <Link to="/contacto" style={{textDecoration:"none"}}>
                        <span className="info">Contactar → </span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Capacitacion;