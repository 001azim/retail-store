import { setStatus } from "../slices/shopOwnerLoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
function Logout(){
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    let logout=()=>{
        dispatch(setStatus(false))
        Navigate()
    }
    return(
        <>
            <div>
                    <button type="button" className='btn btn-primary' onClick={()=>logout()}>Sign out</button>
                </div>
        </>
    )
}

export default Logout;