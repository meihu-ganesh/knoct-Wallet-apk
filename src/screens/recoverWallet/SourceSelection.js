/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'native-base';
import {AntDesign} from '../../../assets/icons';
export default function SourceSelection({navigation}) {
  return (
    <SafeAreaView className="flex-1 p-7 bg-white justify-between">
      <View style={{flex: 1}}>
        <View className="flex gap-4">
          <TouchableOpacity onPress={() => navigation.navigate('OnBoards')}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl text-black">Source Selection</Text>
          <Text className="text-sm text-gray-500">
            Knoct uses backup to store your credentials. Using on device storage
            lets you access credentials whenever required while Cloud backup
            lets you store credentials more securely.
          </Text>
        </View>
        <View className="flex justify-center items-center">
          <Image
            source={require('../../../assets/recover.png')}
            resizeMode="contain"
            style={{width: '70%', height: undefined, aspectRatio: 1}}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => navigation.navigate('CloudRecovery')}
          className="py-5 w-[100%] bg-[#05BC61]">
          <Text className="text-lg text-white">Continue</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
