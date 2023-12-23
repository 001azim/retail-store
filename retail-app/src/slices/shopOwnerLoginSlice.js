import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'shopOwerLogin',
    initialState: {
        userLogin:{
            email:"",
            password:""
        },
        userstatus:false,
        userid:{}
    },
    reducers: {
        setUserLogin :(state,action)=>{
          state.userLogin=action.payload
      },
      setStatus:(state,action)=>{
        state.userstatus=action.payload
      },
      setUserId:(state,action)=>{
        state.userid=action.payload
      }
     
    },
  })
  
  
  export const { setUserLogin,setStatus,setUserId } = customerSlice.actions
  
  export default customerSlice.reducer