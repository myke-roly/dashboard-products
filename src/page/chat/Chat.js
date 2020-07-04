import React from 'react';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = React.useState('');
  async function sendMessage() {
    try {
      const url =
        'https://api.chat-api.com/instance141490/sendMessage?token=0c8719os2bkqlgev';
      const data = {
        sent: true,
        chatId: '5491121773591@c.us',
        body: message,
      };
      const response = await axios({
        url: url,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        data: data,
      });
      console.log(response);
    } catch (error) { console.error(error)}
  }
  return (
    <div>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default Chat;
