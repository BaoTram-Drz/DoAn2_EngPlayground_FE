import React, { useState, useEffect } from 'react';
import {ChatEngineWrapper, Socket, ChatFeed} from 'react-chat-engine';
import {styles} from '../styles';

const ChatEngine = (props) => {
    console.log(props);
    const [showChat, setShowChat] = useState(false);
    useEffect(() => {
        if(props.visible) {
            setTimeout(() => {
                setShowChat(true);
            },500)
        }
      
    })
    useEffect(() => {
        if (props.visible) {
            setShowChat(true);
        }
    }, [props.visible]);
    return (
        <div
        className='transition-5'
        style={{
           
                height: props.visible?'100%':'0%',
                zIndex: props.visible?'10000':'0',
                width:'100%',
                backgroundColor:'white'
          
        }}>
            {
               showChat &&
                <ChatEngineWrapper>
                    <Socket
                  projectID={process.env.REACT_APP_CE_PROJECT_ID}
                   userName={props.user.email}
                   userSecret={props.user.email}
                    />
                    <ChatFeed
                activeChat={props.chat.id}
                    />
                </ChatEngineWrapper>
        
            }
        </div>
    )
}
export default ChatEngine;