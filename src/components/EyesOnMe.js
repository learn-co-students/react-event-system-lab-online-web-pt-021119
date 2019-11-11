import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    good = () => {
        console.log("Good!")
    }

    bad = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return(
            <button onFocus={this.good} onBlur={this.bad}>

            </button>

        )
    }
}