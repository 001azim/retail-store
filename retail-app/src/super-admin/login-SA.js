import axios from "axios";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import {useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { checklogin } from "../slices/userSlice";
import  {useSelector, useDispatch } from "react-redux";
import "../css/login-SA.css"





function SALOGIN(){
    
const login=useSelector((state)=>state.user.loginValue)
console.log(login)
const Navigate=useNavigate()
const dispatch=useDispatch()
    
           
        let formData=new FormData()
        formData.append("email",login.email)
        formData.append("password",login.password)
        console.log(formData)
        
        const getdata=()=>{

        
        axios.post('https://agaram.academy/api/retail/index.php?request=super_admin_login',formData)

        .then(function(response){
            console.log(response.data.token)
            
                if(response.data.status=="success"){

                localStorage.setItem("token",response.data.token)
                Navigate("/ownerslist")
            }
            else{
                alert("wrong username/password")
            }

        })
        }
   

return(
    <>
   

    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 box'>
        <div className='40-w p-5 rounded'>
<Form>
    <h2>login page</h2><br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label class="all">User id</Form.Label>
         <Form.Control type="email" placeholder="Enter name" id="mail" onKeyUp={(e)=>dispatch(checklogin({
    ...login,
    email:e.target.value}))}/>
         <Form.Text className="text-muted">
        
         </Form.Text>
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label class="all">Password</Form.Label>
         <Form.Control type="password" placeholder="Password" id="password"  onKeyUp={(e)=>dispatch(checklogin({
            ...login,
            password:e.target.value
        }))}/>
        <br></br>
       </Form.Group>
      <Form.Group className="d-grid" controlId="formBasicCheckbox">
      <Button id="butt" type="button" onClick={()=>getdata()} >
         Submit
       </Button>
       </Form.Group>
     
     </Form>
     </div>
     </div>
</>
)
}
export default SALOGIN;