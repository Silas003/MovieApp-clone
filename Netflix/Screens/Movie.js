import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Platform, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import {styles, theme} from '../themes/theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from 'twrnc'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/Cast'
import MovieList from '../components/movieList'
import Loading from '../components/Loading'
import { fallbackMoviePoster, fetchCredit, fetchDetail, fetchSimilarMovies, image500 } from '../api/moviedb'
const ios=Platform.OS=='ios'
var {width,height}=Dimensions.get('window')
const topMargin=ios?'' :'mt-3'

const Movie = () => {
    const navigation=useNavigation()
    const {params:item}=useRoute()
    const [fav,setFav]=useState(false)
    const[cast,setCast]=useState([])
    const [Load,setLoad]=useState(false)
    const[similarMovies,setSimilarMovies]=useState([])
    const [movie,setMovie]=useState([])
   
    useEffect(()=>{
        getMovieDetail(item.id)
        getMovieCredit(item.id)
        getsimilarMovie(item.id)
    },[] )
        const getMovieDetail=async(id)=>{
            const data=await fetchDetail(id)
            {data && setMovie(data)}
            
        }
        const getMovieCredit=async(id)=>{
            const data=await fetchCredit(id)
            if(data && data.cast)setCast(data.cast);
            
        }
        
        const getsimilarMovie=async(id)=>{
            const data=await fetchSimilarMovies(id)
            console.log(data)
            if( data && data.results) setSimilarMovies(data.results);
        }
        
        
  
    let movieName='Spider-Man into the spiderverse'
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:20,
        }}
        className='flex-1 bg-neutral-900'>
{/* movie poster  */}
            <View style={tw`w-full`}>
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
                    <TouchableOpacity onPress={()=>setFav(!fav)}>
                        <HeartIcon size={40} color={fav ? theme.background : 'white'}/>
                    </TouchableOpacity>
                </SafeAreaView>
            
                    <View>
                    <Image style={{width:width,
                        height:height*0.55}}
                        source={{uri:image500(movie.poster_path || fallbackMoviePoster)}}
                        //source={require('../assets/images/spiderman.jpg')} 

                        />
                        <LinearGradient
                        colors={['transparent','rgba(23,23,23,1)','rgba(23,23,23,1)' ]}
                        style={{width:width,height:height*0.44,bottom:0}}
                        start={{x:0.5,y:0}}
                        end={{x:0.5,y:2}}
                        className='absolute bottom-0'/>
                    </View>
                    
                     <View style={{marginTop:-(height*0.09)}} className='space-y-3'>
                     {/* movie ttile */}
                     <Text className='text-white text-center text-5xl font-bold tracking-wider'>
                         {item.title}
                     </Text>
                     {/* movie details */}

                     <Text className='text-neutral-400 font-semibold text-base text-center'>
                        {movie.status} .{item.release_date.split('-')[0]} . {movie.runtime}min
                     </Text>
                     <View className='flex-row justify-center mx-4 space-x-2'>
                 {movie?.genres?.map((genre,index)=>{
                        return(
                            <Text key={index} className='text-neutral-400 font-semibold text-base text-center'>
                            {genre.name} .
                        </Text>
                        )
                 })

                 }
                    
                    
                     </View>
                     <Text className='text-neutral-400 font-semibold text-base text-center'>
                        {item.overview}
                        </Text>
             </View>
            {/* cast */}
             <Cast navigation={navigation}cast={cast} />
             {/* similar movies */}
             <MovieList title={'Similar Movies'} data={similarMovies}/>
             </View>
             
              
            
            {/* movie detail */}
           
        </ScrollView>
      
    
  )
}

export default Movie