import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.currentUser} />
        <input className="chatbar-message" type="text" onKeyPress={this.props.handleKeyPress} placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

export default ChatBar;