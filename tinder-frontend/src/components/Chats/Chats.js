
import React from 'react';
import Chat from './Chat/Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat name="uwu" message="owo"
            profilePic="owo"
            timestamp="Today"></Chat>
        </div>
    )
}

export default Chats