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
import { setapidata } from "../slices/customerSlice"
import Debittotal from '../components/debittotal';



function CUSTOMERLST() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  let ownerid = useSelector((state) => state.shopOwnerLogin.ownerid)
  let {userstatus}=useSelector((state)=> state.customer)
  let apidata = useSelector((state) => state.customer.apidata)
  console.log(ownerid)

  // let [apidata, setapidata] = useState([])

  const [query, setQuery] = useState("")

  const add = () => {
    alert("sucess")
  }

  const filteredItems = useMemo(() => {
    return apidata.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [apidata, query])

  useEffect(() => {
    // axios.get(`https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${ownerid}`)
    axios({
      method: 'get',
      url: `https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${ownerid.id}`,

    })
      .then(function (res) {
        console.log(res.data.data)
        dispatch(setapidata(res.data.data))
        console.log(apidata)
      })
  }, [])

  const [debit, setdebit] = useState(false);

  

  const adddue=(id)=>{
    navigate(`/adddebit/${id}`)
      }

  return (
    <>
    {/* <Debittotal filteredItems={filteredItems}/> */}
      <Common />
      <h1 style={{textAlign: 'start',textTransform:"uppercase",margin:"15px"}}>{ownerid.name}</h1>
      <div className='boxs'>
        <div className='form-flex'>
          <div className='left-form'>
            <Form>
              <InputGroup className='my-3 search'>
                <Form.Control placeholder='Search contacts' value={query} onChange={e => setQuery(e.target.value)} />
              </InputGroup>
            </Form>
          </div>
          <div className='right-form '>
            <Button variant="success" onClick={() => navigate('/addcustomer')} > Add Customer</Button>
          </div>
        </div>

        <Table responsive striped bordered hover variant="light" className='cus-table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
              <th>Add due</th>
              <th>Send Notification</th>
            </tr>
          </thead>
          <tbody >

            {filteredItems.map((item, i) => (
              // console.log(JSON.stringify
              // (item.debits.debit_amount)),
              <tr key={i}>

                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td> <Button variant="outline-secondary" onClick={()=>alert(i)}> <b>+</b> ADD </Button></td>
                <td><Button type="button"  className='btn btn-primary' onClick={()=>{
                  alert(i)

                }}>Send</Button></td>

                

              </tr>
            ))}

          </tbody>
        </Table>

      </div>
    </>
  );

}

export default CUSTOMERLST;