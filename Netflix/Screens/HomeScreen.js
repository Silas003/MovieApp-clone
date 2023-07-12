import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native'
import { Platform } from 'react-native'
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import {styles} from '../themes/theme'
import Trending from '../components/Trendingmovies'
import MovieList from '../components/movieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading'
import { fetchTrendingMovies,fetchUpcomingMovies,fetchTopRatedMovies } from '../api/moviedb'
const ios=Platform.OS=='ios '
const HomeScreen = () => {
    const [trending,setTrending]=useState([])
    const [upcoming,setUpcoming]=useState([])
    const [topRated,setTopRated]=useState([])
    const [Load,setLoad]=useState(true)
    
    const navigation=useNavigation()

    useEffect(()=>{
        getTrendingMovies();
        getUpcomingMovies();
        getTopRatedMovies();
    },[])

    const getTrendingMovies=async()=>{
        const data=await fetchTrendingMovies()
        // console.log('got data:',data)
        if( data && data.results) setTrending(data.results);
    setLoad(false)
        }   
        const getUpcomingMovies=async()=>{
            const data=await fetchUpcomingMovies()
            // console.log('got upcoming data:',data)
            if( data && data.results) setUpcoming(data.results);
        setLoad(false)
            }   
        
            const getTopRatedMovies=async()=>{
                const data=await fetchTopRatedMovies()
                // console.log('got toprated data:',data)
                if( data && data.results) setTopRated(data.results);
            setLoad(false)
                }   
                
        
    return (
    <View style={tw`flex-1 bg-neutral-800  `} >
        <SafeAreaView style={ios? tw`-mb-2`:'mb-3'}>
            <View style={tw`flex-row justify-between items-center mx-4`}>
                <Bars3BottomLeftIcon size='30' strokeWidth={2} color={'white'}/>
            
            <Text style={tw`text-white text-3xl font-bold`}>
                <Text className='text-red-700 font-bold text-3xl pt-80'
                style={{}}>N</Text>etflix
            </Text>
            <TouchableOpacity
            onPress={()=>navigation.push('Search')}>
                <MagnifyingGlassIcon size={30} strokeWidth={2} color={'white'}/>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
        {Load?(
            <Loading/>
        ):( 
            <ScrollView className='space-y-10 pt-4'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding:10}}>
        {/* trending movies     */}
       {trending.length>0 && <Trending data={trending}/>} 


        {/* upcoming movies */}
        {upcoming.length>0 && <MovieList title='Upcoming' data={upcoming}/>}
        
        
         {/* topRated movies */}
         {topRated.length>0 &&  <MovieList title='TopRated' data={topRated}/>}
         
        </ScrollView>
        )}
        
      
    </View>
  )
}

export default HomeScreen