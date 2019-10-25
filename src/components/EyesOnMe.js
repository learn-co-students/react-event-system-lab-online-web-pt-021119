import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  hey = () => {
    console.log("Hey! Eyes on me!");
  }

  good = () => {
    console.log("Good!");
  }

  render(){
    return(
      <button onFocus={this.good} onBlur={this.hey}>Button</button>
    )
  }
}
