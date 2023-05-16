import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SimpleLineIcons} from '../../../assets/icons';
export default function MoreInfoChild({item}) {
  const {detailsShared, record, idProof, roleOfThePerson, service, sharedTo} =
    item.allDetails;

  return (
    <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
      <View className=" mb-5 space-y-3">
        <View className="bg-[#F8FBF9] p-3">
          <View className="flex-row justify-between">
            <Text className="text-green-500 font-bold mb-2 ">
              Details Shared:
            </Text>
            <View className="flex-row gap-2">
              <MaterialCommunityIcons
                name="file-document-edit-outline"
                size={17}
                color="gray"
              />
              <AntDesign name="delete" size={17} color="gray" />
              <Ionicons name="checkmark-circle" size={17} color="#05BC61" />
            </View>
          </View>

          <Text className="text-gray-500 text-xs">
            Name:
            <Text className="font-bold text-gray-500">
              {detailsShared.name}
            </Text>
          </Text>
          <Text className="text-gray-500 text-xs">
            Birth Date:
            <Text className="font-bold text-gray-500">
              {detailsShared.BirthDate}
            </Text>
          </Text>
          <Text className="text-gray-500 text-xs">
            Country:
            <Text className="font-bold text-gray-500">
              {detailsShared.Country}
            </Text>
          </Text>
        </View>

        <View className={` bg-[#F8FBF9] p-3 space-y-2`}>
          <View className="flex-row justify-between">
            <Text className="text-[#05BC61] font-bold mb-2">
              Communication Record
            </Text>
            <Ionicons name="checkmark-circle" size={17} color="#05BC61" />
          </View>
          <View className="flex-row justify-between ">
            <Text className="text-gray-500 text-xs">{record.one}</Text>
            <AntDesign name="delete" size={17} color="gray" />
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500 text-xs">{record.second}</Text>
            <AntDesign name="delete" size={17} color="gray" />
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500 text-xs">{record.third}</Text>
            <AntDesign name="delete" size={17} color="gray" />
          </View>
        </View>

        <View className={` bg-[#F8FBF9] p-3 space-y-2`}>
          <View className="flex-row justify-between">
            <Text className="text-[#05BC61] font-bold mb-2">
              ID Proof Shared
            </Text>
            <AntDesign name="questioncircle" size={17} color="#FFB540" />
          </View>
          <View className="flex-row justify-between ">
            <Text className="text-gray-500 text-xs">
              Aadhar Card: {idProof.adharCard}
            </Text>
            <View className="flex-row gap-2">
              <Ionicons name="checkmark-circle" size={17} color="#05BC61" />
              <AntDesign name="delete" size={17} color="gray" />
            </View>
          </View>
          <View className="flex-row justify-between ">
            <Text className="text-gray-500 text-xs">
              PAN Card: {idProof.panCard}
            </Text>
            <View className="flex-row gap-2">
              <AntDesign name="questioncircle" size={17} color="#FFB540" />
              <AntDesign name="delete" size={17} color="gray" />
            </View>
          </View>
        </View>
        <View className={` bg-[#F8FBF9] p-3 space-y-1`}>
          <View className="flex-row justify-between">
            <Text className="text-[#05BC61] font-bold mb-2">Shared To</Text>
            <Ionicons name="checkmark-circle" size={17} color="#05BC61" />
          </View>
          <View className="flex-row justify-start items-center gap-5 ">
            <Text className="text-gray-500 text-xs">{sharedTo.first}</Text>
            <View className="flex-row gap-1">
              <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
              <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
              <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
              <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
              <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
            </View>
          </View>
          <View className="flex-row justify-start items-center gap-5 ">
            <Text className="text-gray-500 text-xs">{sharedTo.second}</Text>
            <View className="flex-row gap-1">
              <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
              <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
              <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
            </View>
          </View>
        </View>

        <View className={` bg-[#F8FBF9] p-3 space-y-2`}>
          <View className="flex-row justify-between">
            <Text className="text-[#05BC61] font-bold mb-2">
              Role of the person
            </Text>
            <Ionicons name="checkmark-circle" size={17} color="#05BC61" />
          </View>
          <View className="flex-row justify-between ">
            <Text className="text-gray-500 text-xs">
              {roleOfThePerson.first}
            </Text>
            <AntDesign name="delete" size={17} color="gray" />
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500 text-xs">
              {roleOfThePerson.second}
            </Text>

            <AntDesign name="questioncircle" size={17} color="#FFB540" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    marginBottom: 20,
  },
});
