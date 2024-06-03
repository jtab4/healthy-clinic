import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';

// Spróbuj odczytać stan z localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: persistedState, // Ustawienie początkowego stanu za pomocą wcześniej odczytanego stanu z localStorage
});

// Zapisz stan Reduxa do localStorage po każdej zmianie
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
