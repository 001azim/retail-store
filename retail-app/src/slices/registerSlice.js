import { createSlice } from '@reduxjs/toolkit'

export const registerSlice=createSlice({
    name: 'register',
    initialState: {
      ownerDetails: {
        name:"",
        shop_name:"",
        email: "",
        password: "",
        aadhar:"",
        phone:"",
        street:"",
        city:"",
        area:"",
        pincode:""
      },
    },

    reducers:{
        updateDetails:(state,action)=>{
            state.ownerDetails=action.payload
        }
    }
})

export const { updateDetails } = registerSlice.actions

export default registerSlice.reducer