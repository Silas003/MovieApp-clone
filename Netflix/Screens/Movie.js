import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Platform, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import {styles, theme} from '../themes/theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from 'twrnc'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const ios=Platform.OS=='ios'
var {width,height}=Dimensions.get('window')
const topMargin=ios?'' :'mt-3'

const Movie = () => {
    const navigation=useNavigation()
    const {params:item}=useRoute()
    const [fav,setFav]=useState(false)
    
    useEffect(()=>{

    },[item] )

  
    let movieName='Spider-Man into the multiverse'
    return (
        <ScrollView
        contentContainerStyle={{paddingBottom:20,
        flex:1}}
        style={tw`bg-neutral-900`}>
{/* movie poster  */}
            <View style={tw`w-full`}>
                <SafeAreaView style={tw` flex-row absolute z-20 w-full justify-between items-center px-4 mt-7` }>
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
                    source={require('../assets/images/spiderman.jpg')} />
                <LinearGradient
                colors={['transparent','rgba(23,23,23,1)','rgba(23,23,23,1)' ]}
                style={{width:width,height:height*0.44,bottom:0}}
                start={{x:0.5,y:0}}
                end={{x:0.5,y:1}}/>
                
                
                </View>
            </View>
            {/* movie detail */}
            <View style={{marginTop:-(height*0.47)}}>
                    {/* movie ttile */}
                    <Text style={tw`text-white text-center text-3xl font-bold tracking-wider`}>
                        {movieName}
                    </Text>
                    {/* movie details */}
                    <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                       Released .2020 . 170min
                    </Text>
                    <View style={tw`flex-row justify-center mx-4 space-x-2`}>
                        <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                            Action .
                        </Text>
                        <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                            thriller .
                        </Text>
                        <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                            comedy .
                        </Text>
                        <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                            sci-fi .
                        </Text>
                    </View>
            </View>
        </ScrollView>
      
    
  )
}

export default Movie