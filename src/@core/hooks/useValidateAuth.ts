import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { setUser, validateAuthLocal } from "@presenter/io/userSlice";

import useResetNavigation from './useResetNavigation';

export default () => {
  const dispatch = useDispatch();
  const { navigateWithReset } = useResetNavigation();

  const validateAuth = async () => {
    setInterceptors();
    const access_token: any = await getAccessToken();
    if (!access_token) {
      navigateWithReset('Login');
    }

    console.log('access_token', access_token)
    if (isAuthTokenValid(access_token)) {
      const user: any = await dispatch(validateAuthLocal(access_token));
      if (user) {
        setSession(user.access_token);
      } else {
        setSession(null);
        logoutAuth();
      }
    } else {
      setSession(null);
      logoutAuth()
    }
  }

  const setInterceptors = () => {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      err => {
        return new Promise((resolve, reject) => {
          if (err.response.status === 401) {
            setSession(null);
            logoutAuth();
          }
        })
      }
    )
  }

  const getAccessToken = () => {
		return AsyncStorage.getItem('@jwt_access_token');
	};

  const setSession = (access_token: string | null) => {
		if (access_token) {
			AsyncStorage.setItem('@jwt_access_token', access_token);
			axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
		} else {
			AsyncStorage.removeItem('@jwt_access_token');
			delete axios.defaults.headers.common.Authorization;
		}
	};

  const isAuthTokenValid = (access_token: string) => {
		if (!access_token) {
			return false;
		}
		const decoded: any = jwtDecode(access_token);
		const currentTime = Date.now() / 1000;
		if (decoded.exp < currentTime) {
			console.warn('access token expired');
			return false;
		}

		return true;
	};

  const logoutAuth = async () => {
    try {
      await dispatch(setUser({}));
      navigateWithReset('Login');
    } catch (error) {
      Alert.alert('¡Tu sesión cáduco, pero no se pudo cerrar la sesíon!');
    }
  }

  return { validateAuth, logoutAuth };
}