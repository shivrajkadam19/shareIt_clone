import { View, Text, Image } from 'react-native'
import React, { FC, useEffect } from 'react'
import { navigate } from '../utils/NavigationUtil'
import { commonStyles } from '../styles/commonStyles'

const SplashScreen: FC = () => {
    const navigateToHome = () => {
        navigate('HomeScreen');
    }
    useEffect(()=>{
        setTimeout(() => {
            navigateToHome();
        }, 3000);
    },[])
    return (
        <View style={commonStyles.container}>
            <Image style={commonStyles.img} source={require('../assets/images/logo_text.png')}/>
        </View>
    )
}

export default SplashScreen