import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'shopOwerLogin',
    initialState: {
        userLogin:{
            email:"",
            password:""
        },
        userstatus:false
    },
    reducers: {
        setUserLogin :(state,action)=>{
          state.userLogin=action.payload
      },
      setStatus:(state,action)=>{
        state.userstatus=action.payload
      }
     
    },
  })
  
  
  export const { setUserLogin,setStatus } = customerSlice.actions
  
  export default customerSlice.reducer