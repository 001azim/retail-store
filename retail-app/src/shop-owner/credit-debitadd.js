import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import React, { useState } from "react";
import { Button } from "bootstrap";
import moment from 'moment'
import '../css/credit-debit.css'


function ADDAMOUNT() {





    let [details, setdetails] = useState({
        customer_name: "",
        mobile: "",
        Address: "",
        Last_purchase_date: "",
        due_amount: "",
        due_date: ""

    })


    if (details.due_amount <= 4999) {
        details.due_date = moment(details.Last_purchase_date).add(90, "day").format('LL')

    }
    else {
        details.due_date = moment(details.Last_purchase_date).add(7, "day").format('LL')
    }



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


            <Container>

                <h1>Add credit or debit page </h1>

                {/* customer name input */}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" >Customer Name</InputGroup.Text>
                    <Form.Control

                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onKeyUp={(e) => setdetails({ ...details, customer_name: e.target.value })}
                    />
                </InputGroup>
                {/* mobile no input */}

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Mobile</InputGroup.Text>
                    <Form.Control
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onKeyUp={(e) => setdetails({ ...details, mobile: e.target.value })}
                    />
                </InputGroup>

                {/* address input */}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                    <Form.Control
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onKeyUp={(e) => setdetails({ ...details, Address: e.target.value })}
                    />
                </InputGroup>

                {/* date of last purchase */}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Date of last purchase</InputGroup.Text>
                    <Form.Control
                        type="date"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setdetails({ ...details, Last_purchase_date: e.target.value })} />


                </InputGroup>


                {/* due amount */}

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"> Due Amount  <i class="fa-solid fa-indian-rupee-sign"></i></InputGroup.Text>

                    <Form.Control
                        type="number"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onKeyUp={(e) => setdetails({ ...details, due_amount: e.target.value })} />


                </InputGroup>



                <Form>


                    {/* due date  */}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Due Date</InputGroup.Text>
                        <Form.Label htmlFor="disabledTextInput">{details.due_date}</Form.Label>

                    </InputGroup>

                    {/* <Button variant="outline-primary">Primary</Button>{' '} */}
                    <button type onClick={Sent}> submit</button>
                </Form>
            </Container>

            {console.log('cus_details', details)}

        </>


    )


}

export default ADDAMOUNT

