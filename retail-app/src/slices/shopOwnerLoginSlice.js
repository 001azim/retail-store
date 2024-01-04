import { createSlice } from '@reduxjs/toolkit'

export const ShopOwnerLoginSlice = createSlice({
    name: 'ShopOwnerLogin',
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
  
  
  export const { setUserLogin,setStatus,setOwnerId ,setonlyownerid} = ShopOwnerLoginSlice.actions
  
  export default ShopOwnerLoginSlice.reducer
