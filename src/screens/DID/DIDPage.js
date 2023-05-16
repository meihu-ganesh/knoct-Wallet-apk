import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeTitleIcon from '../../components/HomeTitleIcon';
import { Ionicons } from '../../../assets/icons';

export default function DIDPage({navigation}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View className="p-7 flex justify-end gap-7">
        <View className="flex flex-row justify-between items-center">
          {/* <HomeTitleIcon /> */}
          <View style={{flex:1, justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu" size={25} color={color} />
            </TouchableOpacity>
            <View className="flex flex-row justify-center items-center gap-4">
              <TouchableOpacity onPress={() => setShowModal(true)}>
                <FontAwesome name="plus-square-o" size={25} color={color} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                <Ionicons name="notifications-outline" size={25} color={color} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
