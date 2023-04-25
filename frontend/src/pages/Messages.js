import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "./styles.scss";

const initialMessages = [
  {
    sender: "John",
    message: "Hey, how's it going?",
    timeSent: "2022-04-05T14:30:00",
  },
  {
    sender: "Emily",
    message: "Good, thanks! How about you?",
    timeSent: "2022-04-05T14:32:00",
  },
  {
    sender: "John",
    message: "Not bad, just busy with work. How's the project coming along?",
    timeSent: "2022-04-05T14:35:00",
  },
];

function MessageRow({ message }) {
  return (
    <tr>
      <td>{message.sender}</td>
      <td>{message.message}</td>
      <td>{new Date(message.timeSent).toLocaleString()}</td>
    </tr>
  );
}

function MessageTable({ messages }) {
  const rows = [];

  messages.forEach((message) => {
    rows.push(<MessageRow message={message} key={message.timeSent} />);
  });

  return (
    <table className="message-table">
      <thead>
        <tr>
          <th>Sender</th>
          <th>Message</th>
          <th>Time Sent</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const MessagePortal = ({ auth }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessage = () => {
    const newMessageObj = {
      sender: "You",
      message: newMessage,
      timeSent: new Date().toISOString(),
    };
    setMessages([...messages, newMessageObj]);
    setNewMessage("");
  };

  return (
    <MainLayout auth={auth}>
      <h1>Message Thread</h1>
      <div className="message-thread">
        <MessageTable messages={messages} />
        <div>
          <input
            className="message-input"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="send-button" onClick={handleNewMessage}>
            Send
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default MessagePortal;


