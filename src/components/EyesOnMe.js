// Code EyesOnMe Component Here
import React from 'react'
export default class EyesOnMe extends React.Component {

consolF = () => {
  console.log('Good!')
}
  consolB = () => {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return(
    <button onFocus={this.consolF} onBlur={this.consolB}>click me</button>
    )
  }
}
