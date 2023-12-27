import axios from "axios"
import { useEffect ,useState} from "react"
import Common from "../components/common"
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { setapidata } from "../slices/customerSlice"
import Debittotal from "../components/debittotal";
function DEBITLST() {
    let dispatch = useDispatch()
    let { ownerid } = useSelector((state) => state.shopOwnerLogin)
    let { apidata, } = useSelector((state) => state.customer)
    const [debit, setdebit] = useState([]);

    let owner_id = ownerid.data.id
    function debtlist() {

        axios.get(`https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${owner_id}`).then(function (res) {

            console.log("res", res.data.data)
            let customer_detail = res.data.data
            dispatch(setapidata(customer_detail))

        })
    }

    useEffect(debtlist, [])
    useEffect(() => {
        const customerList = Debittotal(apidata)

        setdebit(customerList)


    }, []);


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

                    {debit.map((customer) => {
                       if(customer.debit_total){
                            return (
                                <tr>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.debit_total}</td>


                                    {customer.debits.map((debit) => {
                                        return (
                                            <>
                                                <td>{debit.last_purchase_at}</td>
                                                <td>{debit.due_date}</td>
                                            </>
                                        )
                                    })}</tr>)

                                }

                    })}


                </tbody>
            </table >
            {console.log("ans", (ownerid.data.id))}



        </>
    )

}









export default DEBITLST