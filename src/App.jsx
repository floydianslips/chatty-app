import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
   this.handleKeyPress = this.handleKeyPress.bind(this)

  }

  componentDidMount() {
    this.chatSocket = new WebSocket("ws://localhost:3001");
    this.chatSocket.onopen = (event) => {
      this.chatSocket.send(JSON.stringify("Things are looking up!"));

    };
    this.chatSocket.onmessage = (event) => {
      let goodData = JSON.parse(event.data);
      this.setState({messages: [...this.state.messages, goodData]})
      this.render()
    }
  }

  addMessage(messageName, userName) {
    const newMessage = {
      type: 'incomingMessage',
      content: messageName,
      username: userName,
    }
    this.chatSocket.send(JSON.stringify(newMessage));
  }

  handleKeyPress(event) {
    // this.getMessage();
    if (event.key === 'Enter') {
     this.addMessage(event.target.value, this.state.currentUser.name);
     event.target.value = null;
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty McChatterton</a>
        </nav>
      <Message data={this.state.messages}/>
      <ChatBar currentUser={this.state.currentUser.name} handleKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}
export default App;
