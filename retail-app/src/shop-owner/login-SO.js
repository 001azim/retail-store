
import axios from "axios"
import { useNavigate } from "react-router"
import { useDispatch ,useSelector} from "react-redux"
import { setUserLogin,setStatus } from "../slices/shopOwnerLoginSlice"


function LOGINSO(){ 
    const navigate=useNavigate() 
    const dispatch=useDispatch()
    const {userLogin}=useSelector((state)=>state.shopOwerLogin)

    function alldata(){
        axios({
            method:"GET",
            url:"https://2cf5b323-aa86-45ee-8028-d711979cf7ca.mock.pstmn.io/sownerlogin",
        }).then(function(response){
            console.log(response.data)
        
                if(response.data.status=="success"){
                    dispatch(setStatus(true))
                    navigate("/customerlist")
                }   
        })
    }


    const sendata= ()=>{
        axios.get('https://2cf5b323-aa86-45ee-8028-d711979cf7ca.mock.pstmn.io/sownerlogin').then((res)=>{
            let data=res.data
            for(let i=0;i<data.length;i++){
                console.log(data[i].password)
                if (data[i].username===userLogin.username || data[i].password===userLogin.password){
                    navigate('/customerlist')
                }}
                
           
        })
    }

    return(
       <><div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-info'>
        <div className='40-w p-5 rounded bg-white'>
            <form>
                <h3>Sign In</h3>
                <div className='mb-2'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="Enter the name" className='form-control' onKeyUp={(e)=>dispatch(setUserLogin({
            ...userLogin,
            username : e.target.value
        }))}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="password">password:</label>
                    <input type="password" placeholder="Enter the password" className='form-control' onKeyUp={(e)=>dispatch(setUserLogin({
            ...userLogin,
            password: e.target.value
        }))}/>
                </div>
                <div className='mb-2'>
                    <input type="checkbox" className='custom-control custom-checkbox' id="check"/>
                    <label htmlFor="check" className='custom-input-label'>
                        remember me
                    </label>
                </div>
                <div className='d-grid'>
                    <button type="button" className='btn btn-primary' onClick={()=>alldata()}>Sign In</button>
                </div>
                <p className='text-right'>
                    forgot <a href="">password</a> <a href="">Signup</a>
                </p>
            </form>
        </div>
       </div>
       {console.log(userLogin)}
       </>



   

    )

}

export default LOGINSO