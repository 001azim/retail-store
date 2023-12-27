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

        axios({
            method: 'get',
            url: `https://agaram.academy/api/retail/index.php?request=getAllCustomers&owner_id=${ownerid.data.id}`,
      
          })
            .then(function (response) {
           console.log()
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
                  
                  

                  

                </tbody>
            </table >
            {console.log("ans", (ownerid.data.id))}



        </>
    )

}









export default DEBITLST