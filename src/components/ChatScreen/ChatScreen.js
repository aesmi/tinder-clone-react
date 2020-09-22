import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: "Andy",
            image: "...",
            message: "Hi!!!!"
        }
    ]);


    return (
        <div className="chatScreen">
            <p>YOU MATCHED WITH HER ON 20/9/2020</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar className="chatScreen" alt={message.name} src={message.image}></Avatar>
                        <p>{message.message}</p>
                    </div>) : (<div className="chatScreen_message">
                        <p clasSName="chatScreen_text">{message.message}</p>
                    </div>)))}
        </div>
    )
}

export default ChatScreen
