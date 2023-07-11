import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Carousel from 'react-native-snap-carousel-fg/src/carousel/Carousel'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'



var {width,height}=Dimensions.get('window')

const Trending = ({data}) => {
  const navigation=useNavigation()
const handleClick=({item})=>{
  navigation.navigate('Movie',item)
  
}
  return (
    <View style={tw`mb-8`}>
      <Text style={tw`text-white text-xl mx-4 mb-3 font-bold`}>Trending</Text>
      <Carousel 
      data={data} 
      renderItem={({item})=><Moviecard item={item} handleClick={(item)=>handleClick(item)}/>}
      firstItem={1}
      inactiveSlideOpacity={0.60}
      sliderWidth={width}
      itemWidth={width*0.62 }
      
      slideStyle={{display:'flex',alignItems:'center'}}/>
      
    </View>
  )
}
const Moviecard=({item,handleClick})=>{
  return(
    <TouchableWithoutFeedback
    onPress={(item)=>handleClick(item)} >
      <Image source={require('../assets/images/spiderman.jpg')}
      style={{width:width*0.62,
              height:height*0.4,
              borderRadius:16,
            }}
            
      />
    </TouchableWithoutFeedback>
  )
}

export default Trending