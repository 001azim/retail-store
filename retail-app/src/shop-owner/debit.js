import axios from "axios"
import { useEffect, useState } from "react"
import Common from "../components/common"
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { setapidata } from "../slices/customerSlice"
import Debittotal from "../components/debittotal";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router'
import { Getdate } from "../components/debittotal";
import moment from 'moment'
function DEBITLST() {
    const today = new Date()
    let navigate=useNavigate()
    let dispatch = useDispatch()
    let { ownerid } = useSelector((state) => state.shopOwnerLogin)
    let { apidata } = useSelector((state) => state.customer)
    const [debit, setdebit] = useState([]);

    function Getdate(apidata) {
    
        return apidata.map((item) => {
          let cus_tot = "";
          if(item.debits){
            item.debits.map((c_d)=>{
      
              cus_tot =  c_d.due_date
            }) 
          }
          return {...item,udebit_date:cus_tot}
          });
        
       
      }
let all_customer_details=Getdate(apidata)      



useEffect(
    ()=>{
        all_customer_details.map((item,i)=>{
   

    if( item.udebit_date > moment().format('YYYY-MM-DD') && apidata.debit_total!=0 ){
        let fineamount=apidata.debit_total+apidata.debit_total*2/100
        let formData = new FormData();
        formData.append("customer_id",item.customer_id)
        formData.append("last_purchase_at",moment().format('YYYY-MM-DD') )
        formData.append("amount",fineamount)
        formData.append("due_date","")
        formData.append("type","interest")
        
        axios.post('https://agaram.academy/api/retail/index.php?request=create_debit',formData).then(function(response){

        console.log('response',response)
        })


    }
})
    },[]
)



    // const above3000= apidata.map((item)=>item.debits.map((debts)=>{if(debts.due_date > today){
    //   return debts
    // }}))
          
    // console.log("list",above3000)

//   let x = apidata.map((item)=>{
//     item.debits.map((debt)=>{
//         if(debt.due_date == 'January 4, 2024'){
//             return debt.due_date
           
//         }
//     })
//   })
//   console.log("jj",x)


    let owner_id = ownerid.data.id
    function debtlist() {

        axios.get(`https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${owner_id}`).then(function (res) {

            let customer_detail = res.data.data

            dispatch(setapidata(customer_detail))
            
          
        })
    }

    useEffect(debtlist, [])
    useEffect(() => {
        const customerList = Debittotal(apidata)

        setdebit(customerList)


    }, []);

    const credit=(id)=>{

        navigate(`/credit/${id}`)
        
          }
         
    return (
        <>
            <Common />

            < table class="table table-dark ">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Debt Amount</th>
                        <th>Date of  Last Debt</th>
                        <th>Due date</th>
                        <th>Credit</th>
                    </tr>
                </thead>
                <tbody>
                 

                    {debit.map((customer) => {
                        if (customer.debit_total) {
                            return (
                                <tr>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.debit_total}</td>
                                    <td>{customer.debits[0].last_purchase_at}</td>
                                    <td>{customer.debits[0].due_date}</td>
                                    <td><Button variant="outline-primary" onClick={()=>credit(customer.id)}>Credit</Button></td>
                                </tr>)

                        }

                    })}
                  

                 


                </tbody>
            </table >
            



        </>
    )
}


export default DEBITLST