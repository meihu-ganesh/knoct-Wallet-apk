/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import {group} from '../../../assets/image';
import {AntDesign} from '../../../assets/icons';

export default function Support() {
  return (
    <View>
      <Text className="text-2xl mb-1 text-black">Support</Text>
      <View className="flex justify-between flex-row items-center border-b border-b-gray-300 py-2">
        <View className="flex flex-row justify-center gap-3 items-center">
          <Image source={group} resizeMode="contain" className="w-7 h-7" />

          <Text className="text-black">Biometrics</Text>
        </View>
        <View>
          <AntDesign name="right" size={18} color="#ddd" />
        </View>
      </View>
    </View>
  );
}
