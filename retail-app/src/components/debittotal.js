import React, { useEffect } from 'react'

function Debittotal(props) {


    useEffect(() => {
  

        let customerList = props.filteredItems.map((item) => {
          let cus_tot = 0;
          if(item.debits){
            item.debits.map((c_d)=>{
              cus_tot = cus_tot + c_d.debit_amount
            }) 
          }
    
          return {...item,debit_total:cus_tot};
        });
        
        console.log("==>",customerList)
        
      }, [props.filteredItems]);


}

export default Debittotal