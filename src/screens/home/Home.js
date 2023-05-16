/* eslint-disable prettier/prettier */
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {identitesData} from '../../constants/HomeData';
import {verificationData} from '../../constants/HomeData';
import Recent from './Recent';

import EllipseBtn from './EllipseBtn';
import AddIdentiteModal from '../../components/AddIdentiteModal';
import HomeTitleIcon from '../../components/HomeTitleIcon';
import {home} from '../../../assets/image';
export default function Home({navigation}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffffff'}}
      showsVerticalScrollIndicator={false}>
      <View className="flex-1  p-7 h-full bg-white">
        <View className="flex gap-5">
          <View>
            <HomeTitleIcon
              navigation={navigation}
              setShowModal={setShowModal}
              color={'#1F2935'}
            />
          </View>
          {/*================== Home Picture==================  */}

          <Image source={home} resizeMode={'contain'} className="w-full" />
        </View>

        <View className="flex justify-center  gap-3 mt-[3%]">
          {/*================== Identites==================  */}
          <View>
            <Text className="text-2xl text-black">Recent Identites</Text>
            <View className="flex-row justify-between">
              <Text className="text-gray-600 text-[14px]">
                Find all the identities and data used
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Identites')}>
                <Text className="text-green-500 text-[12px]">View</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row gap-2 justify-around items-center  mt-3">
              {identitesData.slice(0, 3).map(item => (
                <Recent key={item.id} data={item} />
              ))}
            </View>
          </View>

          {/*================== Verification==================  */}
          <Pressable onPress={() => navigation.navigate('Verification')}>
            <Text className="text-2xl text-black ">Recent Verifications</Text>
            <View className="flex-row justify-between ">
              <Text className="text-gray-600 text-[14px]">
                The details of verifications
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Verification')}>
                <Text className="text-green-500 text-[12px]">View</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row gap-2 justify-around items-center mt-3">
              {verificationData.slice(0, 3).map(item => (
                <Recent key={item.id} data={item} />
              ))}
            </View>
          </Pressable>
        </View>
      </View>
      <View>
        <EllipseBtn navigation={navigation} />
      </View>
      <AddIdentiteModal setShowModal={setShowModal} showModal={showModal} />
    </ScrollView>
  );
}
