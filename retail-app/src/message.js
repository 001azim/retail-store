// this page has history of messages sent to customers
import Common from "./components/common"

import React, { useState } from 'react'

function MESSAGELST() {

    const [formState, setFormState] = useState([])
    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const config = {
            
            SecureToken: "8962c73c-bdc8-420d-b827-94840798cb3a ",
            To: 'vickymeenu023@gmail.com',
            From: formState.email,
            Subject: "This is the subject",
            Body: `${formState.name} connect to you over email`

        }
        if (window.Email) {
            window.Email.send(config).then(() => alert("Email Sent Successfully"))
            console.log(JSON.stringify(window.Email))

        }
        else {
            alert("no")
        }

    }
    return (
        <div>
            <Common/>
            <form className="flex flex-col justify-center items-center" onSubmit={submitHandler}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formState.name || ""}
                    onChange={changeHandler}
                    className="border border-blue-900"
                />
                < input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formState.email || ""}
                    onChange={changeHandler}
                    className="border border-blue-900"
                />
                {console.log(formState)}
                <input type="submit" value="Send Email" />
            </form>

        </div>
    )




}

export default MESSAGELST