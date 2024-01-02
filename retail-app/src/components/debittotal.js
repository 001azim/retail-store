function Debittotal(c_data) {


  return c_data.map((item) => {
    let deb_tot = 0;
    let cre_tot = 0;
    let amount_tot = 0;
    if (item.debits) {
      item.debits.map((c_d) => {
        if (c_d.type == "debit" || c_d.type == "interest") {

          deb_tot = deb_tot + Number(c_d.amount)

        }
        else if (c_d.type == "credit") {
          
          cre_tot = cre_tot + Number(c_d.amount)

        }
        amount_tot = deb_tot - cre_tot
      })
    }

    return { ...item, debit_total: deb_tot, credit_total: cre_tot, amount: amount_tot };
  });


}


export default Debittotal

 