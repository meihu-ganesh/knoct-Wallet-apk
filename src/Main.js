/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import InitialNavigation from './navigations/InitialNavigation';

export default function Main() {
  return (
    <NavigationContainer>
      <InitialNavigation />
    </NavigationContainer>
  );
}
