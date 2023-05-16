import {View, Text} from 'react-native';
import React from 'react';
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Button,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function EllipseBtn({navigation}) {
  const {isOpen, onToggle} = useDisclose();
  return (
    <View className="absolute bottom-2 right-1">
      <Box alignItems="center" minH="220">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 120,
          }}
          animate={{
            translateY: 100,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 150,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}>
          <View className="space-y-3">
            <Button
              bg={'primary.100'}
              size="lg"
              shadow={3}
              leftIcon={<FontAwesome name="send-o" size={18} color="white" />}
              // onPress={() => navigation.navigate('Identites')}
              style={{flexDirection: 'row', display: 'flex'}}>
              Transfer
            </Button>
            <Button
              bg={'primary.100'}
              size="lg"
              shadow={3}
              leftIcon={<Feather name="file-text" size={18} color="white" />}
              // onPress={() => navigation.navigate('Verification')}
            >
              Request
            </Button>
          </View>
        </Stagger>
      </Box>
      <HStack
        alignItems="center"
        justifyContent={'flex-end'}
        flexDirection="row">
        <IconButton
          shadow={3}
          variant="solid"
          borderRadius="full"
          size={16}
          onPress={onToggle}
          bg="primary.100"
          icon={
            isOpen ? (
              <Entypo name="cross" size={26} color="white" />
            ) : (
              <AntDesign name="appstore-o" size={26} color="white" />
            )
          }
        />
      </HStack>
    </View>
  );
}
