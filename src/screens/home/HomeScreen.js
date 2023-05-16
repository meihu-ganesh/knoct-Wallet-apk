/* eslint-disable prettier/prettier */
import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconComponentProvider, Icon } from '@react-native-material/core';
import Scan from './Scan';
// import {  } from '@react-native-material/core/lib/typescript/base/IconComponentContext';
import {Animated, Dimensions, View} from 'react-native';
import WalletNavigationPage from '../../navigations/WalletNavigationPage';
import HomePageNavigation from '../../navigations/HomePageNavigation';
import DIDNavigationPage from '../../navigations/DIDNavigationPage';
const Tab = createBottomTabNavigator();
export default function HomeScreen() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 55,
            borderTopWidth: 3,
          },
          tabBarInactiveTintColor: '#C4C4C4',
          tabBarActiveTintColor: '#05BC61',
        }}>
        {/* ////==================================================================== */}
        <Tab.Screen
          name={'HomePageNavigation'}
          component={HomePageNavigation}
          options={{
            tabBarIcon: ({color, size}) => (
              <View>
                <Octicons name="home" size={size} color={color} />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        <Tab.Screen
          name="Scan"
          component={Scan}
          options={{
            tabBarIcon: ({color, size}) => (
              <View>
                <MaterialCommunityIcons
                  name="line-scan"
                  size={size}
                  color={color}
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="DIDNavigationPage"
          component={DIDNavigationPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <View>
                <Ionicons name="person-outline" size={size} color={color} />
              </View>
            ),
          }}
          // options={{
          //   tabBarIcon: ({color, size})=> {
          //     tabBarIcon: ()=> {
          //       <View>
          //         <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          //           <Icon 
          //             name='person_pin'
          //             size={20}
          //             color='#aaa'
          //           />
          //         </IconComponentProvider>
          //       </View>
          //     }
          //     <View>
          //       <MaterialCommunityIcons
          //         name="line-scan"
          //         size={size}
          //         color={color}
          //       />
          //     </View>
          //   }
          // }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        >
        </Tab.Screen>
        <Tab.Screen
          name="WalletNavigationPage"
          component={WalletNavigationPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <View>
                <Ionicons name="wallet" size={size} color={color} />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth(),
          height: 3,
          backgroundColor: '#05BC61',
          position: 'absolute',
          bottom: 52,
          // Horizontal Padding = 20...
          left: 0,
          borderRadius: 20,
          transform: [{translateX: tabOffsetValue}],
        }}></Animated.View>
    </>
  );
}
function getWidth() {
  let width = Dimensions.get('window').width;
  return width / 4;
}
