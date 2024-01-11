import { setStatus } from "../slices/shopOwnerLoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setOwnerId } from "../slices/shopOwnerLoginSlice";


function Logout() {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    let logout = () => {
        dispatch(setStatus(false))
        dispatch(setOwnerId({}))
        localStorage.removeItem("ownertoken")
        Navigate('/')
    }
    return (
        <>
            <div>
                <button type="button" className='btn btn-danger' onClick={() => logout()}>Sign out</button>
            </div>
        </>
    )
}

export default Logout;