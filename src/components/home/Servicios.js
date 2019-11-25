import React, { Component } from 'react';
import './Home.css';

class Servicios extends Component {

    render() {
        return (
            <section className="services fl" style={{flexWrap:"wrap"}}>
                <div className="services-img">

                </div>
                <div className="services-text">
                    <h2>Servicios</h2>
                    <p>
                        Somos amantes de la innovación y la mejora continúa por lo que ofrecemos un servicio completo en cuanto
                        a tecnología se refiere:
                    </p>
                    <br/>
                    <div className="fl" style={{flexWrap:"wrap"}}>
                        <div className="service">
                            <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Flaptop-code-solid.png?alt=media&token=3d1f72b4-84bd-4a6c-b041-74f3749ce322" alt="laptop"/>
                            <h3>Desarrollo de software</h3>
                            <p>Desarrollo de software a la medida</p>
                        </div>
                        <div className="service">
                            <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fchalkboard-teacher-solid.png?alt=media&token=4280c43a-04e0-4334-a33f-cd23c789f52e" alt="teaching"/>
                            <h3>Diseño web</h3>
                            <p>Diseño de páginas y apps web </p>
                        </div>
                        <div className="service">
                            <img style={{height:"50px", width:"30px"}} src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fmobile-alt-solid.png?alt=media&token=b0079ba4-de81-41d1-8ed6-47699211ea64" alt="mobile"/>
                            <h3>Aplicaciones Móviles</h3>
                            <p>Aplicaciones para IOS y Android</p>
                        </div>
                        <div className="service">
                            <img src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2Fioxhost-brands.png?alt=media&token=636ce2ec-039b-47ab-a1da-e72ada0130f5" alt="host-service"/>
                            <h3>UX / UI</h3>
                            <p>Diseño UX y prototipado.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Servicios;