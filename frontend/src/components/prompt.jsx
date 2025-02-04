import { useRef, useState } from "react";

export default function prompt()
{
    const [prompt,set_prompt]=useState('')
    const prompt_input_ref=useRef(null)

    function handleSubmit(e)
    {
        e.preventDefault()
        //console.log(prompt_input_ref.current.value)
        set_prompt(prompt_input_ref.current.value)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={prompt_input_ref} />
            <input type="submit"/>
        </form>
        Last Prompt Submitted: {prompt}
        </>
    );
}