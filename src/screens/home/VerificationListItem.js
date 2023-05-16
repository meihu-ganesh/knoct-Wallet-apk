import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  LayoutAnimation,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {toggleAnimation} from '../../animations/toggleAnimations';
import {Button} from 'native-base';
import {SimpleLineIcons} from '../../../assets/icons';

const VerificationListItem = ({item, navigation}) => {
  const [showContent, setShowContent] = useState(false);
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
    <View>
      <View style={styles.container} className=" flex-row py-3 gap-1">
        <Image source={item.icon} resizeMode="contain" className="w-6 h-6" />
        <View style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={() => toggleListItem()}>
            <View className="flex ">
              <View className="flex gap-1 ">
                <View className=" flex-row justify-between items-center">
                  <Text style={styles.title}>
                    {item?.name}:
                    <Text style={[styles.title, {fontWeight: 'bold'}]}>
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

          {showContent && (
            <View style={styles.body}>
              <View className="bg-[#F8FBF9] p-3 mb-5 space-y-3">
                <View>
                  <Text className="text-green-500 font-bold">
                    Details Verified:
                  </Text>
                  <Text className="text-gray-500">
                    {item?.body?.detailsVerified}
                  </Text>
                </View>

                <View className={`${item.verified && 'hidden'}`}>
                  <Text className="text-[#EB5757] font-bold">
                    Details Unverified:
                  </Text>
                  <Text className="text-gray-500">
                    {item.body.detailsUnverified}
                  </Text>
                </View>

                <View>
                  <Text className="text-green-500 font-bold">Shared To:</Text>
                  <Text className="text-gray-500">{item?.body?.shared}</Text>
                </View>
                <View>
                  <Text className="text-green-500 font-bold">
                    Last Verified:
                  </Text>
                  <Text className="text-gray-500">
                    {item?.body?.lastVerified}
                    <Text className="font-bold text-gray-500">
                      {item?.body?.app} App
                    </Text>
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-between items-center">
                <Button
                  bg={'primary.100'}
                  size="lg"
                  w={'48%'}
                  shadow={3}
                  onPress={() =>
                    navigation.navigate('MoreInformation', {
                      itemId: item.id,
                    })
                  }>
                  View More
                </Button>
                <Button
                  bg={'primary.100'}
                  size="lg"
                  w={'48%'}
                  shadow={3}
                  onPress={() => console.log('Verify Now')}>
                  Verify Now
                </Button>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default VerificationListItem;

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
