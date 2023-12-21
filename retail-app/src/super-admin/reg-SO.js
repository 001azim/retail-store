import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import axios from "axios";
import {useSelector,useDispatch} from 'react-redux'
import { updateDetails } from '../slices/registerSlice';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Validation from './validation';
import '../css/reg-SO.css'
function SO_REG(){
    const navigate = useNavigate();
    const dispatch=useDispatch();
    let {ownerDetails}=useSelector((state) => state.register);
   
      const Change = (e) => {
        const value = e.target.value;
        dispatch(updateDetails({
          ...ownerDetails,
          [e.target.name]: value
        }));
        
      };
      let [error,seterror]=useState({})
   
    const register=()=>{
        
        axios({
          
            method: 'POST',
            url: ' https://2cf5b323-aa86-45ee-8028-d711979cf7ca.mock.pstmn.io/soregister',
            data: {
                ownerDetails
                
          }}).then(function(response){
            // console.log("Success",response)     
            seterror(Validation(ownerDetails))
           } ) 
           navigate("/shopownerlogin");
             
    }
return(
    <>
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 cover'>
        <div className='40-w p-5 rounded bg-white'>
            <Form>
            <h1> Register </h1>
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
                Aadhar
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" name='aadhar' placeholder="Aadhar" onChange={Change}/>
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

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                City
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" name='city' placeholder="city" onChange={Change}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Pincode
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" name='pin' placeholder="pincode" onChange={Change}/>
                </Col>
            </Form.Group>
            <div className='d-grid'>
                    <button className='btn btn-success' type='button' onClick={()=>register()}>Register</button>
          
                </div>

            </Form>
        </div>
    </div>
    {/* <button className='btn btn-primary' type="button" onClick={register}>Register</button> */}
</>
)


}
export default SO_REG