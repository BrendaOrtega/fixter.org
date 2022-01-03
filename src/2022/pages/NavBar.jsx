import * as React from 'react';
import './NavBar.css';

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FFIXTER_ORG_BORDE-01%202.png?alt=media&token=4c269077-81a4-4800-87e7-760b51a302d7"

const NavBar = () => (
    <section className="navbar-top">
        <img src={logo} alt="fixter logo" />
        <div className='tabs'>
            <h3>Servicios</h3>
            <h3>Portafolio</h3>
            <h3>Contacto</h3>
        </div>
    </section>


)

export default NavBar