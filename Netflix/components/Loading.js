import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { ActivityIndicator } from 'react-native'

const {width,height}=Dimensions.get('window')
const Loading = () => {
  return (
    <View style={{width:width,height:height}} className='flex-row justify-center items-center'>
     <ActivityIndicator size={'large'} color={'#eab308'}/>
    </View>
  )
}

export default Loading