import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react'
import { setduedetails } from '../slices/customerSlice';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import Logout from '../components/logOut'



function Add_debit() {
    let [alertdate, setalertdate] = useState('')
    const dispatch = useDispatch()
    const { due_amount } = useSelector((state) => state.customer)
    let cdetails = useSelector((state) => state.customer.due_details)
    const navigate = useNavigate()
    const { customerid } = useParams()




    useEffect(() => {
        if (cdetails.due_date) {
            setalertdate(moment(cdetails.due_date).subtract(7, "day").format('LL'))
        }
    }, [cdetails.due_date])



    const setduedate = () => {
        if (cdetails.due_amount <= 4999) {
            dispatch(setduedetails({ ...cdetails, due_date: moment(cdetails.Last_purchase_at).add(90, "day").format('LL') }))
        }
        else {
            dispatch(setduedetails({ ...cdetails, due_date: moment(cdetails.Last_purchase_at).add(7, "day").format('LL') }))
        }
    }



    useEffect(() => {
        setduedate()
    }, [cdetails.due_amount, cdetails.Last_purchase_at])



    function Sent() {



        let formData = new FormData();
        formData.append("customer_id", customerid)
        formData.append("last_purchase_at", cdetails.Last_purchase_at)
        formData.append("amount", cdetails.due_amount)
        formData.append("due_date", cdetails.due_date)
        formData.append("type", "debit")



        if (due_amount + Number(cdetails.due_amount) <= 5000) {
            axios.post('https://agaram.academy/api/retail/index.php?request=create_debit', formData).then(function (response) {
                console.log('response', response)
                if (response.data.status == "success") {
                    navigate('/customerlist')
                }
                else {
                    alert("failed")
                }
            })
        }
        else {
            alert("You already have debt of", due_amount)
        }
    }



    return (
        <>
            <Container>
                <br></br>
                <h2> add due </h2>
                <Form>
                    {/* date of last purchase */}
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Date of last purchase</InputGroup.Text>
                        <Form.Control
                            required
                            type="date"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e) => dispatch(setduedetails({ ...cdetails, Last_purchase_at: e.target.value }))} />
                    </InputGroup>
                    {/* due amount */}
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"> Due Amount  <i class="fa-solid fa-indian-rupee-sign"></i></InputGroup.Text>
                        <Form.Control
                            type="number"
                            required
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onKeyUp={(e) => dispatch(setduedetails({ ...cdetails, due_amount: e.target.value }))} />
                    </InputGroup>
                    {/* due date  */}
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Due Date</InputGroup.Text>
                        <Form.Label htmlFor="disabledTextInput">{cdetails.due_date}</Form.Label>
                    </InputGroup>
                    <Button Class="submit" variant="primary" onClick={() => Sent()}>submit</Button>
                </Form>
            </Container>
            <Logout />
        </>
    )
}

export default Add_debit
