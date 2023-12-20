import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from "react";
// import { Button } from "bootstrap";
import moment from 'moment'
import '../css/credit-debit.css'
import { useDispatch, useSelector } from "react-redux";
import  {setdetails}  from "../slices/customerSlice.js";
import Button from 'react-bootstrap/Button';

import Common from "../common"
// credit/debit list of customers


function ADDAMOUNT() {


    const dispatch=useDispatch()

let cdetails=useSelector((state)=>state.customer.details)


const setduedate =()=>{

    if (cdetails.due_amount <= 4999) {
        dispatch(setdetails({...cdetails,due_date : moment(cdetails.Last_purchase_date).add(90,"day").format('LL')}))
 console.log(cdetails.due_amount)

     }
     else {
         dispatch(setdetails({...cdetails,due_date : moment(cdetails.Last_purchase_date).add(7,"day").format('LL')}))
         console.log(cdetails.due_amount)
      
        }
}
    

useEffect(()=>{
    setduedate()
},[cdetails.due_amount])

    //    post details to API

    function Sent() {
        alert('g')
        axios({
            method: 'POST',
            url: 'https://2cf5b323-aa86-45ee-8028-d711979cf7ca.mock.pstmn.io/customer_debt',
            data: {}

        }).then(function (response) {
            alert('ok')
            console.log(response)


        })
    }


    return (

        <>
   <Common/>
            <Container >
          
                <h1>Add credit or debit page </h1>

                {/* customer name input */}
                <InputGroup  className="mb-3">
                    <InputGroup.Text id="basic-addon1" >Customer Name</InputGroup.Text>
                    <Form.Control
required
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

                {/* address input */}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                    <Form.Control
                    required
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onKeyUp={(e) =>  dispatch(setdetails({ ...cdetails, Address: e.target.value }))}
                    />
                </InputGroup>

                {/* date of last purchase */}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Date of last purchase</InputGroup.Text>
                    <Form.Control
                    required
                        type="date"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => dispatch( setdetails({ ...cdetails, Last_purchase_date: e.target.value }))} />


                </InputGroup>


                {/* due amount */}

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"> Due Amount  <i class="fa-solid fa-indian-rupee-sign"></i></InputGroup.Text>

                    <Form.Control
                        type="number"
                        required
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onKeyUp={(e) => dispatch( setdetails({ ...cdetails, due_amount: e.target.value }))} />


                </InputGroup>



                <Form>


                    {/* due date  */}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Due Date</InputGroup.Text>
                        <Form.Label htmlFor="disabledTextInput">{cdetails.due_date}</Form.Label>

                    </InputGroup>

                    <Button Class="submit" variant="primary"  onClick={Sent}>submit</Button>
           
                </Form>
            </Container>

            {console.log('cus_details', cdetails)}

        </>


    )


}

export default ADDAMOUNT

