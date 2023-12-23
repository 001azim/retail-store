
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

    },
    customer_id:{

    }
  },
  reducers: {
    setdetails :(state,action)=>{
        state.details=action.payload
    },
    setduedetails :(state,action)=>{
      state.due_details=action.payload
  },
    setcustomerid :(state,action)=>{
      state.customer_id=action.payload
  }
   
   
  },
})


export const { setdetails,setduedetails,setcustomerid } = customerSlice.actions

export default customerSlice.reducer