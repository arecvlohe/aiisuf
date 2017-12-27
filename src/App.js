import React, { Component } from "react";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

class App extends Component {
  state = {
    renderMobileNav: false
  };

  handleRenderMobileNav = () => {
    this.setState(prev => ({ renderMobileNav: !prev.renderMobileNav }));
  };

  render() {
    const { renderMobileNav } = this.state;
    return (
      <div style={{ position: "relative" }}>
        <Nav
          handleRenderMobileNav={this.handleRenderMobileNav}
          renderMobileNav={renderMobileNav}
        />
        <MobileNav
          handleRenderMobileNav={this.handleRenderMobileNav}
          visible={renderMobileNav}
        />
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
