import socket from '../socket'
import { useEffect, useState } from 'react';

export default function namegame()
{
    const [message,setMessage]=useState('');
    const [messages,setMessages]=useState([]);
    const [player_name,setPlayerName]=useState('');
    const [player_names,SetPlayerNames]=useState([]);
    const [counter,setCounter]=useState(0);

    useEffect(()=>{

        socket.on('connect', () => {
            console.log('Connected to WebSocket Server:', socket.id);
        });

        socket.on('receiveMessage',(msg)=>{
            setMessages(msg)
        });


        socket.on('player_info',(player_info)=>{
            console.log(player_info['names'].map(player=>player.player_name));
            SetPlayerNames(player_info['names'].map(player=>player.player_name));
            setCounter(player_info['count']);
        })

        return ()=>{
            socket.off('receiveMessage');
        };

    },[]);

    useEffect(
        ()=>{

        },
        [counter]
    )
    
    const sendMessage = () => {
        socket.emit('sendMessage', message);
        setMessage('');
    };

    function savePlayer()
    {
        console.log(player_name)
        socket.emit('new_player',player_name);
    }

    return (
        <div>
            <h1>Current Players</h1>
            {
                player_names.map( 
                    (name,id)=>(<p key={id}>{name}</p>)
                )
            }
            <p>Waiting for {4 - counter} Players</p>
            <h1>Enter Your Dispaly Name</h1>
            <input type="text" value={player_name} onChange={(e)=>{setPlayerName(e.target.value)}} />
            <button onClick={savePlayer}>Enter Your Name</button>


            <h1>Multiplayer Game</h1>
            <input
                type="text"
                value={message}

                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Enter Your Message</button>
        </div>
    );
}

