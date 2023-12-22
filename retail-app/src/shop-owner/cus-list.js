import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import "../css/cus-list.css"

import { useState, useEffect, useMemo } from 'react';
import Common from '../components/common';
import InputGroup from 'react-bootstrap/InputGroup';



function CUSTOMERLST() {

  let [apidata, setapidata] = useState([])
  
  const [query, setQuery] = useState("")
   
  const navigate = useNavigate()
  // const home = () =>navigate("/")
  // const back = ()=>window.history.back()
  // const forward = () => window.history.forward

  const add = () => {
    alert("sucess")
  }

  const filteredItems = useMemo(() => {
    return apidata.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [apidata, query])



  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',

    })
      .then(function (res) {
        setapidata(res.data)
        
      })

  }, [])

  return (
    <>
      <Common />
      <div className='boxs'>
      <div className='form-flex'>
        <div className='left-form'>
        <Form>
        <InputGroup className='my-3 search'>
        <Form. Control placeholder='Search contacts' value={query} onChange={e => setQuery(e.target.value)} />
        </InputGroup>
        </Form>
        </div>
        <div className='right-form d-flex'>
        <Button variant="success" onClick={() => navigate('/creditordebit')} > Add Customer</Button>
        </div>
        </div>

      <Table responsive striped bordered hover variant="light" className='cus-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Purchase date</th>
            <th>debt_amount</th>
            <th>due_date</th>
            <th>Send Notification</th>
          </tr>
        </thead>
        <tbody >
          
              {filteredItems.map((item,i) => (
              <tr key={i}>
                
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                
</tr>
              ))}

        </tbody>
      </Table>
      {/* <Button variant="success" onClick={() => navigate('/creditordebit')} > Add Customer</Button> */}
   </div>
    </>
  );
}

export default CUSTOMERLST;
