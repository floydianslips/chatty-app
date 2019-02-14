import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      currentUser: {name: 'Say My Name'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
    }
   this.handleKeyPress = this.handleKeyPress.bind(this)

  }

  componentDidMount() {
    this.chatSocket = new WebSocket("ws://localhost:3001");
    this.chatSocket.onopen = (event) => {
      this.chatSocket.send(JSON.stringify("Things are looking up!"));
    };
    this.chatSocket.onmessage = (event) => {
      let parsedData = JSON.parse(event.data);
      switch(parsedData.type) {
        case "incomingMessage":
          this.setState({messages: [...this.state.messages, parsedData]})
          break;
        case "incomingNotification":
          let newName = {...this.state.currentUser};
          newName.name = parsedData.content;
          this.setState({
            messages: [...this.state.messages, parsedData],
            currentUser: newName});
        break;
      }
    }
  }

  addMessage(messageName, userName, type) {
    const newMessage = {
      type: type,
      content: messageName,
      username: userName,
    }
    this.chatSocket.send(JSON.stringify(newMessage));
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.name === "incomingMessage") {
     this.addMessage(event.target.value, this.state.currentUser.name, event.target.name);
     event.target.value = null;
    }
    if (event.key === 'Enter' && event.target.name === "incomingNotification") {
      this.addMessage(event.target.value, this.state.currentUser.name, event.target.name)
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty McChatterton</a>
        </nav>
        <Message data={this.state.messages} notifications={this.state.nofifications}/>
        <ChatBar currentUser={this.state.currentUser.name} handleKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}
export default App;
