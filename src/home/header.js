import React, { Component } from 'react';
import Button from './button';
import Image from './image';
import portrait from '../images/portrait.jpg';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="App-title">Hayley Hansen</h1>
        <Image source={ portrait } alternative="Hayley Hansen portrait" />
        <Button label="480-382-7552" buttonType="tel"/>
      </header>
    );
  }
}

export default Header;
