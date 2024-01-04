import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'user',
    initialState: {
      loginValue:{
        email:"",
        password:""
      },
      ownlist:[],
      adminid:0
    },
    reducers: {
        checklogin:((state,action)=>{
            state.loginValue=action.payload
        }),
        adduser:((state,action)=>{
            state.ownlist=action.payload
        }),
        addAdminID:((state,action)=>{
          state.adminid=action.payload
      })
        
    }
})
export const {checklogin,adduser,setStatus ,addAdminID} = userSlice.actions;

  export default userSlice.reducer