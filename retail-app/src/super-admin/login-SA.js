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
    const getdata=()=>{

        axios({
            method:'GET',
            url:
            'https://41d08e21-9a75-47f9-b74e-547d9ceecbe0.mock.pstmn.io',
            data:{}
        }).then(function(response){
            console.log(response)
            
                if(response.data.status=="success"){

                alert("success")
                localStorage.setItem("loginstatus",true)
                Navigate("/ownerlists")
            }
            else{
                alert("wrong username/password")
            }

        })
    }
   

return(
    <>
   

    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 box'>
        <div className='40-w p-5 rounded bg-white'>
<Form>
    <h2>login page</h2><br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>user name</Form.Label>
         <Form.Control type="name" placeholder="Enter name" id="name" onKeyUp={(e)=>dispatch(checklogin({
    ...login,
    name:e.target.value}))}/>
         <Form.Text className="text-muted">
        
         </Form.Text>
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" id="password"  onKeyUp={(e)=>dispatch(checklogin({
            ...login,
            password:e.target.value
        }))}/>
       </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
       </Form.Group>
       <Button variant="primary" type="button" onClick={()=>getdata()} >
         Submit
       </Button>
     </Form>
     </div>
     </div>
</>
)
}
export default SALOGIN;