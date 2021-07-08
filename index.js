import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import store from '@presenter/io';
import App from './src/app/App';
import { name as appName } from './app.json';

const Aplication = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Aplication);
