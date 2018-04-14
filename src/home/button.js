import React, { Component } from 'react';
import '../App.css';

class Button extends Component {
  render() {
    return (
      <div className="btn">
        <button type={ this.props.buttonType }>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button;
