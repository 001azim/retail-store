
import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    details: {
        customer_name: "",
        mobile: "",
        Address: "",
        Last_purchase_date: "",
        due_amount: 0,
        due_date: ""

    } ,
  },
  reducers: {
    setdetails :(state,action)=>{
        state.details=action.payload
    }
   
  },
})


export const { setdetails } = customerSlice.actions

export default customerSlice.reducer