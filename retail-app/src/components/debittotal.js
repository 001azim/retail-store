import { useState } from "react";

function Debittotal(c_data) {
  let due = true

  return c_data.map((item) => {

    let deb_tot = 0;
    let cre_tot = 0;
    let amount_tot = 0;
    let due_date = 0;
    if (item.debits) {
      item.debits.map((c_d) => {
        if (c_d.type == "debit" || c_d.type == "interest") {
          deb_tot = deb_tot + Number(c_d.amount)
          if (due == true) {
            due_date = c_d.due_date
            due = false
          }
        }
        else if (c_d.type == "credit") {
          cre_tot = cre_tot + Number(c_d.amount)
          if (due == true) {
            due_date = c_d.due_date
            due = false          }
        }
        amount_tot = deb_tot - cre_tot

      })
     
    }
    due = true
    return { ...item, debit_total: deb_tot, credit_total: cre_tot, amount: amount_tot, due_date: due_date };
  });
}


export default Debittotal

