import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'user',
    initialState: {
      loginValue:{
        email:"",
        password:""
      },
      ownlist:[],
    
    },
    reducers: {
        checklogin:((state,action)=>{
            state.loginValue=action.payload
        }),
        adduser:((state,action)=>{
            state.ownlist=action.payload
        }),
        
    }
})
export const {checklogin,adduser,setStatus } = userSlice.actions;

  export default userSlice.reducer