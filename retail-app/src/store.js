import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/customerSlice'
import shopOwnerLoginSlice from './slices/shopOwnerLoginSlice'
import registerSlice from './slices/registerSlice'
import userSlice from './slices/userSlice'
  
export default configureStore({
  reducer: {


customer:customerSlice,
shopOwerLogin:shopOwnerLoginSlice,
register:registerSlice,
user:userSlice
  },
  
})   




