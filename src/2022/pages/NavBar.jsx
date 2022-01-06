import React, { useState } from "react";
import { Link } from "react-router-dom"
import './NavBar.css';

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/Images%2FFIXTER-NUEVO.png?alt=media&token=d9836d12-7c81-47ea-9c35-ec406805a6ea"

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