import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import Movie from './Movie'

const Stack=createStackNavigator()
const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}  />
        <Stack.Screen name='Movie' component={Movie} options={{headerShown:false}}  />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation