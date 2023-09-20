import { View, Text } from 'react-native'
import React from 'react'
import AllGyms from './src/ui/Screens/GymScreens/Screens/AllGyms'
import GymDetails from './src/ui/Screens/GymScreens/Screens/GymDetails'
import BottomNav from './src/navigation/BottomNav'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
   
  )
}

export default App