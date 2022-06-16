import { Authors } from 'src/common-types';
import { messageReducer } from './reducer';

test('reducers', () => {
  const state = messageReducer(
    {
      default: [{ id: '1', author: Authors.BOT, text: 'Hello to this chat' }],
    },
    {
      type: 'MESSAGES::ADD_MESSAGE',
      chatName: 'default',
      message: { author: Authors.USER, text: '1' },
    }
  );
  expect(state).toEqual({
    profile: { name: 'gb', visible: true },
    messages: {
      default: [
        { id: '1', author: 'BOT', text: 'Hello to this chat' },
        { id: 'VrtvzyogY7xhkR0N664P1', author: 'USER', text: '1' },
      ],
    },
  });
});
