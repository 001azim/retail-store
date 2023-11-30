import axios from "axios";
import React from "react";




function SALOGIN(){

    function getdata(){

        axios({
            method:'POST',
            url:
            'https://7cde2117-f3f4-4d6e-8ac5-3164b20deee1.mock.pstmn.io/soregister',
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