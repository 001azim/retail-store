import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/customerSlice'
import registerSlice from './slices/registerSlice'
import userSlice from './slices/userSlice'
export default configureStore({
  reducer: {
  customer:customerSlice,
  register:registerSlice,
  user:userSlice,
  },

})   