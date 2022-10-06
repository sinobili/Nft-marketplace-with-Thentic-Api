import { configureStore } from '@reduxjs/toolkit'
import AccountReducer from "./slicers/accounts"
export default configureStore({
  reducer: {
    accounts: AccountReducer
  }
})