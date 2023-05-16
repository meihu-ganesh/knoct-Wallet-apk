import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import NewBaseHomeHeader from '../../components/NewBaseHomeHeader';
import {StatusBar} from 'native-base';
import AddIdentiteModal from '../../components/AddIdentiteModal';
import EllipseBtn from './EllipseBtn';

export default function NewBaseHome({navigation}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={'#05BC61'} />
      <NewBaseHomeHeader navigation={navigation} setShowModal={setShowModal} />
      <View className="p-7">
        <View>
          <Text className="text-2xl text-black">Recent Identities</Text>
          <Text className="text-gray-400 text-[14px]">
            Find all the identities and data used
          </Text>
          <View className="bg-[#F8F8F8B0] w-full h-[110px]  shadow-sm rounded flex-row justify-center items-center mt-3">
            <Image
              source={require('../../../assets/finger.png')}
              resizeMode="contain"
            />
            <View className="ml-5">
              <Text className=" text-gray-500 text-[16px]">
                You have no identities
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text className="font-bold text-green-500 text-[16px]">
                  Explore Identities ➞
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="mt-5">
          <Text className="text-2xl text-black">Recent Verification</Text>
          <Text className="text-gray-400 text-[14px]">
            The details of verification
          </Text>
          <View className="bg-[#F8F8F8B0] w-full h-[110px]  shadow-sm rounded flex-row justify-center items-center mt-3">
            <Image
              source={require('../../../assets/finger.png')}
              resizeMode="contain"
            />
            <View className="ml-5">
              <Text className=" text-gray-500 text-[16px]">
                You have no Verification
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Verification')}>
                <Text className="font-bold text-green-500 text-[16px]">
                  Verify Credentials ➞
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View>
        <EllipseBtn navigation={navigation} />
      </View>
      <AddIdentiteModal setShowModal={setShowModal} showModal={showModal} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
