import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Input} from 'native-base';
import {FontAwesome, Ionicons, AntDesign} from '../../../assets/icons';
import {connection} from '../../../assets/image';

export default function PeopleWallet({navigation}) {
  return (
    <SafeAreaView className="bg-white flex-1 p-7">
      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.navigate('MenuWalletPage')}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Input
          placeholder="Search"
          variant="outline"
          className="text-black bg-[#F8F9FB]"
          width={'200px'}
          borderRadius="10"
          py="1"
          px="2"
          borderWidth="0"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
        <FontAwesome name="plus-square-o" size={25} color={'#1F2935'} />
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications-outline" size={25} color={'#1F2935'} />
        </TouchableOpacity>
      </View>
      <View className=" flex-row justify-center gap-5 items-center mt-5">
        <TouchableOpacity
          onPress={() => navigation.navigate('MenuWalletPage')}
          className={`bg-[#E6F8EF] px-8 py-2 rounded shadow`}>
          <Text className={`text-black text-sm`}> Credentials </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#05BC61] px-8 py-2 rounded shadow">
          <Text className=" text-white text-sm">Connection</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 justify-center items-center mt-[5%]">
        <Image
          source={connection}
          resizeMode="contain"
          className="w-[70%] h-[250px]"
        />
        <Text className="text-center text-sm text-gray-400 mt-[3%]">
          Others can request from you throuth a proof request. You control what
          and with whom you share your information.
        </Text>
      </View>
    </SafeAreaView>
  );
}
