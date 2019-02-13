import React, {Component} from 'react';

const data = [
  {
    type: 'incomingMessage',
    content: 'I wont be impressed with technology until I can download food.',
    username: 'Anonymous1'
  },
  {
    type: 'incomingNotification',
    content: 'Anonymous1 changed their name to nomnom',
  },
  {
    type: 'incomingMessage',
    content: 'I wouldnt want to download Kraft Dinner. Id be scared of cheese packet loss.',
    username: 'Anonymous2'
  },
  {
    type: 'incomingMessage',
    content: '...',
    username: 'nomnom'
  },
  {
    type: 'incomingMessage',
    content: 'Id love to download a fried egg, but Im afraid encryption would scramble it',
    username: 'Anonymous2'
  },
  {
    type: 'incomingMessage',
    content: 'This isnt funny. Youre not funny',
    username: 'nomnom'
  },
  {
    type: 'incomingNotification',
    content: 'Anonymous2 changed their name to NotFunny',
  },
]


class MessageList extends Component {
  render() {
    const messageItem =
      data.map((message, i) =>
      <div key={i} className="message">
        <span className="message-username">{message.username}</span>
        <span className="message-content">{message.content}</span>
      </div>
      )
    return (<ul>{messageItem}</ul>)
  }
}

export default MessageList;