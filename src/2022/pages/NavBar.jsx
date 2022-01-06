import React, { useState } from "react";
import { Link } from "react-router-dom"
import './NavBar.css';

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/-Kzorqdwn3S9Ecl7LZB6%2FFIXTER_ORG_BORDE-01%202.png?alt=media&token=4c269077-81a4-4800-87e7-760b51a302d7"

const NavBar = () => {
    let [toggle, setToggle] = useState(false);

    window.onscroll = (e) => {
        window.requestAnimationFrame(function () {
            if (window.scrollY > 100) {
                setToggle(true);
            } else {
                setToggle(false);
            }
        });
    };
    return (
        <section className="navbar-top"
            style={
                toggle
                    ? {
                        transition: "all .3s",
                        background: "white",
                        margin: 0,
                        width: "100%",
                        padding: "0 5%",
                        borderBottom: "1px solid #f2f2f2"
                    }
                    : { transition: "all .3s" }
            }>
            <Link to="/">
                <img src={logo} alt="fixter logo" />
            </Link>
            <div className='tabs'>
                <Link to="/portafolio">
                    <h3>Portafolio</h3>
                </Link>
                <Link to="/contacto">
                    <h3>Contacto</h3>
                </Link>
            </div>
        </section>


    )
}

export default NavBar