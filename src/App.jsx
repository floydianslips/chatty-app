import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import NavBar from './NavBar.jsx';
import AddMessage  from './Utils.jsx';

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      currentUser: {name: 'Chatty'}, //Default username
      messages: [],
      numberUsers: 0,
    }
   this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    this.chatSocket = new WebSocket("ws://localhost:3001");
    this.chatSocket.onopen = (event) => {
      this.chatSocket.send(JSON.stringify("Opened"));
    }
    this.chatSocket.onmessage = (event) => {
      let parsedData = JSON.parse(event.data);
      if (Number.isInteger(parsedData)) {
        this.setState({numberUsers: parsedData})
      }

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

  handleKeyPress = (event) => {
    let newMessage = AddMessage(event.target.value, this.state.currentUser.name, event.target.name);

    if (event.key === 'Enter') {
     this.chatSocket.send(JSON.stringify(newMessage));
     if (event.target.name === "incomingMessage") {
      event.target.value = null;
     }
    }
  }

  render() {
    return (
      <div>
        <NavBar numberUsers={this.state.numberUsers} />
        <Message data={this.state.messages} notifications={this.state.nofifications}/>
        <ChatBar currentUser={this.state.currentUser.name} handleKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default App;
