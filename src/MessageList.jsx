import React, {Component} from 'react';




class MessageList extends Component {
  constructor(){
    super()
  }

  render() {
      const messageItem = this.props.data.map((message, i) =>
        message.type === 'incomingNotification' ?
        (<div key={i} className="message system">User {message.username} changed their name to {message.content}</div>) :
        (<div key={i} className="message">
          <span className="message-username">{message.username}</span>
          <span className="message-content">{message.content}</span>
        </div>)
       )
    return (<main className="messages">{messageItem}</main>)
  }
}

export default MessageList;