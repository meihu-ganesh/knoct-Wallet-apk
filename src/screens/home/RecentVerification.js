import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {verificationData} from '../../constants/HomeData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VerificationListItem from './VerificationListItem';
import {TouchableOpacity} from 'react-native';
import {filter} from '../../../assets/image';

export default function RecentVerification({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View className="p-7 flex justify-end gap-7">
        <View className="flex flex-row justify-between">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View className="flex flex-row justify-center items-center gap-4">
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Image source={filter} className="w-5 h-5" resizeMode="cover" />
            </TouchableOpacity>
            <AntDesign name="filter" size={24} color="black" />
          </View>
        </View>
        <View className="space-y-2">
          <Text className="text-2xl text-black">Recent Verification</Text>
          <Text className="text-sm text-gray-400">
            The details of verifications
          </Text>
        </View>
        <FlatList
          data={verificationData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <VerificationListItem item={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
