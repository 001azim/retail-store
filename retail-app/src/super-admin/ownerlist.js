import React from 'react'
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
      
      const getdata=()=>{

        

        axios.post('https://agaram.academy/api/retail/index.php?request=getAllCustomer&owner_id=2')

        .then(function(response){
            console.log(response)
            
                

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
                <td>phone</td>
                <td>area</td>
                <td>shop_name</td>
                <td>Customer count</td>

            </tr>

        </thead>
        <tbody>
            {lists.map((data)=>{
            return(
             <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.area}</td>
                <td>{data.shop_name}</td>
                <td>{data.length}</td>

                </tr>
             )
        })}
        </tbody>

    </Table>
    <button type="button" onClick={()=>getdata()}>button</button>
    </> 
  )
}

export default Ownerlist