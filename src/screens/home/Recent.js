/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {SimpleLineIcons} from '../../../assets/icons';
export default function Recent({data}) {
  return (
    <View className="flex justify-center items-center gap-[2px] bg-[#F8FBF9] p-5 rounded-xl">
      <Image source={data.icon} resizeMode={'contain'} className="w-6 h-6" />
      <Text className="text-[11px] text-gray-700 font-bold">{data.name}</Text>
      <Text className="text-[9px] text-gray-600 font-bold">{data.title}</Text>
      <View className="flex-row flex justify-center items-center  pt-[2px]">
        <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
        <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
        <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
      </View>
      <Text className="text-gray-400 text-[8px]">{data.date}</Text>
    </View>
  );
}
