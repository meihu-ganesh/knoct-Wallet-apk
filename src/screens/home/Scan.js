/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {LogBox, StyleSheet, View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

LogBox.ignoreAllLogs();
export default function Scan() {
  const [code, setCode] = useState('Please scan something! ');
  let i = 0;
  const barcodeReadHandler = ({data}) => {
    i++;
    if (i === 1) {
      setCode(data);
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        onBarCodeRead={barcodeReadHandler}
        captureAudio={false}>
        <View className="flex-col justify-evenly items-center h-full">
          <View className="w-[200px] h-[200px] border border-green-500"></View>
          <Text className="text-white font-bold text-[17px] bg-green-500 px-4 py-2">
            {code}
          </Text>
        </View>
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
});
