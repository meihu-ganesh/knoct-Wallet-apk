/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import GeneralOptions from './GeneralOptions';
import SecurityOptions from './SecurityOptions';
import Support from './Support';
import {AntDesign} from '../../../assets/icons';

export default function Menu({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-7 flex-1 flex-col justify-between">
        <View className="flex gap-4 ">
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl text-black">Menu</Text>
          <Text className="text-sm text-gray-500">
            You can find all the preferences in this menu
          </Text>
        </View>
        <GeneralOptions />
        <SecurityOptions />
        <Support />
      </View>
    </SafeAreaView>
  );
}
