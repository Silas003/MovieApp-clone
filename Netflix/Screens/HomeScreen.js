import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native'
import { Platform } from 'react-native'
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import {styles} from '../themes/theme'
import Trending from '../components/Trendingmovies'
import MovieList from '../components/movieList'

const ios=Platform.OS=='ios '
const HomeScreen = () => {
    const [trending,setTrending]=useState([1,2,3])
    const [upcoming,setUpcoming]=useState([1,2,3])
    const [topRated,setTopRated]=useState([1,2,3])
    return (
    <View style={tw`flex-1 bg-neutral-800  `} >
        <SafeAreaView style={ios? tw`-mb-2`:'mb-3'}>
            <View style={tw`flex-row justify-between items-center mx-4`}>
                <Bars3BottomLeftIcon size='30' strokeWidth={2} color={'white'}/>
            
            <Text style={tw`text-white text-3xl font-bold`}>
                <Text style={styles.text}>N</Text>etflix
            </Text>
            <TouchableOpacity>
                <MagnifyingGlassIcon size={30} strokeWidth={2} color={'white'}/>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding:10}}>
        {/* trending movies     */}
        <Trending data={trending}/>
        {/* upcoming movies */}
        <MovieList title='Upcoming' data={upcoming}/>
        
         {/* topRated movies */}
         <MovieList title='TopRated' data={topRated}/>
        </ScrollView>
      
    </View>
  )
}

export default HomeScreen