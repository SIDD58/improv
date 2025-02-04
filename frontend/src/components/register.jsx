import { useState } from "react";


export default function Register()
{
     const [pi, setPi]=useState(Array(5).fill(''));


    function handleSubmit()
    {

    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">First Name: </label>
            <input type="text" name="" id="" />
            <br />
            <label htmlFor="">Last Name: </label>
            <input type="text" name="" id="" />
            <br />
            <label htmlFor="">Address: </label>
            <input type="text" name="" id="" />
            <br />
            <input type="text" name="" id="" />
            <br />
            <input type="text" name="" id="" />
            <br />
            <label htmlFor="">Email: </label>
            <input type="text" name="" id="" />
            <br />
            <label htmlFor="">Phone number: </label>
            <input type="text" name="" id="" />
            <br />
            <label htmlFor="">Gender: </label>
            <input type="checkbox" name="" id="" />
            <br />
            <label htmlFor="">Comments: </label>
            <textarea name="" id=""></textarea>
            <br />
            <input type="submit" value="Submit" />
        </form>
        </>

    );
}