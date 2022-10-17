
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { calendarSlice } from './calendar';
import { pageSlice } from './page';
import { uiSlice } from './ui';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
    auth: authSlice.reducer,
    page: pageSlice.reducer,
  },
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
