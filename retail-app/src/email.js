import React, { useState } from 'react' 
import emailjs from '@emailjs/browser';
import "./css/email.css"


const EmailForm = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
let date ="12.1.2024"
const handleSubmit =(e)=>{
   
    e.preventDefault()
    const serviceId ="service_w8cin0h";
    const templateId ='template_az8j9da';
    const publicKey ="EHaj3wIqUUf63zn6t"

    const templateParams ={
from_name : name,
from_email : email,
to_name : "",
message : `your payment due on ,${date}, make sure to pay on time to avoid fine`

    };
  emailjs.send(serviceId, templateId ,templateParams, publicKey).then((response) => {
    console.log('Email sent successfully!', response);
    setName('');
    setEmail('');
    setMessage('');
})
.catch((error) => {
console.error('Error sending email:', error);
});
}

return (
    <>
<form onSubmit={handleSubmit} className='emailForm'>
<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e) => setName(e.target.value)}/>
<input
type="email"
placeholder="Your Email"
value={email}
onChange={(e) => setEmail(e.target.value)}/>
<textarea
cols="30"
rows="10"
value={message}
onChange={(e) => setMessage(e. target.value)}>
</textarea>
<button type="submit">Send Email</button>
</form>
</>
)
}
export default EmailForm