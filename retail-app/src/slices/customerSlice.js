
import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    details: {
      customer_name: "",
      phone: "",
      Address: "",
      email: ""

    },
    due_details: {
      Last_purchase_date: "",
      due_amount: 0,
      due_date: ""

    },
    customer_id: {

    },
    apidata: [],

    due_amount: 0,

    credit_details: {
      credit_date: "",
      credit_amount: 0
    },

    debit_details: {
      debit: "",
      credit: "",
      total: ""
    }


  },
  reducers: {
    setdetails: (state, action) => {
      state.details = action.payload
    },
    setduedetails: (state, action) => {
      state.due_details = action.payload
    },
    setcustomerid: (state, action) => {
      state.customer_id = action.payload
    },
    setapidata: (state, action) => {
      state.apidata = action.payload
    },

    setdueamount: (state, action) => {
      state.due_amount = action.payload
    },

    setcreditdetails: (state, action) => {
      state.credit_details = action.payload
    },

    setdebtdetails: (state, action) => {
      state.debit_details = action.payload
    }

  },
})


export const { setdetails, setduedetails, setcustomerid, setapidata, setdueamount, setcreditdetails ,setdebtdetails } = customerSlice.actions

export default customerSlice.reducer
