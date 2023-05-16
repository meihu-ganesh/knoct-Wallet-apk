/* eslint-disable prettier/prettier */
import {Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import HomeTitleIcon from './HomeTitleIcon';
import {Icon, Input} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function NewBaseHomeHeader({navigation, setShowModal}) {
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={require('../../assets/home_bg.png')}
        resizeMode="cover"
        className="flex-1 p-7 rounded-bl-3xl rounded-br-3xl overflow-hidden">
        <HomeTitleIcon
          navigation={navigation}
          setShowModal={setShowModal}
          color={'#ffffff'}
        />
        <View className="flex-row items-center justify-start gap-1 ">
          <Image
            source={require('../../assets/avatar.png')}
            className="w-[70px] h-[70px]"
            resizeMode="contain"
          />

          <Text className="text-white text-sm">Hey, Anna!</Text>
        </View>
        <Text className="text-white text-lg font-bold mt-2">
          Get your trusted digital identity with
        </Text>
        <View className="my-7 bg-[#ffffff] rounded-md shadow-lg w-full">
          <Input
            placeholder="Search"
            fontSize={'md'}
            variant="outline"
            className="text-black text-md w-full "
            py="2"
            px="2"
            borderWidth="0"
            InputLeftElement={
              <Icon
                ml="2"
                size="lg"
                as={<Ionicons name="ios-search" color={'#ddd'} />}
              />
            }
            InputRightElement={
              <Icon
                mr="2"
                size="lg"
                as={<Ionicons name="md-qr-code-outline" color={'#ddd'} />}
              />
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
}
