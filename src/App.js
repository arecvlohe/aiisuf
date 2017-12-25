import React, { Component } from "react";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Landing />
        <About />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
