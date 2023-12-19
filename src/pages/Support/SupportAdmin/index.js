import React from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';

const SupportAdmin = () => {
  return (
    <div style={{paddingTop: '100px'}}>
    <ChatEngine
      
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName="admin@gmail.com"
      userSecret="admin@gmail.com"
 
    />
    </div>
  );
}


export default SupportAdmin;
