import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import {  useSelector } from "react-redux"
import Common from '../components/common'




function Interest (){

  let { apidata } = useSelector((state) => state.customer)
  let [debtlist,setdebtlist]=useState([])
  let [duedate,setduedate] = useState("")
  let [dueamount,setdueamount] = useState(0)
  let [interest,setinterest] =useState("you have no intrest yet")
  let totaldue = []
  

let id = useParams()

useEffect(()=>{
  apidata.map((data)=>{
    data.debits.map((debit)=>{

      if(debit.customer_id==id.customerid && debit.type=="credit"){
      }
      
      if(debit.customer_id==id.customerid && debit.type=="interest"){
        setinterest(Number(debit.amount*.02).toFixed(2))
      

         
      }

      if(debit.customer_id==id.customerid && debit.type=="debit"){
        setduedate(debit.due_date)  
        setdueamount(Number(dueamount+debit.amount))
        totaldue.push(debit.amount)   
      }
     
    })
  })
},[])
  


  return (
    <div>
      <Common/>
      {id.customerid}
      <h1>Total Due : {totaldue}</h1>
      <h1>Due Date :{duedate}</h1>
      <h1>Due Amount : {dueamount}</h1>
      <h1>Interest Amount : {interest}</h1>
    </div>
  )
}

export default Interest
