import '../css/login-SO.css'
import axios from "axios"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { setUserLogin, setStatus, setOwnerId } from "../slices/shopOwnerLoginSlice"
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/logos.png'
import { useEffect } from 'react'


function LOGINSO() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let { userLogin, userstatus, ownerid } = useSelector((state) => state.ShopOwnerLogin)
    function alldata() {
        let formdata = new FormData()
        formdata.append("email", userLogin.email)
        formdata.append("password", userLogin.password)
        axios.post('https://agaram.academy/api/retail/index.php?request=shop_owner_login', formdata).then(function (response) {
            console.log("data checking",response.data)
            if (response.data.status == "success") {
                dispatch(setOwnerId(response.data))
                dispatch(setStatus(true))
                localStorage.setItem('ownertoken', response.data.token)
                navigate("/customerlist")
            } else {
                navigate("/ShopOwnerLogin")
                alert("check your email or password")
            }
        })

    }
    useEffect(()=>{
        if (localStorage.getItem("ownertoken")){
            navigate("/customerlist")
        }
    })



    return (
        <>
            <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg' >
                <div className='logoposition'>
                    <Navbar >
                        <Navbar.Brand href="#"><img src={Logo} alt='logo' width={90} id="logo" /></Navbar.Brand>
                    </Navbar>
                </div>
                <div className='40-w p-5'>
                    <div className='positionchge'>
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
                            <div className='d-grid'>
                                <button type="button" className='btn btn-success' onClick={() => alldata()}>Sign In</button>
                            </div><br></br>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LOGINSO