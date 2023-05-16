/* eslint-disable prettier/prettier */
import {View, Image} from 'react-native';
import React from 'react';
import {Text} from 'native-base';
import {password, file, chart, data, download} from '../../../assets/image';
import {AntDesign} from '../../../assets/icons';

export default function GeneralOptions() {
  return (
    <View>
      <Text className="text-2xl mb-1 text-black">General</Text>
      <View className=" justify-between flex-row items-center border-b border-b-gray-300 py-2">
        <View className="flex-row justify-center gap-3 items-center">
          <Image source={password} resizeMode="contain" className="w-7 h-7" />

          <View>
            <Text className=" text-black">Wallet Name</Text>
            <Text className="text-sm text-gray-500">nirdesh001</Text>
          </View>
        </View>
        <Text className="text-green-500 text-sm">Edit</Text>
      </View>
      <View className=" justify-between flex-row items-center border-b border-b-gray-300 py-2">
        <View className=" flex-row justify-center gap-3 items-center">
          <Image source={data} resizeMode="contain" className="w-7 h-7" />

          <View>
            <Text className=" text-black">Network</Text>
            <Text className="text-sm text-gray-500">Dwa Network</Text>
          </View>
        </View>
        <View>
          <AntDesign name="right" size={18} color="#bbb" />
        </View>
      </View>
      <View className=" justify-between flex-row items-center border-b border-b-gray-300 py-2">
        <View className=" flex-row justify-center gap-3 items-center">
          <Image source={chart} resizeMode="contain" className="w-7 h-7" />

          <Text className=" text-black">Notifications</Text>
        </View>
        <Text className="text-green-500 text-sm">Refresh</Text>
      </View>
      <View className=" justify-between flex-row items-center border-b border-b-gray-300 py-2">
        <View className=" flex-row justify-center gap-3 items-center">
          <Image source={download} resizeMode="contain" className="w-7 h-7" />

          <Text className=" text-black">Backup & Restore</Text>
        </View>
        <View>
          <AntDesign name="right" size={18} color="#bbb" />
        </View>
      </View>
      <View className="flex justify-between flex-row items-center border-b border-b-gray-300 py-2">
        <View className="flex flex-row justify-center gap-3 items-center">
          <Image source={file} resizeMode="contain" className="w-7 h-7" />

          <Text className=" text-black">Export Wallet</Text>
        </View>
        <View>
          <AntDesign name="right" size={18} color="#bbb" />
        </View>
      </View>
    </View>
  );
}
