import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'user',
    initialState: {
      loginValue:{}
      
    },
    reducers: {
        checklogin:((state,action)=>{
            state.login=action.payload
        }),
    }
})
export const {checklogin } = userSlice.actions;

  export default userSlice.reducer