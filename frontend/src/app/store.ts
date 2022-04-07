import { configureStore } from '@reduxjs/toolkit';
import { authApiSlice } from '../features/auth/authApiSlice';
import { userApiSlice } from '../features/auth/userApiSlice';
import userReducer from '../features/auth/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApiSlice.middleware,
      userApiSlice.middleware,
    );
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
