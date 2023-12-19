import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/customerSlice'
export default configureStore({
  reducer: {

customer:customerSlice

  },
})   