import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, } from "react-router-dom";
import axios from 'axios';
import icon1 from '../debit.png'
import icon2 from '../credit.png'
import "../css/cus-list.css"
import { useState,useEffect } from 'react';
import Common from '../components/common';
import { customer_data } from '../data'


function CUSTOMERLST() {

  let [apidata,setapidata] = useState([])

  // const navigate= useNavigate()
  // const home = () =>navigate("/")
  // const back = ()=>window.history.back()
  // const forward = () => window.history.forward

  const add = ()=>{
    alert("sucess")
  }
  
 
   
  
   
useEffect(()=>{
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    
  })
    .then(function(res){
      setapidata(res.data)
    })

},[])

console.log(apidata)
 

  return (
    <>
    <Common/>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>customer_id</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Last_purchase_date</th>
          <th> Address</th>
        
        
         
        </tr>
      </thead>
      <tbody >
        
          {customer_data.map((item)=>{
            return(
              <tr>
                 <td>{item.customer_id}</td>
                <td>{item.customer_name}</td>
                <td>{item.email}</td>
                <td>{item.last_purchase_date}</td>
                <td>{item.address}</td>
              </tr>
            )
})}
       
      </tbody>
    </Table>
    <Button onClick={()=>add()} variant="success" > Success</Button>
    <div className='menubox' style={{position:'fixed',bottom:0,left:'50%',transform: 'translateX(-50%)'}} >
    
    <button onClick={()=>window.history.back()} style={{backgroundColor:'white'}} ><i class="fa-solid fa-arrow-left"></i></button>
  
    <Link to={`/creditordebit`}><span><img src={icon1} alt='icon' /></span></Link>
    <Link to={`/customerlist`}><i class="fa-solid fa-rectangle-list"></i></Link>
    <Link to={`/`}><i class="fa-solid fa-house"></i></Link>

    <Link to={`/msg`}><i class="fa-solid fa-message" ></i></Link>


    <Link to={`/debitlist`}><span><img src={icon2} alt='icon' /></span></Link>
    <button onClick={()=>window.history.forward} style={{backgroundColor:'white'}}><i class="fa-solid fa-arrow-right"></i></button>

    
    </div>
    
    </>
  );
}

export default CUSTOMERLST;
