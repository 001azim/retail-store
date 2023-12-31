import { setStatus,setOwnerId } from "../slices/shopOwnerLoginSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
function Logout(){
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const ownerid=useSelector((state) => state.shopOwnerLogin)
    let logout=()=>{
        localStorage.removeItem("Id")
        dispatch(setStatus(false))
        dispatch(setOwnerId({}))
        // console.log("ownerid checking",ownerid)
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