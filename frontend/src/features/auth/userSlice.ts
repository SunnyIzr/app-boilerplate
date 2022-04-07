import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number | null,
  first_name: string | null,
  last_name: string | null,
  email: string | null,
}

const initialState: User = {
  id: null,
  first_name: null,
  last_name: null,
  email: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<User>
    ) => {
      state.id = action.payload.id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state = initialState
    }
  },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer