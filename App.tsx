/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import Main from './src/Main';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        100: '#05BC61',
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <NativeBaseProvider theme={theme}>
      <Main />
    </NativeBaseProvider>
  );
}
