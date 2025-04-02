import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './ThemeChanger';

export const store = configureStore({
  reducer: {
    theme: themeReducer
  }
});