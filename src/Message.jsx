import React, {Component} from 'react';
import MessageList from './MessageList.jsx';

class Message extends Component {

  render() {
    return (
      <div>
        <main className="messages">
        <MessageList data={this.props.data}/>
        </main>
      </div>
    )
  }
}

export default Message;