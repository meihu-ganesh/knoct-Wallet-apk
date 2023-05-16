/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Input} from 'native-base';
import CountryList from '../authentication/CountryList';
import {data} from '../../constants/CountryData';
import {AntDesign, Ionicons} from '../../../assets/icons';
export default function CloudRecovery({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [country, setCountry] = useState({});
  return (
    <SafeAreaView className="flex-1 bg-white p-7 justify-between">
      <View className="justify-between gap-10">
        <View className=" ">
          <TouchableOpacity
            onPress={() => navigation.navigate('SourceSelection')}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl text-black my-4">Cloud Recovery</Text>
          <Text className="text-sm text-gray-500">
            Recover your walllet password using the recovery phrase you set
            during the signup. Make sure that you do not forget or share the
            recovery phrase for your own security.
          </Text>
        </View>
        <View>
          <Text className="mb-2 text-gray-500">
            Enter wallet recovery phrase
          </Text>
          <Input
            size="2xl"
            className="bg-[#F8FBF9] text-black"
            borderWidth={0}
            InputLeftElement={
              <View className="px-2 ">
                <Ionicons name="ios-search" size={18} color={'#ddd'} />
              </View>
            }
          />
        </View>

        <View className="h-[100px] bg-[#F8FBF9] rounded p-3 ">
          <Text className="text-black text-sm">Region</Text>
          <View className="flex justify-between flex-row items-center mt-2">
            <View className="flex justify-center flex-row items-center gap-1">
              <Image
                className="w-5 h-5 rounded-full"
                source={country.img || data[0].img}
              />

              <Text className="text-sm font-bold text-gray-600">
                {country.name || data[0].name}
              </Text>
            </View>
            <Button
              bg="#B3CEC1"
              mode="contained"
              onPress={() => setModalOpen(true)}>
              Change
            </Button>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => navigation.navigate('HomeScreen')}
          className="py-5 w-[100%] bg-[#05BC61]">
          <Text className="text-lg text-white">Recover Wallet</Text>
        </Button>
      </View>
      <CountryList
        setCountry={setCountry}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
    </SafeAreaView>
  );
}
