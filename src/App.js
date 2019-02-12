import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";


class App extends Component {

  render() {
    return (
        <div>
            <Nav/>
          <Routes />
            <Footer/>
        </div>
    );
  }
}

export default App;