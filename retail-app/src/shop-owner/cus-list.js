import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, } from "react-router-dom";
import axios from 'axios';
import icon1 from '../debit.png'
import icon2 from '../credit.png'
import "../css/cus-list.css"
import { useState,useEffect } from 'react';



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
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/users',
    
  // })
  //   .then(async function (response) {
  //     // console.log(response.data)
  //     let data = response.data;
  //     let htmll='';
  //     // let custm= data.map((s)=>{
  //     //   htmll=htmll+
  //     // })
  //     for (let i=0;i<data.length;i++){
  //     //  console.log(data[i].phone_number)
  //      htmll= htmll+`<tr>
  //       <td>${data[i].id}</td>
  //       <td>${data[i].customer_name}</td>
  //       <td>${data[i].phone_number}</td>
  //       <td>${data[i].date_of_last_purchase}</td>
  //       <td>${data[i].debt_amount}</td>
  //       <td>${data[i].due_date}</td>
  //       <td><Button variant="success" onClick={}>Success</Button></td>
  //     </tr>`
     
  //     }
  //     document.getElementById("listdata").innerHTML= htmll
  //   });
    

  return (
    <>
    
    <Table striped bordered hover variant="dark">
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
        
          {apidata.map((s)=>{
           return(
              <tr>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.username}</td>
                <td>{s.gcgh}</td>
                <td><button>delete</button></td>
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
