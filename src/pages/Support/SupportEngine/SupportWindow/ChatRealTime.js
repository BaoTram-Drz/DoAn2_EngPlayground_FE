import React from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';

const ChatRealTime = () => {
    console.log(localStorage)
  return (
    <div style={{paddingTop: '100px'}}>
    <ChatEngine
      
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
    //   userName={localStorage.getItem("chat_user")}
    //   userSecret={localStorage.getItem("chat_user")}
      userName={localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).email : ''}
      userSecret={localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).email : ''}
    />
    </div>
  );
}


export default ChatRealTime;