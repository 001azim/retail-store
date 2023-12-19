import axios from "axios"
import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment"
import React from "react";
import { useNavigate } from "react-router-dom";
function DEBITLST() {

    const navigate = useNavigate()

    const home = () => navigate("/")
    const back = () => window.history.back()
    const forward = () => window.history.forward
    // let [response, setresponse] = useState()

    function debtlist() {

        axios({
            method: 'get',
            url: 'https://2cf5b323-aa86-45ee-8028-d711979cf7ca.mock.pstmn.io/debtlist',


        }).then(function (res) {

            let data = res.data
            console.log(data[0].id)
            let filterdata = []
            for (let i of data) {
                if (i.debt_amount != 0) {
                    filterdata.push(i)
                }
            }

            let html = ""
            for (let i of filterdata) {
                console.log(i)
                let due=i.date_of_last_purchase
                html = html +
                    `<tr>
                        <td>${i.id}</td>
                        <td>${i.debt_amount}</td>
                        <td>${i.date_of_last_purchase}</td>
                        <td>${moment(due).add(10, 'days').format('l')}</td>


                    </tr>`
            }
            document.getElementById("table").innerHTML = html
        })
    }

    // useEffect(debtlist, [])



    return (
        <>

            < table class="table table-dark table-hover" >
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Debt Amount</th>
                        <th>Date of  Last Debt</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody id="table">

                </tbody>
            </table >

            <div style={{ position: 'fixed', bottom: 0, left: '30%' }} >
                <button variant="primary" size="lg" onClick={() => navigate("/creditordebit")} >
                    Go To debit
                </button>
                <button onClick={back} style={{ backgroundColor: 'red' }} ><i class="fa-solid fa-arrow-left"></i></button>
                <button onClick={home} style={{ backgroundColor: 'green' }}><i class="fa-solid fa-house"></i></button>
                <button onClick={forward} style={{ backgroundColor: 'red' }}><i class="fa-solid fa-arrow-right"></i></button>
                <button variant="primary" size="lg" onClick={() => navigate("/customerlist")}>
                    Go To customer list
                </button>
            </div>


        </>
    )

}









export default DEBITLST