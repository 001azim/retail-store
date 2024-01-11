import Common from "../components/common";
import React ,{useState} from "react";
import { useSelector } from "react-redux";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../css/message.css'
const MIN_TEXTAREA_HEIGHT = 10;

const Contactus = () => {

  const textareaRef = React.useRef(null);
  const [value, setValue] = React.useState("");
  const onChange = (event) => setValue(event.target.value);
  let apidata = useSelector((state) => state.customer.apidata)
  let [isdisplay,setisdisplay] = useState(false);

  React.useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  


  return (
    <div>
      <Common />
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
            
            {apidata.map((Member,i)=>(
              <a onClick={()=>{
                alert(i)
                setisdisplay(true)
                }}><div className="perpersonmsg" key={i}>
              <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="prof" />
              <h5>{Member.name}<span>latest msg</span></h5>
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
            <textarea
            className="textareamsg"
              placeholder="Type Message . . ."
              onChange={onChange}
              ref={textareaRef}
              style={{
                width: "100%",
                minHeight: MIN_TEXTAREA_HEIGHT,
                resize: "none"
              }}
              value={value}
            />
            <button className="btn btn-success" onClick={()=>alert("msg send success fully")} style={{marginLeft: "3px",borderRadius: 50, paddingLeft:30, paddingRight:30}}><i class="fa-regular fa-paper-plane"></i></button>
          </div>
          <div className="msglist">
              <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="prof" />
              <div className="msglistmsg">
                <p>Member namevghcgfdgfdfdfgxfgx gdgfdfdgfdgfxfgfs hgddfdf</p>
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
