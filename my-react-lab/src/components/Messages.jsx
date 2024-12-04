import React from 'react';
import '../style/Messages.css';

function Messages({ messages }) {
  return (
    <div className="messages">
      <h3>Messages</h3>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
