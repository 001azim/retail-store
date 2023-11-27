import axios from "axios";
import React from "react";




function SALOGIN(){

    function getdata(){

        axios({
            method:'POST',
            url:
            'https://5b4ca264-2f6f-487f-8fa9-f0d342e0454c.mock.pstmn.io/users',
            data:{userId:4,title:'fghjkl',body:'xcfghjkl;'}
            

        }).then(function(response){
            console.log(response)
            alert('ok')
        })
    }


return(
    <>
    <button onClick={getdata}> get data</button>
  
<h1>superadmin login page</h1>
</>




)




}

export default SALOGIN;