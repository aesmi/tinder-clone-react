import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./ChatScreen.css";
import SelectInput from '@material-ui/core/Select/SelectInput';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            message: "Hi!!!!"
        }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        //prevents refresh
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }

    const handleHeart = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: "❤" }])
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">YOU MATCHED ON {new Date().toJSON().slice(0, 10).replace(/-/g, '/').toString()}</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar className="chatScreen_image" alt={message.name} src={message.image}></Avatar>
                        <p className="chatScreen_text">{message.message}</p>
                    </div>) : (<div className="chatScreen_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>)))}
            <form className="chatScreen_input">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." type="text" className="chatScreen_inputField" />
                <div><button onClick={handleSend} className="chatScreen_inputButton">SEND</button>
                    <IconButton onClick={handleHeart} className="chatScreen_inputButton"><FavoriteBorderIcon /></IconButton>
                </div>
            </form>
        </div>
    )
}

export default ChatScreen
