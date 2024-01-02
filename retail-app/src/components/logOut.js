import {setStatus,setOwnerId,setUserLogin} from "../slices/shopOwnerLoginSlice";
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router";
function Logout(){
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const logout=()=>{
        dispatch(setOwnerId({}))
        dispatch(setStatus(false))
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