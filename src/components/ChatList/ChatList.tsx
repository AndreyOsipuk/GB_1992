import { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { Chat } from 'src/common-types';

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
}

export const ChatList: FC<ChatListProps> = ({ chats, onAddChat }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      onAddChat({
        id: nanoid(),
        name: value,
      });

      setValue('');
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button>Create Chat</button>
      </form>
    </>
  );
};
