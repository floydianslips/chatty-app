// Create structure for new message
let AddMessage = (messageName, userName, type) => {
  const newMessage = {
    type: type,
    content: messageName,
    username: userName,
  }
  return newMessage;
}

module.exports = AddMessage;
