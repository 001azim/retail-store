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
import { useSelector } from "react-redux";
import InputGroup from 'react-bootstrap/InputGroup';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import './css/message.css'

const MIN_TEXTAREA_HEIGHT = 10;

const Contactus = () => {
  //   const [formState, setFormState] = useState({});

  const textareaRef = React.useRef(null);
  const [value, setValue] = React.useState("");
  const onChange = (event) => setValue(event.target.value);
  let apidata = useSelector((state) => state.customer.apidata)
  console.log(apidata)
  let [isdisplay, setisdisplay] = useState(false);
  let [message, setmessage] = useState({
    userid: null,
    msge: ["ghfg", "fgcgxvx", "vhgvcgcgcg"]
  })
  let [id, setid] = useState(null)



  React.useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  let messagesmsg = [{
    id: 0,
    message: ["ghghgh", "jhjhg"]
  },
  {
    id: 1,
    message: ["gfgdgdnjh", "cgswW", "jghfgfvgcg"]
  },
  {
    id: 2,
    message: ["hghhffyfyfy", "tdrdrse32u", "gyryrrttdgffx"]
  }
  ]



  return (
    <div>
      <Common />
      {/* <form className="flex flex-col justify-center items-center" onSubmit={handleclick}>
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
      </form> */}
      <div className="msgbox">
        <div className="leftmsgbox">
          <div className="leftheader">
            <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="prof" />
            <h4>Owner name<span>Total Member : {apidata.length}</span></h4>
          </div>
          <div className="msgsearch">
            <Form>
              <InputGroup className='my-3 search'>
                <Form.Control placeholder='Search contacts' />
              </InputGroup>
            </Form>
          </div>
          <div className="msgperson">

            {apidata.map((Member, i) => (

              <a onClick={() => {
                alert(i)
                setisdisplay(true)
                setid(i)
              }}><div className="perpersonmsg" key={i}>
                  <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="prof" />
                  <h5>{Member.name}<span >latest msg</span></h5>
                </div></a>
            ))}

          </div>
        </div>
        <div className="rightmsgbox">
          <div>
            <div className="rightmsgheader">
              <h6>Member Name</h6>
              <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="prof" />
            </div>
            <div className="rightscrollsection">
              <div className="rightmsgsection">
                <form >
                  <textarea
                    className="textareamsg"
                    placeholder="Type Message . . ."
                    onChange={onChange}
                    // onKeyUp={(e)=>console.log(e.target.value)}
                    ref={textareaRef}
                    id="msgtextarea"

                    style={{
                      width: "100%",
                      minHeight: MIN_TEXTAREA_HEIGHT,
                      resize: "none"
                    }}
                    value={value}
                  />
                  <button className="btn btn-success" type="button" onClick={()=> alert ("msg send sucfly")} style={{ marginLeft: "3px", borderRadius: 50, paddingLeft: 30, paddingRight: 30 }}><i class="fa-regular fa-paper-plane"></i></button>
                </form>
              </div>
              <div className="msglist">
                <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="prof" />
                <div className="msglistmsg">

                  <p>{message.msge}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contactus;
