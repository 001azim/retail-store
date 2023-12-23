import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { updateDetails } from '../slices/registerSlice';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Validation from './validation';
import '../css/reg-SO.css'
function SO_REG() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let { ownerDetails } = useSelector((state) => state.register);
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
           
            seterror(Validation(ownerDetails))
           } ) 
           navigate("/shopownerlogin");
             
    }
return(
    <>
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 cover'>
        <div className='40-w p-5 rounded bg-white reg'>
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
                            <Form.Label column sm="3">
                                ShopName
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name='shop_name' placeholder="ShopName" className='detail' onChange={Change} />
                            </Col>
                        </Form.Group>
                        <div>
                            <Form.Group as={Row} className="mb-3 mailbox" controlId="formPlaintextPassword">
                                <Form.Label column sm="3">
                                    Email
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control type="email" name='email' placeholder="email" className='detail' onChange={Change} />
                                    {error.email && <span style={{ color: "red" }}>{error.email}</span>}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 pasbox" controlId="formPlaintextPassword">
                                <Form.Label column sm="3">
                                    Password
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="password" name='password' placeholder="Password" className='detail' required onChange={Change} />
                                    {error.password && <span style={{ color: "red" }}>{error.password}</span>}
                                </Col>
                            </Form.Group>
                        </div>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Aadhar
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name='aadhar' placeholder="Aadhar" className='detail' onChange={Change} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Mobile No
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name='phone' placeholder="phone" className='detail' onChange={Change} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                street
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' name='street' placeholder='street' className='detail' onChange={Change} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                City
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name='city' placeholder="city" className='detail' onChange={Change} />
                            </Col>
                        </Form.Group>
                        <div>
                            <Form.Group as={Row} className="mb-3 mailbox" controlId="formPlaintextPassword">
                                <Form.Label column sm="3">
                                    Area
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control type="text" name='area' placeholder="area" className='detail' onChange={Change} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 pasbox" controlId="formPlaintextPassword">
                                <Form.Label column sm="3">
                                    Pincode
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" name='pincode' placeholder="pincode" className='detail' onChange={Change} />
                                </Col>
                            </Form.Group>
                        </div>
                        <div className='align-items-center'>
                            <button className='btn btn-success' type='button' onClick={() => register()}>Register</button>

                        </div>
                        {console.log(ownerDetails)}
                    </Form>
                </div>
            </div>

        </>
    )


}
export default SO_REG