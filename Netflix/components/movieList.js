import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback,Image, Pressable, Dimensions} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {styles} from '../themes/theme'
import { useNavigation } from '@react-navigation/native'
import { fallbackMoviePoster, image185 } from '../api/moviedb'
import { FlatList } from 'react-native'
const MovieList = ({title,data,hideSeeAll}) => {
    let movieName='Spider-Man into the multiverse'
    const navigation=useNavigation()
    var{width,height}=Dimensions.get('window')
  return (
    <View className='mb-8 space-y-4'>
      <View style={tw`mx-4 flex-row justify-between items-center`}>
        <Text style={tw`text-white text-xl font-bold`}>{title}</Text>
        {
            !hideSeeAll && (
              <TouchableOpacity>
         
            <Text style={{color:'#eab308',
            fontSize:20}}>See All</Text>
        </TouchableOpacity>
            )
          }
        
      </View>
      {/* movie row */}
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}>
        {/* <FlatList
        data={data}
        key={item=>item.key}
        renderItem={({item})=>{
          return(
             <Pressable
                
                onPress={()=>navigation.push('Movie',item)}>
                  <View 
                  className='space-y-1 mr-4'>
                    <Image 
                    source={{uri:image185(item.poster_path) || fallbackMoviePoster}}
                    //source={require('../assets/images/infinity.jpg')}
                    style={{width:width*0.33,
                    height:height*0.33,
                    borderRadius:15,}}/>
                   
                      <Text style={tw`text-neutral-300 ml-1`}>
                     
                      {item.title.length>15?item.title.slice(0,15)+'...':item.title}
                    </Text> 
                  </View>
                  
                 
                </Pressable>
          )

        }}/> */}
        {data.map((item,index)=>{
            return(
                <Pressable
                key={index}
                onPress={()=>navigation.push('Movie',item)}>
                  <View 
                  className='space-y-1 mr-4'>
                    <Image 
                    source={{uri:image185(item.poster_path) || fallbackMoviePoster}}
                    //source={require('../assets/images/infinity.jpg')}
                    style={{width:width*0.33,
                    height:height*0.33,
                    borderRadius:15,}}/>
                   
                      <Text style={tw`text-neutral-300 ml-1`}>
                     
                      {item.title.length>15?item.title.slice(0,15)+'...':item.title}
                    </Text> 
                  </View>
                  
                 
                </Pressable>
            )
        }
        )}

      </ScrollView>
    </View>
  )
}

export default MovieList