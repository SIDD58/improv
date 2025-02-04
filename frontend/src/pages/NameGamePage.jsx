import Nav from '../components/navbar'
import NameGame from '../components/namegame'
import { useEffect, useState } from 'react';4



export default function NameGamePage()
{
//     const [test,settest]=useState('nothing')

// useEffect(
//     ()=>{
//         (async () => {
//             console.log("Hello");
//             const res=await fetch('http://localhost:3000/test')
//             if(res.ok){
//                 const result=await res.json()
//                 console.log(result.message)
//                 settest(result.message)
//             }
//         })();
//     }
// , []);



    return(
        <>
                <Nav></Nav>
                <NameGame></NameGame>
        </>

    );
}