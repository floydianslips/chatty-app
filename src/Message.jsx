import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
class Message extends Component {
  render() {
    return (
      <div>
          <MessageList />
          
      <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div>
      </div>
    )
  }
}

export default Message;