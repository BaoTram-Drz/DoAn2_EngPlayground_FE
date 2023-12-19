import React, { useState } from 'react';
import {styles} from './styles';
const Avatar = props => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div style={props.style}>
            <div
            className='transition-3'
            style = {{...styles.avatarHello,
            ...{opacity: isHovered?'1':'0'}}}
            >Hey it's Healer</div>
            <div 
            className='transition-3'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => props.onClick && props.onClick()}
            style={{...styles.chatWithMeButton,
            ...{border: isHovered?'1px solid #f9f0ff':'4px solid #7a39e0'}}}/>
        </div>
    )
}
export default Avatar;