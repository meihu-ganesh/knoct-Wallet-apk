/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DIDPage from '../screens/DID/DIDPage';
const Stack = createNativeStackNavigator();
export default function DIDNavigationPage() {
  return (
    <Stack.Navigator initialRouteName="DIDPage">
      <Stack.Screen
        name={'DIDPage'}
        component={DIDPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
