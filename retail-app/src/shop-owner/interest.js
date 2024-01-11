import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router'
import axios from 'axios'
import {  useDispatch,useSelector } from "react-redux"
import Common from '../components/common'




function Interest (){

  let { apidata ,interest_details} = useSelector((state) => state.customer)
  let [debtlist,setdebtlist]=useState([])
  let [duedate,setduedate] = useState("")
  let [dueamount,setdueamount] = useState(0)
  let [interest,setinterest] =useState("you have no interest yet")
  let totaldue = []
  
let id = useParams()
console.log("customerid",id.customerid)
console.log("apidata",apidata)

apidata.map((item)=>{
  if(item.id==id.customerid){
    // alert(1)
    let interest_amount=0
    item.debits.map((eachdebit)=>{
      if( eachdebit.type=="interest"){
        interest_amount += 0
        

      }
    })

  }
  
})


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
