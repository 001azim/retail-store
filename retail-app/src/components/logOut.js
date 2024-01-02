import { setStatus,setOwnerId } from "../slices/shopOwnerLoginSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
function Logout(){
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const ownerid=useSelector((state) => state.shopOwnerLogin)
    let logout=()=>{
       
       
        dispatch(setStatus(false))
        dispatch(setOwnerId({}))
      Navigate('/')
       
    
    }
        // console.log("ownerid checking",ownerid)
        
    
    return(
        <>
            <div>
                    <button type="button" className='btn btn-danger' onClick={()=>logout()}>Sign out</button>
                </div>
        </>
    )
}

export default Logout;