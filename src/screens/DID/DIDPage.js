import {Button, View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeTitleIcon from '../../components/HomeTitleIcon';
import { FontAwesome ,Ionicons } from '../../../assets/icons';
import DIDContainer from './DIDContainer';
import ImportAndAddDID from './ImportAndAddDID';
import { TouchableHighlight } from 'react-native';

const DIDPage = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View className="p-7 flex justify-end gap-7">
        <View className="flex flex-row justify-between items-center">
          {/* <HomeTitleIcon /> */}
          <View style={{flex:1, flexDirection: "row" ,justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu" size={25} color="#222" />
            </TouchableOpacity>
            <View className="flex flex-row justify-center items-center gap-4">
              <TouchableHighlight onPress={()=> setShowModal(true)}>
                <FontAwesome name="plus-square-o" size={25} color="#222" />
              </TouchableHighlight>
              <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                <Ionicons name="notifications-outline" size={25} color="#222" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
          <View>
            <DIDContainer show={showModal} />
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal:{
    flex: 1,
    backgroundColor: 'rgbs(50,50,50,0.5)',
  },
})

export default DIDPage;
