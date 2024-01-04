import axios from "axios"
import { useEffect, useLayoutEffect, useState } from "react"
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
    let owner_id = ownerid.data.id
    let token = localStorage.getItem("ownertoken")

    const debitlist = async () => {
        const response = await axios.get(`https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${owner_id}&token=${token}`)
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


    const deletecustomer = () => {

        debit.map((iteam) => {
            if (iteam.amount == 0 && iteam.debits[0]) {
                alert(iteam.id)
                let formData = new FormData();
                formData.append("owner_id", owner_id)
                formData.append("customer_id", iteam.id)
                axios.post(`https://agaram.academy/api/retail/index.php?request=delete_debit&token=${token}`, formData).then(function (response) {
                }
                )
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
                        setisdisable(true)
                        let fineamount = (total_debit_amount * 0.02 )
                        let formData = new FormData();
                        formData.append("customer_id", item.id)
                        formData.append("last_purchase_at", moment().format('YYYY-MM-DD'))
                        formData.append("amount", fineamount)
                        formData.append("due_date", "")
                        formData.append("type", "interest")
                        axios.post(`https://agaram.academy/api/retail/index.php?request=create_debit&token=${token}`, formData).then(function (res) {

                        }
                        )
                    }
                }
            }
            )
        })
    }

    useEffect(()=>{if (isdisable==false){
        setinterest()}}, [apidata]
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
                                    <td><Button variant="outline-primary" onClick={() => navigate(`/interest/${customer.id}`)}>Interest</Button></td>
                                </tr>)
                        }
                    })}
                </tbody>
            </table >
        </>
    )
                }


export default DEBITLST