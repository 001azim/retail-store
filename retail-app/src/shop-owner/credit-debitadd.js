import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from "react";
import moment from 'moment'
import '../css/credit-debit.css'
import { useDispatch, useSelector } from "react-redux";
import  {setdetails}  from "../slices/customerSlice.js";
import Button from 'react-bootstrap/Button';
import Common from "../components/common.js"

// credit/debit list of customers


function ADDAMOUNT() {


    //    post details to API

    function Sent() {
       

        let formData = new FormData();
        formData.append("name",cdetails.customer_name)
        formData.append("email",cdetails.email)
        formData.append("address",cdetails.Address)
        formData.append("mobile",cdetails.phone)
       

       
        axios.post('https://agaram.academy/api/retail/index.php?request=create_customer',formData).then(function(response){
            console.log('response',response)
           
          
           } )
    }


    return (

        <>
   <Common/>
            <Container >
          
                <h3 class="heading">Add new customer </h3>

                {/* customer name input */}
                <InputGroup  className="mb-3" required>
                    <InputGroup.Text id="basic-addon1" >Customer Name</InputGroup.Text>
                    <Form.Control
              
             aria-label="Username"
                        aria-describedby="basic-addon1"
                        onKeyUp={(e) => dispatch(setdetails({ ...cdetails, customer_name: e.target.value }))}
                    />
                </InputGroup>

                {/* mobile no input */}

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Mobile</InputGroup.Text>
                    <Form.Control
                    required
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onKeyUp={(e) => dispatch( setdetails({ ...cdetails, mobile: e.target.value }))}
                    />
                </InputGroup>

                 {/* email input */}

                 <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                    <Form.Control
                    required
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onKeyUp={(e) => dispatch( setdetails({ ...cdetails, email: e.target.value }))}
                    />
                </InputGroup>

                {/* address input */}
                <InputGroup className="mb-3" required>
                    <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                    <Form.Control
                    required
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onKeyUp={(e) =>  dispatch(setdetails({ ...cdetails, Address: e.target.value }))}
                    />
                </InputGroup>

               <button onClick={()=>Sent()}>register</button>
            </Container>

            {console.log('cus_details', cdetails)}

        </>


    )


}

export default ADDAMOUNT

