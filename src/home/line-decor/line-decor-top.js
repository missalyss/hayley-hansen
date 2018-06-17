import React, { Component } from 'react';
import './line-decor.css';
import linesElite from '../../images/diff-cream.png'
class LineDecorTop extends Component {
  render() {
    return (
      <img className='lineDecorEverywhere' src={linesElite} alt='Decorative lines' aria-hidden='true' />
    );
  }
}

export default LineDecorTop;
