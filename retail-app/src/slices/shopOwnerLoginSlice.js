import { createSlice } from '@reduxjs/toolkit'

export const shopOwnerLoginSlice = createSlice({
    name: 'shopOwnerLogin',
    initialState: {
        userLogin:{
            email:"",
            password:""
        },
        userstatus:false,
        ownerid:{},
        onlyownerid : ""
    },
    reducers: {
        setUserLogin :(state,action)=>{
          state.userLogin=action.payload
      },
      setStatus:(state,action)=>{
        state.userstatus=action.payload
      },
      setOwnerId:(state,action)=>{
        state.ownerid=action.payload
      },
      setonlyownerid: (state, action) => {
        state.onlyownerid = action.payload
      }
     
    },
  })
  
  
  export const { setUserLogin,setStatus,setOwnerId, setonlyownerid} = shopOwnerLoginSlice.actions
  
  export default shopOwnerLoginSlice.reducer

