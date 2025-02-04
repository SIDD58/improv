import { set } from 'mongoose';
import Nav from '../components/navbar'
import { useEffect, useState } from 'react';

export default function HomePage()
{
    const [displayName,set_displayName]=useState('')
    async function handleLogin()
    {
        try {
            const res=await fetch('http://localhost:3000/auth/google')
        if(res.ok){
            const result=await res.json();
            console.log(result.displayName);
            set_displayName(result.displayName);
        }
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    return(
        <>
                <Nav></Nav>
                <button onClick={handleLogin}>Login</button>
                <p>{displayName}</p>

        </>

    );
}