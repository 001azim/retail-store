import axios from "axios";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import {useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { checklogin } from "../reducers/userSlice";
import useSelector from "react-redux";


function SALOGIN(){
const login=useSelector((state)=>state.user.loginValue)
console.log(loginValue)
    const getdata=()=>{

        axios({
            method:'GET',
            url:
            'https://41d08e21-9a75-47f9-b74e-547d9ceecbe0.mock.pstmn.io',
            data:{}
        }).then(function(response){
            console.log(response)
            
                if(loginValue.name=="admin" && loginValue.password==12345678){

                alert("success")
                // Navigate=useNavigate()
            }
            else{
                alert("wrong username/password")
            }

        })
    }
   

return(
    <>
    <h1>superadmin login page</h1>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>user name</Form.Label>
         <Form.Control type="name" placeholder="Enter name" id="name" onKeyUp={(e)=>ckecklogin({
    ...loginValue,
    name:e.target.value})}/>
         <Form.Text className="text-muted">
          We'll never share your email with anyone else.
         </Form.Text>
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" id="password"  onKeyUp={(e)=>checklogin({
            ...loginValue,
            password:e.target.value
        })}/>
       </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
       </Form.Group>
       <Button variant="primary" type="button" onClick={()=>getdata()} >
         Submit
       </Button>
     </Form>
</>
)
}
export default SALOGIN;