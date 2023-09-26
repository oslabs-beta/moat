import { configureStore } from '@reduxjs/toolkit';
import forgeReducer from './reducers/forgeReducer';

const store = configureStore({
  reducer: {
    forge: forgeReducer
  }
});

export default store;