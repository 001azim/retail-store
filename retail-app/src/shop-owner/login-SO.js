import '../css/login-SO.css'
import React, { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { setUserLogin, setStatus, setOwnerId } from "../slices/shopOwnerLoginSlice"



function LOGINSO() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
   
    const { userLogin, ownerid } = useSelector((state) => state.shopOwerLogin)

    function alldata() {
        let formdata = new FormData()
        formdata.append("email", userLogin.email)
        formdata.append("password", userLogin.password)
        axios.post('https://agaram.academy/api/retail/index.php?request=shop_owner_login', formdata).then(function (response) {
            

            console.log(response.data.data)
            if (response.data.status == "success") {
                localStorage.setItem("authLog",true)
                dispatch(setOwnerId(response.data.data))
                dispatch(setStatus(true))
                navigate("/customerlist")
            } else {
                navigate("/")
                alert("check your email or password")
            }
        })

    }

// useEffect(()=>{
//     if(ownerid.id!=0){
//         navigate("/customerlist")
//     }
//     else{
//         navigate('/')
//     }
// },[])

    return (
        <><div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg' >
            <div className='40-w p-5 child'>
                <form>
                    <h1>Sign In</h1>
                    <div className='mb-2'>
                        <label htmlFor="name">Email:</label>
                        <input type="email" placeholder="Enter the email" className='form-control' onKeyUp={(e) => dispatch(setUserLogin({
                            ...userLogin,
                            email: e.target.value
                        }))} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">password:</label>
                        <input type="password" placeholder="Enter the password" className='form-control' onKeyUp={(e) => dispatch(setUserLogin({
                            ...userLogin,
                            password: e.target.value
                        }))} />
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                        <label htmlFor="check" className='custom-input-label'>
                            remember me
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button type="button" className='btn btn-success' onClick={() => alldata()}>Sign In</button>
                    </div><br></br>
                    <div className='d-grid'>
                        <button type="button" className='btn btn-primary' onClick={() => navigate("/shopownerregister")}>Sign up</button>
                    </div>

                </form>
            </div>
        </div>
        </>





    )

}

export default LOGINSO