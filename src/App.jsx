import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
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
      ],
      currentUser: "Bob"
   }
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty McChatterton</a>
        </nav>
      <Message data={this.state.data}/>
      <ChatBar currentUser={this.state.currentUser} />
      </div>
    );
  }
}
export default App;
