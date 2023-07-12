import { View, Text,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { image500 } from '../api/moviedb'


const Cast = ({cast,navigation }) => {
  let personName='Peter Parker'
  let characterName='Miles Morales'
  return (
    <View className='my-6'>
      <Text className='text-white text-lg mx-4 mb-3 font-bold'>Top Cast</Text>
      <ScrollView
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{padding:20}}>
       {
        cast && cast.map((person,index)=>{
          return(
            <TouchableOpacity
             key={index}
             onPress={()=>navigation.navigate('Person',person)}
             className='mr-4 items-center'>

              <View className='overflow-hidden rounded-full h-20 w-20 items-center justify-center border border-neutral-500'>
              <Image 
              
              source={{uri:image500(person.profile_path)}} 
              
              className='rounded-2xl h-24 w-20 '/>
              </View>
             
              <Text className='text-white mr-4 text-xs'>
                {
                  person.character.length>10? person.character.slice(0,10)+'...' : person.character
                }
              </Text>
              <Text className='text-neutral-600 mr-4 text-xs'>
                {
                  person.original_name.length>10? person.original_name.slice(0,10)+'...' : person.original_name
                }
              </Text>
            </TouchableOpacity>
          )
        }

        )
       }
      </ScrollView>
      
    </View>
  )
}

export default Cast