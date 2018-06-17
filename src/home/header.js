import React, { Component } from 'react';
import Button from './button';
import Image from './image';
import LineDecorTop from './line-decor/line-decor-top'
import './header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
      <LineDecorTop />
        <div className="initialView">
          <h1 className="title">Hayley Hansen</h1>
          <h2 className="motto">Counseling and healing for all who suffer with trauma</h2>
        </div>
      </header>
    );
  }
}

export default Header;
