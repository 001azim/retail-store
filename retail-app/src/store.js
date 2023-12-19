import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/customerSlice'
import registerSlice from './slices/registerSlice'
export default configureStore({
  reducer: {
  customer:customerSlice,
  register:registerSlice,
  },
 
})   