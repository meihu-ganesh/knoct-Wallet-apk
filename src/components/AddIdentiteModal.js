/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, Modal, Input, Icon} from 'native-base';
import {Text, TouchableOpacity, View} from 'react-native';
import {addIdentiteData} from '../constants/HomeData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

export default function AddIdentiteModal({showModal, setShowModal}) {
  const [open, setOpen] = useState(0);
  const navigation = useNavigation();
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" className="bg-white">
          <Modal.Body className="space-y-4">
            <View className="flex flex-row justify-between items-center">
              <Input
                placeholder="Search"
                variant="outline"
                bg={'#F8F9FB'}
                color={'black'}
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
              <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
                <AntDesign name="qrcode" size={24} color="#44566C" />
              </TouchableOpacity>
            </View>

            <View className="space-y-2">
              {addIdentiteData.map((social, index) => (
                <TouchableOpacity
                  onPress={() => setOpen(index)}
                  key={social.id}>
                  <View className="flex-row gap-2 py-2 border-b-2 border-gray-200 items-center justify-between">
                    <View className="flex-row justify-start gap-2">
                      <Image
                        source={social.icon}
                        resizeMode="contain"
                        className="w-8 h-8"
                      />
                      <Text className="uppercase text-[#44566C] text-lg font-bold">
                        {social.name}
                      </Text>
                    </View>

                    <View className={index === open ? 'block' : 'hidden'}>
                      <Ionicons
                        name="checkmark-circle"
                        size={20}
                        color="#05BC61"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View className="flex justify-center items-center gap-2 flex-row">
              <Button
                bg={'primary.100'}
                size={'lg'}
                w={'50%'}
                onPress={() => {
                  setShowModal(false);
                }}>
                ADD ID
              </Button>
              <Button
                bg={'primary.100'}
                size={'lg'}
                w={'50%'}
                onPress={() => {
                  setShowModal(false);
                }}>
                Cancel
              </Button>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
