import {configureStore} from '@reduxjs/toolkit';
import user from './userSlice';
import indicadores from './indicadoresSlice';

export default configureStore({
  reducer: {
    user,
    indicadores,
  },
  devTools: true,
});
