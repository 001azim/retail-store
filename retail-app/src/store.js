import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/customerSlice'
import shopOwnerLoginSlice from './slices/shopOwnerLoginSlice'
import registerSlice from './slices/registerSlice'

  
export default configureStore({
  reducer: {


customer:customerSlice,
shopOwerLogin:shopOwnerLoginSlice,
register:registerSlice

  },
  
})   



