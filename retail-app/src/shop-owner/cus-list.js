import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import Form from 'react-bootstrap/Form';
import "../css/cus-list.css"
import { useState, useEffect, useMemo } from 'react';
import Common from '../components/common';
import InputGroup from 'react-bootstrap/InputGroup';
import { setapidata,setdueamount } from "../slices/customerSlice"
import { useRef } from 'react';
import Debittotal from '../components/debittotal';

function CUSTOMERLST(props) {
// owner id from loginpage
  let ownerid = useSelector((state) => state.shopOwnerLogin.ownerid)

  const [query, setQuery] = useState("")

  const dispatch = useDispatch()
  let apidata = useSelector((state) => state.customer.apidata)
let {due_amount}=useSelector((state)=>state.customer)

  const navigate = useNavigate()
  // const home = () =>navigate("/")
  // const back = ()=>window.history.back()
  // const forward = () => window.history.forward

  // search bar filter

  const filteredItems = useMemo(() => {
    return apidata.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [apidata, query])


// get all customers by sending owner id
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${ownerid.data.id}`,

    })
      .then(function (response) {
        console.log(response)
        dispatch(setapidata(response.data.data))
    
        
      })
  }, [])

// filtered iten set in debit state

  const [debit, setdebit] = useState([]);

  useEffect(() => {
  
  const customerList =  Debittotal(filteredItems)
  
    setdebit(customerList)


  }, [filteredItems]);


  const adddue=(id,due_amount)=>{
dispatch(setdueamount(due_amount))
navigate(`/adddebit/${id}`)
 

  }

  return (
    <>
      <Common />
      <div className='boxs'>
        <div className='form-flex'>
          <div className='left-form'>
            <Form>
              <InputGroup className='my-3 search'>
                <Form.Control placeholder='Search customers' value={query} onChange={e => setQuery(e.target.value)} />
              </InputGroup>
            </Form>
          </div>
          <div className='right-form d-flex'>
            <Button variant="success" onClick={() => navigate('/addcustomer')} > Add Customer</Button>
          </div>
        </div>

        <Table responsive striped bordered hover variant="light" className='cus-table'>
          <thead>
            <tr>
              <th>id</th>
              <th>Customer name</th>
              <th>email</th>
              <th>phone</th>
              <th>Address</th>
              <th>Add due </th>
            </tr>
          </thead>
          <tbody >


            {debit.map((item, i) => (
              <tr key={i}>

                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
  {item.debit_total < 5000  ? (<Button variant="outline-primary" onClick={() => adddue(item.id,item.debit_total)}>  Add debt
    </Button>
  ) : (
    <h4>debit limit reached</h4>
  )}
</td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>
    </>
  );

}

export default CUSTOMERLST;