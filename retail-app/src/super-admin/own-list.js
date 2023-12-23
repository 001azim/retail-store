import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {adduser} from "../slices/userSlice";
import {useNavigate } from "react-router-dom";

function OWN(){
    const dispatch=useDispatch()
    const Navigate=useNavigate()

    const lists=useSelector((state)=>state.user.ownlist)
    
    useEffect(()=>{
    solist()
    },[])

   
    function solist(){
        if (localStorage.getItem("loginstatus"==true)){
        axios.get('https://agaram.academy/api/retail/index.php?request=getAllShopOwners')
        .then(function(response){
            console.log(response)
            // dispatch(adduser(response.data.data))
        })
        }
        else{
            // Navigate("/superadminlogin")

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
                <td>aadhar</td>
                <td>street</td>
                <td>city</td>
                <td>area</td>
                <td>phone</td>
                <td>pincode</td>
                <td>shop_name</td>

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
                <td>{data.aadhar}</td>
                <td>{data.street}</td>
                <td>{data.city}</td>
                <td>{data.area}</td>
                <td>{data.phone}</td>
                <td>{data.pincode}</td>
                <td>{data.shop_name}</td>

                </tr>
             )
        })}
        </tbody>

    </table>
    </>
    )
}
export default OWN;