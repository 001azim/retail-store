import axios from "axios"
import { useEffect, useLayoutEffect, useState } from "react"
import Common from "../components/common"
import React from "react";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux"
import { setapidata } from "../slices/customerSlice"
import Debittotal from "../components/debittotal";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router'
import moment from "moment";
import { setdueamount } from "../slices/customerSlice";


function DEBITLST() {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { ownerid } = useSelector((state) => state.shopOwnerLogin)
    let { apidata } = useSelector((state) => state.customer)
    const [debit, setdebit] = useState([]);
    let owner_id = ownerid.data.id

// debit list

    const debitlist = async () => {
        const response = await axios.get(`https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${owner_id}`)
        let customer_detail = response.data.data
        dispatch(setapidata(customer_detail))



    };

    useEffect(() => {
        debitlist()
    }, [])



    useEffect(() => {
        const customerList = Debittotal(apidata)
        setdebit(customerList)
    }, [apidata]);



    const credit = (id, amount) => {
        dispatch(setdueamount(amount))
        navigate(`/credit/${id}`)
    }


    const deletecustomer =  () => {

         debit.map(async (iteam)  => {
           if (iteam.amount == 0 && iteam.debits[0]) {
                alert(iteam.id)
                console.log("amount")
                let formData = new FormData();
                formData.append("owner_id", owner_id)
                formData.append("customer_id", iteam.id)
                const response=  await axios.post('https://agaram.academy/api/retail/index.php?request=delete_debit', formData)
                 console.log(response.data)
                
            }
        })
    }

    useEffect(() => {
        deletecustomer()
    }, [apidata]);

    function Getdate(apidata) {
        return apidata.map((item) => {
            let cus_tot = "";
            if (item.debits) {
                item.debits.map((c_d) => {

                    cus_tot = c_d.due_date
                })
            }
            return { ...item, udebit_date: cus_tot }
        });
    }



    let all_customer_details = Getdate(apidata)

    function setinterest() {
        all_customer_details.map((item) => {
            let interestcount = 0
            item.debits.map((debit_details) => {
                if (debit_details.type == "interest") {
                    interestcount += 1
                }
                if (interestcount == 0) {
                    let total_debit_amount = 0
                    debit.map((debit_amount) => {
                        total_debit_amount = debit_amount.amount
                    })
                    if (item.udebit_date > moment().format('YYYY-MM-DD') && total_debit_amount != 0) {
                        let fineamount = total_debit_amount + (total_debit_amount * 2 / 100)
                        let formData = new FormData();
                        formData.append("customer_id", item.id)
                        formData.append("last_purchase_at", moment().format('YYYY-MM-DD'))
                        formData.append("amount", fineamount)
                        formData.append("due_date", "")
                        formData.append("type", "interest")
                        axios.post('https://agaram.academy/api/retail/index.php?request=create_debit', formData).then(function (res) {
                            console.log(res)
                        }
                        )
                    }
                }
            }
            )
        })
    }

    useEffect(
        () => setinterest(), [apidata]
    )




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

                        if (customer.amount) {

                            return (
                                <tr>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.amount}</td>
                                    <td>{customer.debits[0].last_purchase_at}</td>
                                    <td>{customer.debits[0].due_date}</td>
                                    <td><Button variant="outline-primary" onClick={() => credit(customer.id, customer.amount)}>Credit</Button></td>
                                    <td><Button variant="outline-primary" onClick={() => navigate(`interest/${customer.id}`)}>Interest</Button></td>
                                </tr>)
                        }
                    })}
                </tbody>
            </table >
        </>
    )
}


export default DEBITLST