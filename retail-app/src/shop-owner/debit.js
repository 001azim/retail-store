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
import { setdueamount } from "../slices/customerSlice";


function DEBITLST() {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { ownerid } = useSelector((state) => state.ShopOwnerLogin)
    let { apidata } = useSelector((state) => state.customer)
    const [debit, setdebit] = useState([]);
    let [isdisable, setisdisable] = useState(false)
    let [isapi, setapi] = useState(false)
    let owner_id = ownerid.data.id
    let token = localStorage.getItem("ownertoken")

    const debitlist = async () => {
        let formdata = new FormData()
        formdata.append("id", 1)
        const response = await axios.get(`https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${owner_id}&token=${token}`)
        let customer_detail = response.data.data
        dispatch(setapidata(customer_detail))
        const customerList = Debittotal(apidata)
        setdebit(customerList)
        setapi(true)
        if (isapi == true) {

            // alert("delete")
            deletecustomer()
        }

    };




    useEffect(() => {


        debitlist()



    }, [isapi])




    const credit = (id, amount) => {
        dispatch(setdueamount(amount))
        navigate(`/credit/${id}`)
    }


    const deletecustomer = () => {
        // console.log(
        //     "del1", debit
        // )
        debit.map((iteam) => {

            if (iteam.amount == 0 && iteam.debits[0]) {
                // alert(iteam.id)
                let formData = new FormData();
                formData.append("owner_id", owner_id)
                formData.append("customer_id", iteam.id)
                axios.post(`https://agaram.academy/api/retail/index.php?request=delete_debit&token=${token}`, formData).then(function (response) {
                }
                )
            }
        }
        )
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
                    <th>Interest Details</th>
                </tr>
            </thead>
            <tbody>
                {debit.map((customer) => {
               { console.log(customer)}

                    if (customer.amount) {

                        return (
                            <tr>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.amount}</td>
                                <td>{customer.debits[0].last_purchase_at}</td>
                                <td>{customer.debits[0].due_date}</td>
                                <td><Button variant="outline-primary"
                                    onClick={() => credit(customer.id, customer.amount)}
                                >Credit</Button></td>
                                {moment(customer.due_date).isBefore(moment())?(<td><Button variant="outline-primary" onClick={() => navigate(`/interest/${customer.id}`)}>Interest</Button></td>):(<td>Due Date Not Reached</td>)}
                            </tr>)
                    }
                })}
            </tbody>
        </table >
    </>
)
}


export default DEBITLST