import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import InjectHOC from './InjectHOC';
import { Props, SlicesHome } from './interfaceInject';

import Home from '@screens/Home/Home';

import { getIndicadoresRedux } from '@presenter/io/indicadoresSlice';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
      
    //   drawerContent={(props) => <DrawerContent { ...props } />}
    >
      <Drawer.Screen name="Home" component={InjectHOC<Props, SlicesHome>(Home, { getIndicadoresRedux })} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
