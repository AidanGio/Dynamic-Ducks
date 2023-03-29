import React from "react";
import MessagesLayout from "../layouts/MessagesLayout";

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
  {
    sender: "John",
    recipient: "Sarah",
    message: "Hey, how's it going?",
    timeSent: "2023-03-28T10:15:00",
  },
  {
    sender: "Sarah",
    recipient: "John",
    message: "Not bad, thanks. How about you?",
    timeSent: "2023-03-28T10:17:00",
  },
  {
    sender: "John",
    recipient: "Sarah",
    message: "I'm good, thanks. Just wanted to check in on you.",
    timeSent: "2023-03-28T10:19:00",
  },
  {
    sender: "Sarah",
    recipient: "John",
    message: "That's really nice of you. I'm doing okay, just busy with work.",
    timeSent: "2023-03-28T10:21:00",
  },
  {
    sender: "John",
    recipient: "Sarah",
    message: "I hear you. Let's catch up soon.",
    timeSent: "2023-03-28T10:24:00",
  },
  {
    sender: "Sarah",
    recipient: "John",
    message: "Definitely. Talk to you later.",
    timeSent: "2023-03-28T10:26:00",
  },
  {
    sender: "Michael",
    recipient: "Olivia",
    message: "Hi Olivia, can we meet to discuss the project tomorrow?",
    timeSent: "2023-03-28T11:30:00",
  },
  {
    sender: "Olivia",
    recipient: "Michael",
    message: "Sure, what time works for you?",
    timeSent: "2023-03-28T11:33:00",
  },
  {
    sender: "Michael",
    recipient: "Olivia",
    message: "How about 2pm?",
    timeSent: "2023-03-28T11:35:00",
  },
  {
    sender: "Olivia",
    recipient: "Michael",
    message: "Sounds good. Let's meet in the conference room.",
    timeSent: "2023-03-28T11:37:00",
  },
  {
    sender: "Michael",
    recipient: "Olivia",
    message: "Okay, see you tomorrow.",
    timeSent: "2023-03-28T11:40:00",
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
    <MessagesLayout>
      <h1>Message Thread</h1>
      <div>
        <MessageTable messages={Messages} />
      </div>
    </MessagesLayout>
  );
};

export default MessagePortal;
