import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import useSocialAuth from '@/hooks/useSocialAuth'

const index = () => {
    const {isLoading, handleSocialAuth} = useSocialAuth()

  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Image
        source={require('../../assets/images/auth-image.png')}
        className='size-96'
        resizeMode='contain'
      />
      <View className='gap-2 mt-3'>
        <TouchableOpacity className='flex-row items-center justify-center bg-white border border-gray-300 rounded-full px-6 py-2'
        onPress={() => handleSocialAuth('oauth_google')}
        disabled={isLoading}
        style={{
            shadowOffset: {width:0, height:1},
            shadowOpacity:0.1,
            elevation: 2 //this is for android
        }}
        >
            {isLoading ? (
                <ActivityIndicator size={"small"} color={'#4285f4'} />
            ):(
                <View className='flex-row items-center justify-center'>
                    <Image 
                        source={require('../../assets/images/google.png')}
                        className='size-10 mr-3'
                        resizeMode='contain'
                    />
                    <Text>
                        Continue with Google
                    </Text>
                </View>
            )}
        </TouchableOpacity>
        <TouchableOpacity className='flex-row items-center justify-center bg-white border border-gray-300 rounded-full px-6 py-3'
        onPress={() => handleSocialAuth('oauth_apple')}
        disabled={isLoading}
        style={{
            shadowOffset: {width:0, height:1},
            shadowOpacity:0.1,
            elevation: 2 //this is for android
        }}
        >
            {isLoading ? (
                <ActivityIndicator size={"small"} color={'#4285f4'} />
            ):(
                <View className='flex-row items-center justify-center'>
                    <Image 
                        source={require('../../assets/images/apple.png')}
                        className='size-8 mr-3'
                        resizeMode='contain'
                    />
                    <Text>
                        Continue with Apple
                    </Text>
                </View>
            )}
        </TouchableOpacity>
      </View>
      <Text className='text-center text-gray-500 text-xs leading-4 mt-6 px-2'>
        By Signing up, you agree to our terms <Text className='text-blue-500'>terms and conditions</Text>
      </Text>
    </View>
  )
}

export default index