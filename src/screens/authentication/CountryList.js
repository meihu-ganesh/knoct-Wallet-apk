/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import {data} from '../../constants/CountryData';
import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Pressable,
  Spacer,
  VStack,
} from 'native-base';
export default function CountryList({setModalOpen, modalOpen, setCountry}) {
  const handleCountry = item => {
    setCountry(item);
    setModalOpen(false);
  };
  return (
    <Modal visible={modalOpen}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'gray.200',
              }}
              borderColor="coolGray.200"
              pl="5"
              pr="5"
              py="3">
              <TouchableOpacity onPress={() => handleCountry(item)}>
                <HStack
                  space={3}
                  justifyContent="space-between"
                  alignItems={'center'}>
                  <Avatar size="40px" source={item.img} />
                  <VStack>
                    <Text className="text-gray-800 font-bold">{item.name}</Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </TouchableOpacity>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </Modal>
  );
}
