
import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    details: {
        customer_name: "azim",
        phone: "67646878",
        Address: "fhachaauc",
        email:"azim@gmail.com"

    } ,
    due_details :{
      Last_purchase_date: "",
      due_amount: 0,
      due_date: ""

    }
  },
  reducers: {
    setdetails :(state,action)=>{
        state.details=action.payload
    },
    setduedetails :(state,action)=>{
      state.details=action.payload
  }
   
  },
})


export const { setdetails } = customerSlice.actions

export default customerSlice.reducer