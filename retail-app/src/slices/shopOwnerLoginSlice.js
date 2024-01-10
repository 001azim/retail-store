import { createSlice } from '@reduxjs/toolkit'

export const ShopOwnerLoginSlice = createSlice({
    name: 'ShopOwnerLogin',
    initialState: {
        userLogin:{
            email:"",
            password:""
        },
        userstatus:false,
        ownerid:{}
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
      }
     
    },
  })
  
  
  export const { setUserLogin,setStatus,setOwnerId } = ShopOwnerLoginSlice.actions
  
  export default ShopOwnerLoginSlice.reducer