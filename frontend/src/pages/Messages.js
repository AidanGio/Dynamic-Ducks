import React from "react";
import OperationsManagerLayout from "../layouts/OperationsManagerLayout";

const Messages = [
  {
    sender: "John",
    recipient: "Emily",
    message: "Hey, how's it going?",
    timeSent: "2022-04-05T14:30:00",
  },
  {
    sender: "Emily",
    recipient: "John",
    message: "Good, thanks! How about you?",
    timeSent: "2022-04-05T14:32:00",
  },
  {
    sender: "John",
    recipient: "Emily",
    message: "Not bad, just busy with work. How's the project coming along?",
    timeSent: "2022-04-05T14:35:00",
  },
  {
    sender: "Emily",
    recipient: "John",
    message:
      "It's going well! We're on track to finish on time. How about your team?",
    timeSent: "2022-04-05T14:40:00",
  },
];

function MessageRow({ message }) {
  return (
    <tr>
      <td>{message.sender}</td>
      <td>{message.recipient}</td>
      <td>{message.message}</td>
      <td>{new Date(message.timeSent).toLocaleString()}</td>
    </tr>
  );
}

function MessageTable({ messages }) {
  const rows = [];

  messages.forEach((message) => {
    rows.push(<MessageRow message={message} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Sender</th>
          <th>Recipient</th>
          <th>Message</th>
          <th>Time Sent</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const MessagePortal = () => {
  return (
    <OperationsManagerLayout>
      <h1>Message Thread</h1>
      <div>
       
        <MessageTable messages={Messages} />
      </div>
    </OperationsManagerLayout>
  );
};

export default MessagePortal;
