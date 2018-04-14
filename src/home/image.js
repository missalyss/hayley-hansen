import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <img style={{ width: 350 + 'px' }} src={ this.props.source } alt={ this.props.alternative } />
    );
  }
}

export default Image;
