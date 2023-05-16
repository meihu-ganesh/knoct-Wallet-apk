/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'native-base';
import ProgressBar from '../../components/ProgressBar';
import {auth_2} from '../../../assets/image';

export default function PhoneStorage({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className=" flex-1 justify-center gap-8  items-center ">
        <View className=" w-[70%] h-[250px]">
          <Image
            source={auth_2}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
        <View className="flex justify-center items-center gap-5 px-2">
          <View className="space-y-2">
            <Text className="text-[24px] text-[#242D28] text-center">
              Please provide access to phones’ storage
            </Text>
            <Text className="text-center text-[14px] text-gray-400">
              Knoct requires access to the phone’s storage tosave your wallet
              and credentials on your device. Knoct only has access to folders
              connected with the app and not to entire device folders.
            </Text>
          </View>
        </View>

        <View className="px-8 w-full">
          <Button
            bgColor={'primary.100'}
            onPress={() => navigation.navigate('Biometrics')}
            className="py-5 w-full">
            <Text className="text-lg text-white">Enable Storage Access</Text>
          </Button>
        </View>
      </View>
      <ProgressBar value={0.25} />
    </SafeAreaView>
  );
}
