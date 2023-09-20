import { Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllGyms from '../ui/Screens/GymScreens/Screens/AllGyms';
import { AppImages } from '../utils/AppImages';
import StackNav from './StackNav';
import { AppColors } from '../utils/AppColors';

const BottomNav = () => {

    const Tab = createBottomTabNavigator();
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
        <Tab.Navigator
         screenOptions={{
            tabBarStyle: [
                {
                  display: "flex",
                  backgroundColor:'#252232',
                  height:60,
                  borderTopRightRadius:20,
                  borderTopLeftRadius:20,

                },
                null
              ],
             tabBarActiveTintColor: '#86DBDB', tabBarInactiveTintColor: '#9795A3', headerShown: false
        }} >
            <Tab.Screen name="Home" component={StackNav} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Image
                        source={focused ? AppImages.home : AppImages.home} // Use the appropriate icon for focused and non-focused states
                        style={{ width: size, height: size, tintColor: color }}
                    />
                ),
            }} />
            <Tab.Screen name="Workouts" component={Workouts} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Image
                        source={focused ? AppImages.workout : AppImages.workout} // Use the appropriate icon for focused and non-focused states
                        style={{ width: size, height: size, tintColor: color }}
                    />
                ),
            }} />
            <Tab.Screen name="Excercises" component={Excercises} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Image
                        source={focused ? AppImages.exercises : AppImages.exercises} // Use the appropriate icon for focused and non-focused states
                        style={{ width: size, height: size, tintColor: color }}
                    />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Image
                        source={focused ? AppImages.profile : AppImages.profile} // Use the appropriate icon for focused and non-focused states
                        style={{ width: size, height: size, tintColor: color }}
                    />
                ),
            }} />
        </Tab.Navigator>
    )
}

const Workouts = () => {
    return (
        <Text>WORKOUT</Text>
    )
}

const Profile = () => {
    return (
        <Text>Profile</Text>
    )
}

const Excercises = () => {
    return (
        <Text>excercises</Text>
    )
}

export default BottomNav