/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import {document} from '../../../assets/image';

export default function Notification({navigation}) {
  return (
    <SafeAreaView className="flex-1 p-7 bg-white ">
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>

      <View>
        <View className=" flex-col justify-center items-center h-full">
          <Image
            source={document}
            resizeMode="contain"
            className="w-[200px] h-[200px]"
          />
          <Text className="text-center text-sm text-gray-500 mt-[7%]">
            Others can request from you throuth a proof request. You control
            what and with whom you share your information.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
