import axios from "axios"
import { useEffect, useState } from "react"
import Common from "../components/common"
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { setapidata } from "../slices/customerSlice"
import Debittotal from "../components/debittotal";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router'
import moment from "moment";

function DEBITLST() {
    const moment = require('moment')
    const today = moment().format('YYYY-MM-DD')
    let navigate=useNavigate()
    let dispatch = useDispatch()
    let { ownerid } = useSelector((state) => state.shopOwnerLogin)
    let { apidata } = useSelector((state) => state.customer)
    const [debit, setdebit] = useState([]);
    const [dbt ,setdbt]= useState([])

    let owner_id = ownerid.data.id
    function debtlist() {

        axios.get(`https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${owner_id}`).then(function (res) {

            console.log("res", res.data.data)
            let customer_detail = res.data.data
            dispatch(setapidata(customer_detail))

        })
    }

    const interest = ()=>{
         
        apidata.map((s)=>{
            if(s.debits){
                s.debits.map((debit)=>{
                    if (debit.debit_amount>=4999){
                        console.log(debit.debit.debit_amount)
                        
                    }
                    
                })
            }
        })


    }
    // axios.post('https://agaram.academy/api/retail/index.php?request=create_debit',formData).then(function(response){
    //     console.log('response',response))

    useEffect(debtlist, [])
    useEffect(() => {
        const customerList = Debittotal(apidata)
        interest()
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
                    {console.log("api", apidata)}

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
            
            

            {/* {JSON.stringify(debit[18].debits[0].due_date==today)} */}
{JSON.stringify(today)}
        </>
        
    )
}


export default DEBITLST