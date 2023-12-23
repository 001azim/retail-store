import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import React, { useEffect,useState } from 'react'
import { setdetails,setduedetails } from '../slices/customerSlice';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

function Add_debit() {
    let [alertdate,setalertdate]=useState('')

    const dispatch=useDispatch()

    let customer_details=useSelector((state)=>state.customer.details)
    const { userLogin, ownerid } = useSelector((state) => state.shopOwerLogin)
    const {customer_id}= useSelector((state) => state.customer)
    
let cdetails=useSelector((state)=>state.customer.due_details)

 const navigate=useNavigate()

useEffect(()=>{
    if(cdetails.due_date){
       setalertdate(moment(cdetails.due_date).subtract(7,"day").format('LL')) 
   }},[cdetails.due_date])

   {console.log(alertdate)}

    const setduedate =()=>{
    

        if (cdetails.due_amount <= 4999) {
            dispatch(setduedetails({...cdetails,due_date : moment(cdetails.Last_purchase_date).add(90,"day").format('LL')}))
     console.log(cdetails.due_amount)
    
         }
         else {
             dispatch(setduedetails({...cdetails,due_date : moment(cdetails.Last_purchase_date).add(7,"day").format('LL')}))
             console.log(cdetails.due_amount)
          
            }
    }
    
    
useEffect(()=>{
    setduedate()
},[cdetails.due_amount,cdetails.Last_purchase_date])


function Sent() {
       

    
    let formData = new FormData();
    formData.append("name",cdetails.Last_purchase_date)
    formData.append("email",cdetails.due_amount)
    formData.append("address",cdetails.due_date)
    

   
    // axios.post('https://agaram.academy/api/retail/index.php?request=create_customer',formData).then(function(response){
    //     console.log('response',response)
       
      
    //    } )
   
}


  return (
  <>
    <Container>
        {console.log('customer_details',customer_details)}
            <Form>
         {/* date of last purchase */}
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">Date of last purchase</InputGroup.Text>
         <Form.Control
         required
             type="date"
             aria-label="Username"
             aria-describedby="basic-addon1"
             onChange={(e) => dispatch( setduedetails({ ...cdetails, Last_purchase_date: e.target.value }))} />
     </InputGroup>


     {/* due amount */}

     <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1"> Due Amount  <i class="fa-solid fa-indian-rupee-sign"></i></InputGroup.Text>

         <Form.Control
             type="number"
             required
             aria-label="Username"
             aria-describedby="basic-addon1"
             onKeyUp={(e) => dispatch( setduedetails({ ...cdetails, due_amount: e.target.value }))} />


     </InputGroup>



 


         {/* due date  */}

         <InputGroup className="mb-3">
             <InputGroup.Text id="basic-addon1">Due Date</InputGroup.Text>
             <Form.Label htmlFor="disabledTextInput">{cdetails.due_date}</Form.Label>

         </InputGroup>

         <Button Class="submit" variant="primary"  onClick={()=>Sent()}>submit</Button>

     </Form>
 </Container>
 </>
    )
}

export default Add_debit