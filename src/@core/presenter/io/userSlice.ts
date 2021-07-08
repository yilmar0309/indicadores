import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
/* 
import { CodeBodyEntity, UserAuth } from '@presenter/domain/entity/user.entity';

import { UserController } from '@presenter/adapters/controllers/user.controller'; */
import axios from 'axios';

export const validateAuthLocal = (access_token: string) => async (dispatch: Dispatch) => {
  try {
   /*  const userController = new UserController();
    const resultAuth: UserAuth = await userController.authUserWithToken(access_token);
    if (resultAuth) {
      await dispatch(setUser(resultAuth.user));
      return resultAuth;
    } else {
      return false;
    } */
  } catch (error) {
    return false;
  }
};

export const authRedux = (body: any) => async (dispatch: Dispatch) => {
  try {
      
  } catch (error) {
    console.log('*** authRedux Error: ****', error.message);
    throw new Error(error);
  }
};

const setSession = async (access_token: string | null) => {
  if (access_token) {
    await AsyncStorage.setItem('@jwt_access_token', access_token);
    axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
  } else {
    await AsyncStorage.removeItem('@jwt_access_token');
    delete axios.defaults.headers.common.Authorization;
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
