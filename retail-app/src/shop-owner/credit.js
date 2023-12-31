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
import { useState } from 'react';
function Credit() {
  let [isdisable, setisdisable] = useState()
  const { credit_details, due_amount } = useSelector((state) => state.customer)
  const { customerid } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let token = localStorage.getItem("ownertoken")
  function creditAmount() {

    let formData = new FormData();
    formData.append("customer_id", customerid)
    formData.append("last_purchase_at", credit_details.credit_date)
    formData.append("amount", credit_details.credit_amount)
    formData.append("due_date", "")
    formData.append("type", "credit")



    if (credit_details.credit_date.trim() != 0 && credit_details.credit_amount != 0) {
      setisdisable(true)
      axios.post(`https://agaram.academy/api/retail/index.php?request=create_debit&token=${token}`, formData).then(function (response) {

        if (response.data.status == "success") {
          navigate('/debitlist')
        }
        else {
          alert("failed")
        }
      })

    }
    else {
      alert("Enter valid details")
    }




  }


  return (
    <>
      <>
        <Container>
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
                onChange={(e) => dispatch(setcreditdetails({ ...credit_details, credit_date: e.target.value }))}

              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"> Credit Amount  <i class="fa-solid fa-indian-rupee-sign"></i></InputGroup.Text>
              <Form.Control
                type="number"
                required
                aria-label="Username"
                aria-describedby="basic-addon1"
                onKeyUp={(e) => {
                  if ((due_amount) - e.target.value >= 0) {
                    dispatch(setcreditdetails({ ...credit_details, credit_amount: e.target.value }))
                  }
                  else {
                    alert("You have debit of " + " " + JSON.stringify(due_amount) + " " + "only")
                    e.target.value = 0
                  }
                }}
              // onKeyUp={(e) => dispatch(setcreditdetails({ ...credit_details, credit_amount: e.target.value }))}
              />
            </InputGroup>
            <Button Class="submit" variant="primary" disabled={isdisable} onClick={() => creditAmount()}>submit</Button>
          </Form>
        </Container>
        <Logout />
      </>
    </>
  )
}

export default Credit