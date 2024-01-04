import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { adduser } from "../slices/userSlice";
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

function Ownerlist() {
  const dispatch = useDispatch()
  let navigate=useNavigate()
  const lists = useSelector((state) => state.user.ownlist)
  const adminId=useSelector((state)=>state.user.adminid)

let token=localStorage.getItem("token")

  

  useEffect(() => {
    
    Onload()
 
  }, [adminId])


  function Onload() {
    let token = localStorage.getItem("token")
    if (!adminId && localStorage.getItem("token")) {
      axios.get(`https://agaram.academy/api/retail/index.php?request=getAllShopOwners&token=${token}`)
      .then(function (response) {
        console.log(response)
        let user_list = response.data.data
        dispatch(adduser(user_list))

          
        })
      }
  }

  useEffect(() => {
    solist()
  }, [])

  function solist() {
    if (localStorage.getItem("token")){
    axios.get(`https://agaram.academy/api/retail/index.php?request=getAllShopOwners&token=${token}`)
      .then(function (response) {
        console.log(response)
        let user_list = response.data.data
        dispatch(adduser(user_list))
      })
    }
    else{
      alert("please login")
      navigate("/superadminlogin")
      
    }
  }

  const logout_SA=()=>{
    localStorage.removeItem("token")
    navigate("/superadminlogin")
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
            

          </tr>

        </thead>
        <tbody>
          {lists.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.area}</td>
                <td>{data.shop_name}</td>

              </tr>
            )
          })}
        </tbody>

      </Table>
      <button type="button" variant="danger" onClick={()=>logout_SA()}>signout</button>
    </>
  )
}

export default Ownerlist