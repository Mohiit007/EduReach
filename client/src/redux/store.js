import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import superAdminReducer from './superAdminSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    superAdmin: superAdminReducer,
  },
});
