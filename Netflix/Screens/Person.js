import { View,Image, Text ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { Platform } from 'react-native'
import { ScrollView } from 'react-native'
import {ChevronLeftIcon,HeartIcon}from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native'
import {styles,theme} from '../themes/theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import MovieList from '../components/movieList'
import Loading from '../components/Loading'
import { fetchPerson, fetchPersonMovies, image500 } from '../api/moviedb'
const {width,height}=Dimensions.get('window')
const ios=Platform.OS=='ios'

const Person = () => {
  const [Load,setLoad]=useState(!true)
  const{params:item}=useRoute()
  const[fav,setFav]=useState(true)
  const navigation=useNavigation()
  const[pers,setPers]=useState({})
  const[personMovies,setPersonMovies]=useState([])
  useEffect(()=>{
      getPerson(item.id)
      getPersonMovies(item.id)
      //console.log('person',item)
  },[item])
    const getPerson=async(id)=>{
      const data=await fetchPerson(item.id)
      if(data)setPers(data)
      //console.log(data)
    }
    const getPersonMovies=async(id)=>{
      const data=await fetchPersonMovies(item.id)
      if(data && data.cast)setPersonMovies(data.cast)
      //console.log(data)
    }
  return (
    <ScrollView className='flex-1 bg-neutral-900' contentContainerStyle={{padding:20}}>
      <SafeAreaView className='flex-row absolute z-20 w-full justify-between items-center px-4 mt-7'>
      <TouchableOpacity style={{
                        backgroundColor:'#eab308',
                        width:40,
                        height:33,
                        padding:1,
                        borderRadius:6,
                        marginLeft:5,
                    }}
                    onPress={()=>navigation.goBack()}>
                       
                        <ChevronLeftIcon size={30} strokeWidth={2.5} color={'white'}/> 
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=>setFav(!fav)} className='mr-0'>
                        <HeartIcon size={40} color={fav ? theme.background : 'white'}/>
                    </TouchableOpacity>
      </SafeAreaView>
      {/* person details */}
            {Load?(
              <Loading/>
            ):(
              <View>
              <View className='flex-row justify-center'
                   style={{
                      shadowColor:'gray',
                     shadowRadius:40,
                      shadowOffset:{width:0,height:5}
                    }}>
                <View className='items-center rounded-full overflow-hidden h-72 border-2 border-neutral-500 mt-12'>
                <Image
                
                source={{uri:image500(item.profile_path)}}
                style={{width:width*0.74,
                height:height*0.44}}/>
                </View>
               
            </View>
            
            <View  className='mt-6'>
              <Text className='text-3xl font-bold text-white text-center'>
                {pers.name}
              </Text>
              <Text className='text-base text-neutral-500 text-center'>
                {pers.place_of_birth}
              </Text>
            </View>
            <View className='mx-3 p-4 flex-row justify-between items-center bg-neutral-700 rounded-full'>
              <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                <Text className='text-white font-semibold'>Gender</Text>
                <Text className='text-neutral-400 text-sm'>{pers.gender==1 ? 'Female' :'Male'}</Text>
              </View>
              <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                <Text className='text-white font-semibold'>Birthday</Text>
                <Text className='text-neutral-400 text-sm'>{pers.birthday}</Text>
              </View>
              <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                <Text className='text-white font-semibold'>Known For</Text>
                <Text className='text-neutral-400 text-sm'>{pers.known_for_department}</Text>
              </View>
              <View className=' px-2 items-center'>
                <Text className='text-white font-semibold'>Popularity</Text>
                <Text className='text-neutral-400 text-sm'>{pers.popularity}</Text>
              </View>
            </View>
            <View className='my-6 mx-4 space-y-2'>
              <Text className='text-white text-lg'>Biography</Text>
              <Text className='text-neutral-400 tracking-wide'>
                  {pers.biography}
              </Text>
            </View>
          <MovieList  title={'Movies'}hideSeeAll={true} data={personMovies}/>
            </View>
            )}
    
    </ScrollView>
  )
}

export default Person