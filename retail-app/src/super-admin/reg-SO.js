import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.css';
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
    let [error, seterror] = useState({})
    //   const errorValidation=(e)=>{
    //     seterror(Validation(data))
    //   }

    const register = () => {
        // if(error){
        //     seterror(Validation(ownerDetails))  
        // }
        // if(!error){
        //     axios({

        //         method: 'POST',
        //         url: ' https://3cf5b333-aa86-45ee-8038-d71110710cf7ca.mock.pstmn.io/soregister',
        //         data: {
        //             ownerDetails

        //       }}).then(function(response){

        //         console.log("Success",response)     
        //         // seterror(Validation(data))
        //        } ) 
        //        navigate("/shopownerlogin"); 
        // }
        let formData = new FormData();
        formData.append("request", "create_shopowner")
        formData.append("name", ownerDetails.name)
        formData.append("email", ownerDetails.email)
        formData.append("password", ownerDetails.password)
        formData.append("aadhar", ownerDetails.aadhar)
        formData.append("street", ownerDetails.street)
        formData.append("city", ownerDetails.city)
        formData.append("area", ownerDetails.area)
        formData.append("phone", ownerDetails.phone)
        formData.append("pincode", ownerDetails.pincode)
        formData.append("shop_name", ownerDetails.shop_name)

        console.log(formData)
        //if(ownerDetails.trim().length!==""){
            axios.post('https://agaram.academy/api/retail/index.php?request=create_shopowner', formData).then(function (response) {
            console.log(response)

            if (response.data.status == "success") {
                navigate("/");
            }
            else {
                alert("Enter valid inputs")
            }

        })
        //    navigate("/shopownerlogin");
        }
        // else{
        //     alert("Input shouldn't empty")
        // }

        

    //}
    return (
        <>
            <div className='login template d-flex justify-content-center align-items-center 100-w vh-120 bg'>
                <div className='40-w p-5'>
                    <div className='positionchange'>
                    <Form>
                        <h1 className='align-items-center'> Register </h1>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                UserName
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name='name' placeholder="UserName" className='detail' required onChange={Change} />
                                {error.Username && <span style={{ color: "red" }}>{error.Username}</span>}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                ShopName
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name='shop_name' placeholder="ShopName" className='detail' required onChange={Change} />
                            </Col>
                        </Form.Group>
                        <div>
                            <Form.Group as={Row} className="mb-3 mailbox" controlId="formPlaintextPassword">
                                <Form.Label column sm="3">
                                    Email
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control type="email" name='email' placeholder="email" className='detail' required onChange={Change} />
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
                                <Form.Control type="text" name='aadhar' placeholder="Aadhar" className='detail' required onChange={Change} />
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

            </div>

        </>
    )


}
export default SO_REG