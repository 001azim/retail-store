import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Validation from './validation';
function SO_REG(){
    const navigate = useNavigate();
    const [data, setData] = useState({
        Username:"",
        Shopname:"",
        email: "",
        password: "",
        mobileno:"",
        address:""
      });
      const Change = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
        
      };
      //   console.log(data)
      const [error,seterror]=useState({})
    //   const errorValidation=(e)=>{
    //     seterror(Validation(data))
    //   }
      
    const register=()=>{
        // if(error){
        //     seterror(Validation(data))  
        // }
        
        axios({
          
            method: 'POST',
            url: ' https://2cf5b323-aa86-45ee-8028-d711979cf7ca.mock.pstmn.io/soregister',
            data: {
                data
                
          }}).then(function(response){
            // console.log("Success",response)     
            navigate("/shopownerlogin");
           } ) 
            
           seterror(Validation(data))  
    }
return(
    <>
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-info
'>
        <div className='40-w p-5 rounded bg-white
'>
            <Form>
            <h1>shopowner register page </h1>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                UserName
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" name='Username' placeholder="UserName"  required onChange={Change}/>
                {error.Username && <span style={{color:"red"}}>{error.Username}</span>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                ShopName
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" name='Shopname' placeholder="ShopName" onChange={Change}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control type="email" name='email' placeholder="Email" onChange={Change} />
                {error.email && <span style={{color:"red"}}>{error.email}</span>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" name='password' placeholder="Password"  required onChange={Change}/>
                {error.password && <span style={{color:"red"}}>{error.password}</span>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Mobile No
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" name='mobileno' placeholder="Mobile" onChange={Change}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Address
                </Form.Label>
                <Col sm="10">
                <Form.Control as="textarea" name='address' rows={3} onChange={Change}/>
                </Col>
            </Form.Group>

            <div className='d-grid'>
                    <button className='btn btn-primary' type='button' onClick={()=>register()}>Register</button>
          
                </div>

            </Form>
        </div>
    </div>
    {/* <button className='btn btn-primary' type="button" onClick={register}>Register</button> */}
</>
)


}
export default SO_REG