import socket from '../socket'
import { useEffect, useState } from 'react';

export default function namegame()
{
    const [message,setMessage]=useState('');
    const [messages,setMessages]=useState([]);
    const [some,setSome]=useState('a');
    const [counter,setCounter]=useState(0);

    useEffect(()=>{

        socket.on('connect', () => {
            console.log('Connected to WebSocket Server:', socket.id);
        });
        socket.on('receiveMessage',(msg)=>{
            setMessages((prevMessages) => [...prevMessages, msg])
        });

        return ()=>{
            socket.off('receiveMessage');
        };

    },[]);
    
    const sendMessage = () => {
        socket.emit('sendMessage', message);
        setCounter(counter+1)
        setMessage('');
    };

    return (
        <div>
            <h1>Multiplayer Game</h1>
            {counter != 0 && <p>{counter} Players joined</p>}
            <div>
                {messages.map((msg, idx) => (
                    <p key={idx}>{msg} Joined</p>
                ))}
            </div>
            <input
                type="text"
                value={message}

                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Enter Your Name</button>
        </div>
    );
}

