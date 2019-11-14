import React from 'react';

class Keypad extends React.Component {
  handleInputPassword = () => {
    console.log('Entering password...')
  }

  render() {
    return(
      <div>
        <form>
          <input type="password" autoComplete="new-password" onKeyUp={this.handleInputPassword}/>
        </form>
      </div>
    )
  }
}

export default Keypad
