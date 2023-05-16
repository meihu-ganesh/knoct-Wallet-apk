/* eslint-disable prettier/prettier */
import {Image, View, Text} from 'react-native';

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {data} from '../../constants/CountryData';
import {Button} from 'native-base';
import CountryList from './CountryList';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ProgressBar from '../../components/ProgressBar';
import {auth_1} from '../../../assets/image';

export default function Control() {
  const [modalOpen, setModalOpen] = useState(false);
  const [country, setCountry] = useState({});
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white justify-between ">
      <View className=" mt-[10%]">
        <View className=" flex-row justify-center">
          <Image
            source={auth_1}
            className=" w-[70%] h-[250px]"
            resizeMode="contain"
          />
        </View>
        <View className="flex justify-center items-center gap-5 px-6">
          <View className="space-y-2">
            <Text className="text-[24px] text-[#242D28] text-center">
              You control who sees your data
            </Text>
            <Text className="text-center text-[14px] text-gray-400">
              You data is encrypted and stored on your device. Interactions with
              others are routed securely throug the following regions. If you
              setup a cloud backup. It’s also stored in htis region
            </Text>
          </View>
        </View>

        <View className="mb-5 space-y-5 p-6">
          <View className="h-[100px] bg-[#F8FBF9] rounded p-3 ">
            <Text className="text-black">Region</Text>
            <View className="flex justify-between flex-row items-center mt-2">
              <View className="flex justify-center flex-row items-center gap-1">
                <Image
                  className="w-5 h-5 rounded-full"
                  source={country.img || data[0].img}
                />

                <Text className="text-sm font-bold text-gray-800">
                  {country.name || data[0].name}
                </Text>
              </View>
              <Button
                bg="#B3CEC1"
                mode="contained"
                color="#000"
                onPress={() => setModalOpen(true)}>
                Change
              </Button>
            </View>
          </View>
          <Button
            bgColor={'primary.100'}
            onPress={() => navigation.navigate('PhoneStorage')}
            className="py-5 w-full">
            Continue
          </Button>
        </View>
      </View>
      <CountryList
        setCountry={setCountry}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      <ProgressBar value={0} />
    </SafeAreaView>
  );
}
