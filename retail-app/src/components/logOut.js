import { setStatus,setOwnerId,setUserLogin } from "../slices/shopOwnerLoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
function Logout(){
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    let logout=()=>{
        dispatch(setStatus(false))
        dispatch(setOwnerId({}))
        dispatch(setUserLogin({}))
        localStorage.removeItem("Id")
        Navigate("/")
    }
    return(
        <>
            <div>
                    <button type="button" className='btn btn-danger' onClick={()=>logout()}>Sign out</button>
                </div>
        </>
    )
}

export default Logout;