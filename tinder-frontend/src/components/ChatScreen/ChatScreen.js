import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./ChatScreen.css";
import SelectInput from '@material-ui/core/Select/SelectInput';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Container from '@material-ui/core/Container';

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            message: "Hi!!!!"
        },
        {
            name: "Cute Gril",
            image: "https://media1.tenor.com/images/e475472137ddde55e3805da1d082319a/tenor.gif?itemid=14066818",
            message: "You wish I was real"
        }
    ]);
    const [input, setInput] = useState('');
    const [user, setUser] = useState('Cute Gril');

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
            <p className="match">You are talking with {user}</p>
            <p className="chatScreen_timestamp">YOU MATCHED ON {new Date().toJSON().slice(0, 10).replace(/-/g, '/').toString()}</p>
            <div>{messages.map((message) => (
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar className="chatScreen_image" alt={message.name} src={message.image}></Avatar>
                        <p className="chatScreen_text">{message.message}</p>
                    </div>) : (<div className="chatScreen_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>)))}</div>
            <form className="chatScreen_input" onSubmit={handleSend}>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." type="text" className="chatScreen_inputField" />
                {/*<button onClick={handleSend} className="chatScreen_inputButton">SEND</button>*/}
                <div>
                    <IconButton onClick={handleSend} className="chatScreen_inputButton"><SendIcon /></IconButton>
                    <IconButton onClick={handleHeart} className="chatScreen_inputButton"><FavoriteBorderIcon /></IconButton>
                </div>

            </form>
        </div>
    )
}

export default ChatScreen
