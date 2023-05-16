/* eslint-disable prettier/prettier */
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import MoreInformation from '../screens/home/MoreInformation';
import RecentIdentites from '../screens/home/RecentIdentites';
import RecentVerification from '../screens/home/RecentVerification';
import NewBaseHome from '../screens/home/NewBaseHome';
const Stack = createNativeStackNavigator();
export default function WalletNavigationPage() {
  return (
    <Stack.Navigator initialRouteName="NewBaseHome">
      <Stack.Screen
        name={'NewBaseHome'}
        component={NewBaseHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Identites'}
        component={RecentIdentites}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Verification'}
        component={RecentVerification}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'MoreInformation'}
        component={MoreInformation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
