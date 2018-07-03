import React, { Component } from 'react';
import './line-decor.css';
import linesElite from '../../images/diff-cream.png'
class LineDecorTop extends Component {
  render() {
    return (
      <div className='lineContainer'>
        <div className='allLines horizontalOne'/>
        <div className='allLines verticleLeftOne' />
        <div className='allLines verticleLeftTwo' />
        <div className='allLines verticleLeftThree' />

        <div className='allLines verticleRightOne' />
        <div className='allLines verticleRightTwo' />
        <div className='allLines verticleRightThree' />
      </div>
    );
  }
}

export default LineDecorTop;
