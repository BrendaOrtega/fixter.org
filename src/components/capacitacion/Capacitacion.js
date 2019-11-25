import React, { Component } from 'react';
import './Capacitacion.css';
import {Link} from 'react-router-dom';

class Capacitacion extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <section>
                <meta
                    name="description"
                    content="Contamos con capacitación personalizada para empresas y startups"
                />
                <meta
                    name="keywords"
                    content="cursos, capacitación, react, angular, tecnología, programación, javascript, python, php"
                />
                <title>Capacitación | Fixter</title>
                <div className="cap">

                </div>
                <div className="ns">
                    <h2>¿Quieres capacitar a tu equipo?</h2>
                    <p>Contamos con capacitación personalizada para empresas y startups en diversas tecnologías como: NodeJs, Python, Laravel,
                    Firebase, ReacJs, AngularJs, VueJs, Swift, Android, React Native, Native Script, y más.</p>
                    <p>Contáctanos, cuentanos lo que necesitas y te mandaremos un programa de capacitación adecuado a tus necesidades.</p>
                    <br/>
                    <Link to="/contacto-fixter" style={{textDecoration:"none"}}>
                    <span className="info">Contactar → </span>
                </Link>
                    <br/>
                    <br/>
                    <div className="herramientas">
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fandroid.png?alt=media&token=a37c49db-d6c8-4987-8f2a-4758571aca1f" alt="android"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fangular.png?alt=media&token=f465c6c2-932d-4ef7-94b4-9848e3b8428c" alt="react"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fdj.png?alt=media&token=c852ecba-420b-41b8-b72a-62765a77d16e" alt="go"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fdock.png?alt=media&token=2f6b0067-caaf-44ed-bb27-ac251bf40f04" alt="firebase"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fvue.png?alt=media&token=9b49cbc5-585b-43dd-8b1a-0677b5632e8b" alt="angular"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Ffire.png?alt=media&token=61aea075-ef53-4462-a561-0734f2faf481" alt="larabel"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fgatsby.jpeg?alt=media&token=4b4aa962-8e6e-4cbd-ac6e-11e66c6850f7" alt="gatsby"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fgo.png?alt=media&token=f94ed0a3-fda1-443e-80cb-c9b50d014f7f" alt="webpack"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fnode.png?alt=media&token=ad363fd0-a582-4db3-bbf5-50a356700ab6" alt="node"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fpython.png?alt=media&token=51421945-b8a0-4899-90b9-329c86aa87c3" alt="django"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Freact.png?alt=media&token=6357cc74-a95c-4ccc-aeec-e902b1c9a8ed" alt="react"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fruby.png?alt=media&token=e6d72406-fbea-47a7-b5f5-f90643eb48c8" alt="rails"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Capacitacion;