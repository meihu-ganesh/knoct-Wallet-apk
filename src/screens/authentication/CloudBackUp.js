/* eslint-disable prettier/prettier */
import {Image, View, Text} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'native-base';
import ProgressBar from '../../components/ProgressBar';
import {auth_4} from '../../../assets/image';

export default function PhoneStorage({navigation}) {
  const [value, setValue] = useState(0.75);

  const navigationPage = () => {
    setValue(1);
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 400);
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center gap-10  h-full items-center">
        <View className=" w-[75%] h-[250px] ">
          <Image
            source={auth_4}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
        <View className="flex justify-center items-center gap-5 px-2">
          <View className="space-y-2">
            <Text className="text-[24px] text-[#242D28] text-center">
              Secure your data with Cloud Backup
            </Text>
            <Text className="text-center text-[14px] text-gray-400">
              Backing up you wallet on the cloud protects your information from
              being lost or destroyed. You can back up your wallet in settings.
            </Text>
          </View>
        </View>

        <View className="px-8 w-full">
          <Button
            bgColor={'primary.100'}
            onPress={navigationPage}
            className="py-5 w-full">
            <Text className="text-lg text-white">Continue</Text>
          </Button>
        </View>
      </View>
      <ProgressBar value={value} />
    </SafeAreaView>
  );
}
