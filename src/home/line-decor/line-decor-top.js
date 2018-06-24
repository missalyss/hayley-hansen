import React, { Component } from 'react';
import './line-decor.css';
import linesElite from '../../images/diff-cream.png'
class LineDecorTop extends Component {
  render() {
    return (
      <div className='lineContainer'>
        <div className='allLines tippyTop'/>
        <div className='allLines verticleOne' />
      </div>
    );
  }
}

export default LineDecorTop;
