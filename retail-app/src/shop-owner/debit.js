import axios from "axios"
import { useEffect } from "react"
import Common from "../components/common"
import moment from "moment"
import React from "react";
import { useDispatch, useSelector } from "react-redux"

// import { useNavigate } from "react-router-dom";
function DEBITLST() {

    let { ownerid } = useSelector((state) => state.shopOwerLogin)
    // let [response, setresponse] = useState()
    let owner_id = ownerid.data.id
    function debtlist() {

        axios.get(`https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${owner_id}`).then(function (res) {

            // let data = res.data
            console.log("res", res.data.data)
            let customer_detail = res.data.data
            // let filterdata = []
            // for (let i of data) {
            //     if (i.debt_amount != 0) {
            //         filterdata.push(i)
            //     }
            // }

            // let html = ""
            // for (let i of filterdata) {
            //     console.log(i)
            //     let due=i.date_of_last_purchase
            //     html = html +
            //         `<tr>
            //             <td>${i.id}</td>
            //             <td>${i.debt_amount}</td>
            //             <td>${i.date_of_last_purchase}</td>
            //             <td>${moment(due).add(10, 'days').format('l')}</td>


            //         </tr>`
            // }
            // document.getElementById("table").innerHTML = html
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
                        <th>Debt Amount</th>
                        <th>Date of  Last Debt</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    {customer_list.map((customer) => {
                        customer.debits.map((debit) => {
                            return (
                                <tr>
                                    <td>{debit.last_purchase_at}</td>
                                    <td>{debit.due_date}</td>
                                    <td>{debit.debit_amount}</td>
                                    {/* <td>{debit.last_purchase_date}</td>
                                    <td>{debit.address}</td> */}
                                </tr>
                            )
                        })

                    })}

                </tbody>
            </table >
            {console.log("ans", (ownerid.data.id))}



        </>
    )

}









export default DEBITLST