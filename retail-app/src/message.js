// // this page has history of messages sent to customers
// import Common from "./components/common";
// import emailjs from 'emailjs-com'

// export default function MESSAGELST() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_27vc988', 'template_86u9j8m', e.target, 'ljpE_38wT_cNJoG_E')
//       .then((result) => {
//           console.log(result);
//       }, (error) => {
//           console.log("error",error);
//       });
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//         <Common/>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message"  />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }
import Common from "./components/common";
import React, { useState } from "react";

const Contactus = () => {
  const [formState, setFormState] = useState({});

  

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

const handleclick = (event) =>{
  event.preventDefault();
  
    window.Email.send({  
    SecureToken:"d4f462fc-a0dc-45f4-97ab-d7ac5db7f6fa",
    To: `${formState.email}`,
    From: "safeeqameen@gmail.com",
    Subject: "This is the subject",
    Body: `${formState.name} And this is the body`,
    }).then(()=>alert("msg send sucessfully"));
    }



  return (
    <div>
      <Common/>
      <form className="flex flex-col justify-center items-center" onSubmit={handleclick}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formState.name || ''}
          onChange={changeHandler}
          className="border border-blue-900"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formState.email || ''}
          onChange={changeHandler}
          className="border border-blue-900"
        />
        <input type="submit" value="Send Email" />
      </form>
    </div>
  )}

  
export default Contactus;