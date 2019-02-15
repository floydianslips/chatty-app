import React, {Component} from 'react';

class NavBar extends Component {
  constructor() {
    super()
  }
  render() {
    return (
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatwick McChatterton</a>
          <p className="counter">Users: {this.props.numberUsers}</p>
        </nav>
    )
  }
}

export default NavBar;