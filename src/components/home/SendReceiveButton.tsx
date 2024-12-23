import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { screenHeight } from '../../utils/Constants'

const SendReceiveButton: FC = () => {
    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.button}>
                <Image source={require('../../assets/icons/send1.jpg')} style={Styles.img} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button}>
                <Image source={require('../../assets/icons/receive1.jpg')} style={Styles.img} />
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: screenHeight * 0.04,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    },
    button:{
        width: 140,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
    }


})

export default SendReceiveButton