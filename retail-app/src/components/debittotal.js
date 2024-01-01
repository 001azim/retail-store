
function Debittotal(c_data) {
    
    return c_data.map((item) => {
      let cus_tot = 0;
      if(item.debits){
        item.debits.map((c_d)=>{

          cus_tot = cus_tot + Number(c_d.debit_amount)
        }) 
      }
      return {...item,debit_total:cus_tot};
    });


}

export default Debittotal