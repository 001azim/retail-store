import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router';
import Logout from '../components/logOut'
import { useNavigate } from 'react-router';
import axios from 'axios';
import { setcreditdetails } from '../slices/customerSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
function Credit() {

  const {credit_details}= useSelector((state) => state.customer)
  const{customerid}=useParams()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  function creditAmount() {
     
    let formData = new FormData();
    formData.append("customer_id",customerid)
    formData.append("last_purchase_at",credit_details.credit_date)
    formData.append("amount",-Number(credit_details.credit_amount))
    formData.append("due_date","")
    formData.append("type","credit")
    

    axios.post('https://agaram.academy/api/retail/index.php?request=create_debit',formData).then(function(response){
        console.log('response',response)

        if(response.data.status=="success"){
            navigate('/debitlist')
        }
        else{
            alert("failed")
        }
       
      
       } )

   
}
  return (
 <>
  <>
    <Container>
      {console.log(credit_details)}
     <br></br>
     <h2> Credit </h2>
       
            <Form>
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">Date of  Credit</InputGroup.Text>
         <Form.Control
         required
             type="date"
             aria-label="Username"
             aria-describedby="basic-addon1"
             onChange={(e) => dispatch( setcreditdetails({ ...credit_details, credit_date: e.target.value }))} 

              />
     </InputGroup>


  

     <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1"> Credit Amount  <i class="fa-solid fa-indian-rupee-sign"></i></InputGroup.Text>

         <Form.Control
             type="number"
             required
             aria-label="Username"
             aria-describedby="basic-addon1"
             onKeyUp={(e) => dispatch( setcreditdetails({ ...credit_details, credit_amount: e.target.value }))} 
             />


     </InputGroup>



 


      

         <Button Class="submit" variant="primary"  onClick={()=>creditAmount()}>submit</Button>

     </Form>
 </Container>
 <Logout/>
 </>
  {customerid}
  {JSON.stringify(credit_details)}
 </>
   
  )
}

export default Credit
