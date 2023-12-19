import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/customerSlice'
import registerSlice from './slices/registerSlice'
import userReducer from './reducer/userSlice'
import userSlice from './reducers/userSlice'
export default configureStore({
  reducer: {
  customer:customerSlice,
  register:registerSlice,
  user:userSlice,
  },

})   