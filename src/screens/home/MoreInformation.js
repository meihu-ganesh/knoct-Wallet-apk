import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  LayoutAnimation,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {toggleAnimation} from '../../animations/toggleAnimations';
import {verificationData} from '../../constants/HomeData';
import {SafeAreaView} from 'react-native-safe-area-context';
import MoreInfoChild from './MoreInfoChild';
import {filter} from '../../../assets/image';
import {SimpleLineIcons} from '../../../assets/icons';

const MoreInformation = ({route, navigation}) => {
  const id = route.params.itemId;
  const item = verificationData.find(pd => pd.id === id);

  const [showContent, setShowContent] = useState(true);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setShowContent(!showContent);
  };

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <SafeAreaView className="flex-1 bg-white p-7">
      <View className="flex flex-row justify-between mb-4">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View className="flex flex-row justify-center items-center gap-4">
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Image source={filter} className="w-5 h-5" resizeMode="cover" />
          </TouchableOpacity>
          <AntDesign name="filter" size={24} color="black" />
        </View>
      </View>
      <View style={styles.container} className=" flex-row py-3 gap-1">
        <Image source={item.icon} resizeMode="contain" className="w-6 h-6" />
        <View style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={() => toggleListItem()}>
            <View className="flex ">
              <View className="flex gap-1 ">
                <View className=" flex-row justify-between items-center">
                  <Text style={styles.title}>
                    {item?.name}:
                    <Text className="text-[#2d2d2d] font-bold">
                      {item?.title}
                    </Text>
                  </Text>
                  <View className="flex flex-row gap-3 items-center justify-start">
                    <MaterialIcons
                      name="circle"
                      size={10}
                      color={item?.verified ? '#05BC61' : '#EB5757'}
                    />
                    <Animated.View
                      style={{transform: [{rotateZ: arrowTransform}]}}>
                      <MaterialIcons
                        name="keyboard-arrow-down"
                        size={23}
                        color="black"
                      />
                    </Animated.View>
                  </View>
                </View>

                {!item?.verified ? (
                  <Text className="text-xs text-[#EB5757]">Not verified</Text>
                ) : (
                  <Text className="text-xs text-gray-400">{item.date}</Text>
                )}
                <View className="flex-row gap-1">
                  <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
                  <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
                  <SimpleLineIcons name="lock" color={'#4F4F4F'} size={10} />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      {showContent && <MoreInfoChild item={item} />}
    </SafeAreaView>
  );
};
export default MoreInformation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: '2%',
    overflow: 'hidden',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 16,
    color: '#2d2d2d',
  },
  body: {
    marginTop: 5,
  },
});
