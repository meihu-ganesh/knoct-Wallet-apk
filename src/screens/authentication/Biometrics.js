/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button} from 'native-base';
import ProgressBar from '../../components/ProgressBar';
import {auth_3} from '../../../assets/image';

export default function Biometrics({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className=" flex-1 justify-center gap-8  h-full items-center ">
        <View className=" w-[50%] h-[250px]">
          <Image
            source={auth_3}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
        <View className="flex justify-center items-center gap-5 px-2">
          <View className="space-y-2">
            <Text className="text-[24px] text-[#242D28] text-center">
              Easy access to wallter using Biometrics
            </Text>
            <Text className="text-center text-[14px] text-gray-400">
              Using biometrics security significantly reduces the chances your
              account will be compromised in case you phone in lost or stolen.
            </Text>
          </View>
        </View>

        <View className="px-8 w-full">
          <Button
            bgColor={'primary.100'}
            onPress={() => navigation.navigate('CloudBackUp')}
            className="py-5 w-full">
            <Text className="text-lg text-white">Enable Touch ID</Text>
          </Button>
        </View>
      </View>
      <ProgressBar value={0.5} />
    </SafeAreaView>
  );
}
