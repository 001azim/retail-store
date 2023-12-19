import { createSlice } from '@reduxjs/toolkit'

export const registerSlice=createSlice({
    name: 'register',
    initialState: {
      ownerDetails: {
        Username:"",
        Shopname:"",
        email: "",
        password: "",
        aadhar:"",
        mobileno:"",
        address:"",
        city:"",
        pin:""
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