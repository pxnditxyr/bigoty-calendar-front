import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces';

interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: IUser;
  errorMessage: string | Array<string> | undefined;
}

const initialState : AuthState = {
  status: 'checking',
  user: {} as IUser,
  errorMessage: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checking: ( state ) => {
      state.status = 'checking';
      state.user = {} as IUser;
    },
    onSignIn: ( state, { payload } ) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
    onSignOut: ( state, { payload } ) => {
      state.status = 'not-authenticated';
      state.user = {} as IUser;
      state.errorMessage = undefined;
    },
    onSignUp: ( state, { payload } ) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    }
  }
})

export const { checking, onSignIn, onSignOut } = authSlice.actions;
