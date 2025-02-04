import { useRef,useState } from "react";

export default function maillist()
{
    var email_input_ref=useRef(null)
    var message_input_ref=useRef(null)

    //var [input_state,set_input_state]=useState(Array(2).fill(""))
    async function handleSubmit(e)
    {
        // If we do not prevent the default behaviour then there will be problem 
        e.preventDefault();
        console.log("Something happened")

        var input_info={
            "email":email_input_ref.current.value,
            "message":message_input_ref.current.value
        }

        // URL search paramters need to be used to stop the preflight request we need to change the content type to application/x-www-form-urlencoded form 
        const data=new URLSearchParams()
        data.append('email',input_info['email']);
        data.append('message',input_info['message']);

        // type to text 
        const DATA = JSON.stringify(input_info);




        // Calling fetch asynchronous function and setting fetch paramters 
        try {
            const response= await fetch(
                //"https://script.google.com/macros/s/AKfycbyf9a-ebIrRDVRzfznwoPrs-TJ-vmckkueVQ2GVrQjBp91T55VFWbXaUKnsjzcDMBRi/exec",
                "https://script.google.com/macros/s/AKfycbyFuIVIQnhhinTtl0F8gvgitidFX4sHoTAtYCIF4ODaZMma4hodm8r1_P0ynlUcJfSt/exec",
                //"https://script.google.com/macros/s/AKfycbyFuIVIQnhhinTtl0F8gvgitidFX4sHoTAtYCIF4ODaZMma4hodm8r1_P0ynlUcJfSt/exec",
                {
                    redirect: "follow",
                    method:"POST",
                    body:DATA,
                    //body:data.toString(),
                    //body:JSON.stringify(input_info),  // content-type no more application/json
                    headers:{
                        "Content-Type": "text/plain;charset=utf-8"
                        //"Content-Type":"application/x-www-form-urlencoded"
                    }
                }
            );
        } catch (error) {
            console.log(error)
            
        }



        // Handling fetch promise 
        //set_input_state([email_input_ref.current.value,message_input_ref.current.value])
    }
    return(
        <>
        <h1>Join our Mailing List</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter Your Email Address: </label>
            <input type="email" name="" id="" ref={email_input_ref} />
            {/* <p>Email :  {input_state[0]}</p> */}
            <br />
            <label htmlFor="">Enter your Message: </label>
            <textarea name="" id="" ref={message_input_ref}></textarea>
            {/* <p>Message : {input_state[1]}</p> */}
            <input type="submit"/>
           </form>
           </>
    );
}