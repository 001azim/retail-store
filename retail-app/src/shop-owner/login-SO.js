import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

// login page for shop owner
function LOGINSO(){ 
    
    const navigate= useNavigate()
    
    let [userlogin,setuserlogin]= useState({
        username: "",
        password: ""
    })

    const sendata= ()=>{
        axios.get('https://2cf5b323-aa86-45ee-8028-d711979cf7ca.mock.pstmn.io/sownerlogin').then((res)=>{
            let data=res.data
            for(let i=0;i<data.length;i++){
                console.log(data[i].password)
                if (data[i].username===userlogin.username || data[i].password===userlogin.password){
                    navigate('/customerlist')
                }}
                
           
        })
    }



    return(

        <>
        <h1>login page for shop owner </h1>
        {JSON.stringify(userlogin.username)}<input type="email" onKeyUp={(e)=>{
            setuserlogin({
                ...userlogin,
                username: e.target.value
            })
        }} />
        <input type="password" onKeyUp={(e)=>{
            setuserlogin({
                ...userlogin,
                password: e.target.value
            })
        }}/>
        <button onClick={sendata}>submit</button>
        
        </>
    )




}

export default LOGINSO