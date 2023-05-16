/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import {onBoards} from '../constants/onBoards';
import {useNavigation} from '@react-navigation/native';

export default function OnBoards() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar animated={true} hidden />

      <View className="flex h-full justify-center ">
        <Swiper activeDotColor="#05BC61" autoplay={true} loop={true}>
          {onBoards?.map(item => (
            <View key={item.id} className="mt-20">
              <View className="my-5">
                <Image
                  source={item.img}
                  resizeMode="contain"
                  className="w-full "
                />
              </View>
              <View className="flex justify-center items-center gap-2 px-8">
                <Text className="text-xl text-[24px] text-[#242D28] text-center">
                  {item.title}
                </Text>
                <Text className="text-center text-[14px] text-gray-400">
                  {item.text}
                </Text>
              </View>
            </View>
          ))}
        </Swiper>
        <View className="flex justify-center space-y-5 items-center px-5 mb-5">
          <TouchableOpacity
            onPress={() => navigation.navigate('Control')}
            className="py-4 w-full bg-[#05BC61] rounded">
            <Text className="text-[16px] font-bold text-white text-center">
              Get Started
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('SourceSelection')}
            className="text-[16px] text-[#B0B3B2] font-bold">
            Recover Wallet
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
