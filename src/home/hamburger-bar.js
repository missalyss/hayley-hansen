import React, { Component } from 'react';

import './hamburger-bar.css'
class HamburgerBar extends Component {
  render() {
    return (
      <div className='bar'>
        <div className='hamburger'></div>
        <div className='homeLink'>
          <span>
          Hayley Hansen
          </span>
        </div>
      </div>
    );
  }
}

export default HamburgerBar;
