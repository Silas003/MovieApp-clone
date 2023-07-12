import { View, Text, Pressable, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { TextInput } from 'react-native'
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import {XMarkIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import LottieView from 'lottie-react-native';
import Loading from '../components/Loading'
import {debounce} from 'lodash'
import { fetchSearch, image185 } from '../api/moviedb'

var {width,height}=Dimensions.get('window')
const Search = () => {
  const navigation=useNavigation()
  const [results,setResults]=useState([])
  const [Load,setLoad]=useState(false)
  let movieName='Spider-Man into the spiderverse'
  const handleSearch=value=>{
       //console.log(value)
       if(value && value.length>2){
        setLoad(true)
        fetchSearch(
          {query: value, 
          include_adult: 'false', 
          language: 'en-US',
           page: '1'}
        ).then(data=>{
          setLoad(false)
          console.log(data)
          
          if (data && data.results)setResults(data.results)
        })
        
       }else{
        setLoad(false)
        setResults([])
       }
  }
  const handleDebounce=useCallback(debounce(handleSearch,500))
  return (
    <SafeAreaView className='flex-1 bg-neutral-800'>
        <View 
        className='mx-4 mt-3 p-0 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full'>
        <TextInput
        onChangeText={handleDebounce}
        placeholder='Search Movie '
        placeholderTextColor={'lightgray'}
        className='pb-1 pl-6 text-base font-semibold text-white tracking-wider'
        />
        <TouchableOpacity
        onPress={()=>{navigation.goBack()}}
        className='rounded-full p-3 m-1 bg-neutral-500'>
          <XMarkIcon size={25} color={'white'}/>
        </TouchableOpacity>
        </View> 
        {/* results */}
        {Load?(
          <Loading/>
        ): results.length>0?(
          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal:15}}
          className='space-y-3'>
            <Text
            className='text-white font-semibold ml-1'>
              Results({results.length})
            </Text>
            <View className='flex-row justify-between flex-wrap'>
              {
                results.map((item,index)=>{
                  return(
                    <Pressable 
                    key={index}
                    onPress={()=>{navigation.push('Movie',item)}}
                    >
                      <View className='  space-y-2 mb-4'>
                      <Image 
                      className='rounded-3xl '
                      style={{width:width*0.44,height:height*0.33}}
                      source={{uri:image185(item.poster_path)}}/>
                      <Text className='text-neutral-300 ml-1'>
                          {item.title}
                      </Text>
                      </View> 
                    </Pressable>
                  )
                })
              }
            </View>
          </ScrollView>

     ):(
       <View className=' justify-center'>
       <Image source={require('../assets/images/movieTime.png')}
       style={{width:width,height:height*0.6}}
       />
         <View className>
          {/* <Text className='text-neutral-500 font-bold text-center text-2xl'>Search Not found....</Text> */}
         </View>
       </View>
       

     )}
       
      
    </SafeAreaView>
  )
}

export default Search