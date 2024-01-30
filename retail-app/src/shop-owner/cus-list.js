import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import Form from 'react-bootstrap/Form';
import "../css/cus-list.css"
import { useState, useEffect, useMemo } from 'react';
import Common from '../components/common';
import InputGroup from 'react-bootstrap/InputGroup';
import { setapidata } from "../slices/customerSlice"
import Debittotal from '../components/debittotal';
import Logout from '../components/logOut';
import { setdueamount } from '../slices/customerSlice';
function CUSTOMERLST() {

  let ownerid = useSelector((state) => state.ShopOwnerLogin.ownerid)
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  let apidata = useSelector((state) => state.customer.apidata)
  const navigate = useNavigate()
  


  const filteredItems = useMemo(() => {
    return apidata.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [apidata, query])

  let token=localStorage.getItem("ownertoken")


  // useEffect(() => {
  //   if (localStorage.getItem("ownertoken")) {
  //     axios({
  //       method: 'get',
  //       url: `https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${ls_id}&token=${token}`,

  //     })

  //       .then(function (response) {
  //         console.log(response)
  //         dispatch(setapidata(response.data.data))
  //         console.log(apidata)
  //         console.log(response.data)

  //       })

  //   }
  // }, [])



  useEffect(() => {
    axios({
      method: 'get',
      url: `https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${ownerid.data.id}&token=${token}`,

    })
      .then(function (response) {
        console.log(response)
        dispatch(setapidata(response.data.data))
     
        
      })
  }, [])
  const [debit, setdebit] = useState([]);

  useEffect(() => {

    const customerList = Debittotal(filteredItems)

    setdebit(customerList)

  }, [filteredItems]);



  const adddue = (id, amount) => {
    dispatch(setdueamount(amount))
   
    navigate(`/adddebit/${id}`)


  }


   
  // function Onreload() {
  //   let token = localStorage.getItem("ownertoken")
  //     axios.post(`https://agaram.academy/api/retail/index.php?request=getShopOwnerDetailsByToken&token=${token}`)
  //       .then(function (response) {
  //         console.log("checking api",response)
  //       })
  // }



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
        </div><br></br>

        <h1>welcome {ownerid.data.name}</h1><br></br>

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
                  {item.amount < 5000 ? (<Button variant="outline-primary" onClick={() => adddue(item.id, item.amount)}>  Add debt
                  </Button>
                  ) : (
                    <h4>debit limit reached</h4>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Logout />
        {/* <button onClick={()=>Onreload()}>api</button> */}
      </div>
    </>
  );

}

export default CUSTOMERLST;