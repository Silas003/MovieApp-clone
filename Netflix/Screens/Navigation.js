import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import Movie from './Movie'
import Person from './Person'
import Search from './Search'
import Loading from '../components/Loading'
const Stack=createStackNavigator()
const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}  />
        <Stack.Screen name='Movie' component={Movie} options={{headerShown:false}}  />
        <Stack.Screen name='Person' component={Person} options={{headerShown:false}}  />
        <Stack.Screen name='Search' component={Search} options={{headerShown:false}}  />
        <Stack.Screen name='Loading' component={Loading} options={{headerShown:false}}  />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation