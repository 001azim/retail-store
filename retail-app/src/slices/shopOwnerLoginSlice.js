import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'shopOwerLogin',
    initialState: {
        userLogin:{
            username:"",
            password:""
        }
    
    },
    reducers: {
        setUserLogin :(state,action)=>{
          state.userLogin=action.payload
      }
     
    },
  })
  
  
  export const { setUserLogin } = customerSlice.actions
  
  export default customerSlice.reducer