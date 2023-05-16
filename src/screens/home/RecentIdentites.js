/* eslint-disable prettier/prettier */
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {identitesData} from '../../constants/HomeData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IdentitesListItem from './IdentitesListItem';
import {filter} from '../../../assets/image';

export default function RecentIdentites({navigation}) {
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
          <Text className="text-2xl text-black">Recent Identites</Text>
          <Text className="text-sm text-gray-400">
            Find all the identities and data used
          </Text>
        </View>
        <FlatList
          data={identitesData}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <IdentitesListItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
