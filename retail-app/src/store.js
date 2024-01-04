import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/customerSlice'
import ShopOwnerLoginSlice from './slices/shopOwnerLoginSlice'
import registerSlice from './slices/registerSlice'
import userSlice from './slices/userSlice'
  
export default configureStore({
  reducer: {


customer:customerSlice,
ShopOwnerLogin:ShopOwnerLoginSlice,
register:registerSlice,
user:userSlice
  },
  
})   




