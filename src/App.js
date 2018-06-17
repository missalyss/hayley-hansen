import React, { Component } from 'react';
import './App.css';
import { Button, Header, Footer } from './home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="App-intro"> </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
