import axios from "axios";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {adduser} from "../slices/userSlice";
import {useNavigate } from "react-router-dom";

function OWN(){
    const dispatch=useDispatch
    const Navigate=useNavigate()

    const lists=useSelector((state)=>state.user.ownlist)
    const status=useSelector((state)=>state.user.userstatus)
    useEffect(()=>{
    solist()
    },[])

   
    function solist(){
        if (localStorage.getItem("loginstatus"==true)){
        axios({
            method:'GET',
            url:
            'https://61e76e73-937a-46f9-ba3f-2aa15263b49c.mock.pstmn.io',
            data:{}
        }).then(function(response){
            console.log(response)
            dispatch(adduser(response.data.data))
        })
        }
        else{
            Navigate("/superadminlogin")

        }
        }
    
    return(
        <>
    <h1>shop owners list</h1>
    
    <table border={1}>
        <thead>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>email</td>
                <td>password</td>
                <td>view</td>

            </tr>

        </thead>
        <tbody>
            {lists.value.map((data)=>{
            return(
             <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
            </tr>
             )
        })}
        </tbody>

    </table>
    </>
    )
}
export default OWN;