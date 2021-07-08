import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import InjectHOC from './InjectHOC';
import { Props, SlicesDetail, SlicesLogin } from './interfaceInject'

import DrawerNavigation from './drawer.navigation';
import TabsNavigation from './tabs.navigation';

import Splash from '@screens/Splash/Splash';
import UIKit from '@screens/UIKit/UIKit';
import Login from '@screens/Login/Login';
import Detail from '@screens/Detail/Detail';
import DetailItem from '@screens/DetailItem/DetailItem';

import { getIndicadoresByTypeRedux } from '@presenter/io/indicadoresSlice';

enableScreens();
const Stack = createStackNavigator();
function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName='Indicadores'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={InjectHOC<Props, SlicesLogin>(Login, { })} />
      <Stack.Screen name="UIKit" component={UIKit} />
      <Stack.Screen name="DetailItem" component={InjectHOC<Props, SlicesDetail>(DetailItem, { getIndicadoresByTypeRedux })}  />
      <Stack.Screen name="Detail" component={InjectHOC<Props, SlicesDetail>(Detail, { getIndicadoresByTypeRedux })} />
      <Stack.Screen name="Indicadores" component={DrawerNavigation} />
      <Stack.Screen name="Tabs" component={TabsNavigation} />
    </Stack.Navigator>
  );
}

export default StackNavigation;