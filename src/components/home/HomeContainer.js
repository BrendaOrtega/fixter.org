import React, { Component } from 'react';
import './Home.css';
import Slide from "./Slide";
import About from "./About";
import Servicios from "./Servicios";
import Projects from "./Projects";
import Banner from "./Banner";
import Growth from "./Growth";


class HomeContainer extends Component {
    componentDidMount () {
        window.scroll(0, 0)

        //console.log('mijo')
        let div = document.createElement('div')
        div.id = 'fb-root'
        document.body.appendChild(div)

        let script = document.createElement('script')
        script.id = 'bliss'
        script.async = true;

        const text = document.createTextNode(`
            window.fbAsyncInit = function() {
            FB.init({
                xfbml            : true,
                version          : 'v3.2'
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
            `)
        script.appendChild(text)
        document.body.appendChild(script)
        let div2 = document.createElement('div')
        //div2.classList = 'fb-customerchat'
        div2.innerHTML = `
            <div class="fb-customerchat"
        attribution=setup_tool
        page_id="1333568760053068"
        theme_color="#f79b36"
        logged_in_greeting="¡Hola! ¿Cómo podemos ayudarte?"
        logged_out_greeting="¡Hola! ¿Cómo podemos ayudarte?">
            </div>
        `
        document.body.appendChild(div2)

    }

    render() {
        return (
            <div>

                <Slide/>
                <About/>
                <Servicios/>
                <Projects/>
                <Banner/>
                <Growth/>
            </div>
        );
    }
}

export default HomeContainer;