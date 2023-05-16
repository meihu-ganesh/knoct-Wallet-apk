/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesome, Ionicons} from '../../assets/icons';

export default function HomeTitleIcon({navigation, setShowModal, color}) {
  return (
    <View className="flex flex-row justify-between">
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
  );
}

const styles = StyleSheet.create({});
