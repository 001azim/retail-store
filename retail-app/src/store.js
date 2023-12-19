import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/customerSlice'
import registerSlice from './slices/registerSlice'
export default configureStore({
  reducer: {
<<<<<<< HEAD

customer:customerSlice

=======
  customer:customerSlice,
>>>>>>> 4e1bd253806641199ed5d7d28c159a22e7916a86
  },
  reducer: {
    register:registerSlice,
    },
})   