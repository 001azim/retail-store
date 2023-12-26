
import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    details: {
        customer_name: "",
        phone: "",
        Address: "",
        email:""

    } ,
    due_details :{
      Last_purchase_date: "",
      due_amount: 0,
      due_date: ""

    },
    customer_id:{

    },
    apidata: []

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
  },
    setapidata : (state,action)=>{
    state.apidata=action.payload
}

   
  },
})


export const { setdetails,setduedetails,setcustomerid ,setapidata} = customerSlice.actions

export default customerSlice.reducer
