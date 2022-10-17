import { createSlice } from '@reduxjs/toolkit';
import { IPage } from '../../interfaces';

interface IPageState {
  page: IPage | undefined;
}

const initialState : IPageState = {
  page: undefined,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    onLoadingPage: ( state, { payload } ) => {
      if ( payload._id ) {
        state.page = payload;
      } else {
        state.page = undefined;
      }
    },
    onCreatePage: ( state, { payload } ) => {
      state.page = payload;
    },
    onUpdatePage: ( state, { payload } ) => {
      state.page = payload;
    },
    onDeletePage: ( state ) => {
      state.page = undefined;
    },
    onSignOutPage: ( state ) => {
      state.page = undefined;
    },
  }
})

export const {
  onLoadingPage,
  onCreatePage,
  onUpdatePage,
  onDeletePage,
  onSignOutPage,
} = pageSlice.actions;

