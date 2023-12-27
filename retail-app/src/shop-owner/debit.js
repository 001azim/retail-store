import axios from "axios"
import { useEffect } from "react"
import Common from "../components/common"
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { setapidata, setdebtdata } from "../slices/customerSlice"

function DEBITLST() {
    let dispatch = useDispatch()
    let { ownerid } = useSelector((state) => state.shopOwerLogin)
    let { apidata, debtdata } = useSelector((state) => state.customer)

    let owner_id = ownerid.data.id
    function debtlist() {

        axios.get(`https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${owner_id}`).then(function (res) {

            console.log("res", res.data.data)
            let customer_detail = res.data.data
            dispatch(setapidata(customer_detail))

        })
    }

    useEffect(debtlist, [])



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
                    </tr>
                </thead>
                <tbody>
                    {console.log("api", apidata)}


                    {/* {apidata.map((customer_list) => {
                        customer_list.debits.filter((debit) => {
                            
                            if (debit.debit_amount > 0) {
                                { dispatch(setdebtdata(customer_list)) }
                            }
                        })


                        



                    })} */}
                    {/* {apidata.map((customer) => {
                        return (
                            <tr>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>


                                {customer.debits.map((debit) => {
                                    return (
                                        <>
                                            <td>{debit.debit_amount}</td>
                                            <td>{debit.last_purchase_at}</td>
                                            <td>{debit.due_date}</td>
                                        </>
                                    )
                                })}</tr>)

                    })} */}

                </tbody>
            </table >
            {console.log("ans", (ownerid.data.id))}



        </>
    )

}









export default DEBITLST