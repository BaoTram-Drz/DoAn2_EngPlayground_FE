import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import EmailForm from "./EmailForm";
import ChatEngine from "./ChatEngine";
const SupportWindow = props => {
//state
const [user, setUser] = useState(null);
const [chat, setChat] = useState(null);

localStorage.setItem("chat_user", user);
localStorage.setItem("chat", chat);
useEffect(() => {
localStorage.setItem("chat_user", user);
localStorage.setItem("chat", chat);
},[user, chat]);
  return (
    
    <div
      className="transition-5"
      style={{
        zIndex: props.visible ? 10000 : -1,
        ...styles.supportWindow,
        ...{opacity: props.visible ? '1' : '0'}
      }}
    >
      <EmailForm
      setUser={user=>setUser(user)}
      setChat={chat=>setChat(chat)}
      visible= {user===null || chat===null}
      />

      <ChatEngine
      visible={user!==null && chat!==null}
      user={user}
      chat={chat}
      />

 
    </div>
  )
};

export default SupportWindow;
