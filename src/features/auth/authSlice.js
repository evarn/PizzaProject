import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  isSignedIn: false,
  username: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Проверка
    signIn: (state, action) => {
      state.isSignedIn = true;
      state.username = action.payload.username;
      return state;
    },
  },
});

export const {signIn} = authSlice.actions;

export default authSlice.reducer;
