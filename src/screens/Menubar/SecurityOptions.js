/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {scan} from '../../../assets/image';
import {FontAwesome} from '../../../assets/icons';
export default function SecurityOptions() {
  return (
    <View>
      <Text className="text-2xl mb-1 text-black">Security</Text>
      <View className="flex justify-between flex-row items-center border-b border-b-gray-300 py-2">
        <View className="flex flex-row justify-center gap-3 items-center">
          <Image source={scan} resizeMode="contain" className="w-7 h-7" />

          <Text className="text-black">Biometrics</Text>
        </View>
        <View>
          <FontAwesome name="check-circle" size={18} color="#05BC61" />
        </View>
      </View>
    </View>
  );
}
