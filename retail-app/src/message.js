// this page has history of messages sent to customers
import emailjs from "emailjs-com";
function MESSAGELST(){
    const sendMsg=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_h1ua5t6','template_krrwmvq',e.target,'_V5kIkwWAXm7PI6Kk')
        .then(res=>{
            console.log(res);
        }).catch(err=>console.log(err))
    }

    return(

<>
<h1> messages history</h1>
name:<input type="text" name="name" placeholder="enter ur name" onKeyUp={sendMsg()}></input>
email:<input type="email" name="mailid" placeholder="enter ur email" onKeyUp={sendMsg()}></input>
message:<input type="text" name="message"></input>
<button type="submit" onClick={sendMsg}>submitt</button>
</>

    )
}

export default MESSAGELST