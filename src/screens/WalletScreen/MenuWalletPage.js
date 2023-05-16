import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WalletListItem from './WalletListItem';
import {walletData} from '../../constants/WalletData';
import {Icon, Input} from 'native-base';
import AddIdentiteModal from '../../components/AddIdentiteModal';
import {FontAwesome, Ionicons} from '../../../assets/icons';
export default function MenuWalletPage({navigation}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View className="p-7 flex justify-end gap-7">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Ionicons name="menu" size={25} color={'#1F2935'} />
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
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <FontAwesome name="plus-square-o" size={25} color={'#1F2935'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Ionicons
              name="notifications-outline"
              size={25}
              color={'#1F2935'}
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center gap-5 items-center mt-5">
          <TouchableOpacity className="bg-[#05BC61] px-8 py-2 rounded shadow">
            <Text className=" text-white text-sm"> Credentials</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PeopleWallet')}
            className={`bg-[#E6F8EF] px-8 py-2 rounded shadow`}>
            <Text className={`text-black text-sm`}> Connection </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={walletData}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <WalletListItem item={item} />}
        />
      </View>
      <AddIdentiteModal setShowModal={setShowModal} showModal={showModal} />
    </SafeAreaView>
  );
}
