import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/customerSlice'
import shopOwnerLoginSlice from './slices/shopOwnerLoginSlice'
import registerSlice from './slices/registerSlice'
import userSlice from './slices/userSlice'
  
export default configureStore({
  reducer: {


customer:customerSlice,
shopOwnerLogin:shopOwnerLoginSlice,
register:registerSlice,
user:userSlice
  },
  
})   




