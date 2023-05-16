/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuWalletPage from '../screens/WalletScreen/MenuWalletPage';
import PeopleWallet from '../screens/WalletScreen/PeopleWallet';
const Stack = createNativeStackNavigator();
export default function WalletNavigationPage() {
  return (
    <Stack.Navigator initialRouteName="MenuWalletPage">
      <Stack.Screen
        name={'PeopleWallet'}
        component={PeopleWallet}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'MenuWalletPage'}
        component={MenuWalletPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
