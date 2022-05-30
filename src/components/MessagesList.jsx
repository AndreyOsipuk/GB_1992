export const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, idx) => (
        <li key={idx}>
          {message.author}: {message.text}
        </li>
      ))}
    </ul>
  );
};
