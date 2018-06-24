import React, { Component } from 'react';
import './App.css';
import { Button, Header, Footer, HamburgerBar } from './home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HamburgerBar />
        <Header />
        // <Footer />
      </React.Fragment>
    );
  }
}

export default App;
