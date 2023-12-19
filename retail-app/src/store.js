import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/customerSlice'
import shopOwnerLoginSlice from './slices/shopOwnerLoginSlice'
export default configureStore({
  reducer: {

customer:customerSlice,
shopOwerLogin:shopOwnerLoginSlice

  },
  reducer: {
    register:registerSlice,
    },
})   