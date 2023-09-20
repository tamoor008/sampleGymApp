import { View, Text } from 'react-native'
import React from 'react'
import {TransitionPresets,createStackNavigator  } from '@react-navigation/stack';
import AllGyms from '../ui/Screens/GymScreens/Screens/AllGyms';
import GymDetails from '../ui/Screens/GymScreens/Screens/GymDetails';

const StackNav = () => {
    const Stack = createStackNavigator();
    const config = {
        animation: {timing:10000},
        config: {
          stiffness: 3000,
          damping: 1000,
          mass: 3,
          overshootClamping: false,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      };
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="AllGyms" >
        <Stack.Screen name="AllGyms" component={AllGyms} options={{ ...TransitionPresets.SlideFromRightIOS,transitionSpec:{open: config, close: config,}}} />
        <Stack.Screen name="GymDetails" component={GymDetails} options={{ ...TransitionPresets.SlideFromRightIOS,transitionSpec:{open: config, close: config,}}} />
      </Stack.Navigator>
  )
}

export default StackNav