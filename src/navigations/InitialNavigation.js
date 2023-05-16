/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationData} from './InitialNavigationData';

const Stack = createNativeStackNavigator();
export default function InitialNavigation() {
  return (
    <Stack.Navigator initialRouteName="OnBoards">
      {navigationData.map(page => (
        <Stack.Screen
          key={page.id}
          name={page.name}
          component={page.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
