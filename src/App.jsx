import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
   }
   this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  addMessage(messageName, userName) {
    const newMessage = {
      type: 'incomingMessage',
      content: messageName,
      username: userName,
    }
    // return newMessage;
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages: messages});
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
     this.addMessage(event.target.value, this.state.currentUser.name);
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty McChatterton</a>
        </nav>
      <Message data={this.state.messages}/>
      <ChatBar currentUser={this.state.currentUser.name} addMessage={this.handleSubmit} handleKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}
export default App;
