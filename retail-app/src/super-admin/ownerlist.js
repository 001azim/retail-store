import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {adduser} from "../slices/userSlice";
import {useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table'

function Ownerlist() {
  const dispatch=useDispatch()
  const Navigate=useNavigate()

    const lists=useSelector((state)=>state.user.ownlist)
    console.log("list",lists)

    useEffect(()=>{
      solist()
    },[])

   let [counts,setcount]=useState([])
    function solist(){
        // if (localStorage.getItem("loginstatus"==true)){
        axios.get('https://agaram.academy/api/retail/index.php?request=getAllShopOwners')
        .then(function(response){
            console.log(response)
            let user_list=response.data.data
            console.log("user",user_list)
            dispatch(adduser(user_list))
        })
        // }
        // else{
        //   alert("something wrong")
            // Navigate("/superadminlogin")

        // }
      }
      
      
       let no_customer=0
      const usersid=(userid)=>{
        axios({
          method: 'get',
          url: `https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${userid}`,
    
        })
         
        .then(function(response){
            console.log(response.data.data.length)
            let countList=response.data.data.length
            no_customer=countList
            console.log(no_customer)
            
            

            setcount(response.data.data.length)
            // console.log("count",counts)
                

        })

        
    }
  
  return (
    <>

    
    
    <h1>shop owners list</h1>
    
     <Table striped bordered hover size="sm" variant="dark">
        <thead>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>email</td>
                <td>password</td>
                <td>aadhar</td>
                <td>street</td>
                <td>city</td>
                <td>area</td>
                <td>phone</td>
                <td>pincode</td>
                <td>shop_name</td>
                <td>customers count</td>
                <td>count</td>

            </tr>

        </thead>
        <tbody>
            {lists.map((data)=>{
            return(
             <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.aadhar}</td>
                <td>{data.street}</td>
                <td>{data.city}</td>
                <td>{data.area}</td>
                <td>{data.phone}</td>
                <td>{data.pincode}</td>
                <td>{data.shop_name}</td>
                <td><button onClick={()=> usersid(data.id)}>view</button></td>
               {/* <td>{data.id}</td>  */}
               <td>
                {counts.map((c)=>{
                  return(
                    c
                  )
                })}
               </td>
                </tr>
             )
        })}
        </tbody>

    </Table>
    {/* <button type="button" onClick={()=>getdata()}>button</button> */}
    </> 
  )
}

export default Ownerlist