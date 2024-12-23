import { View, Text } from 'react-native'
import React, { FC } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RFValue } from 'react-native-responsive-fontsize'


interface IconProps {
    color?: string;
    size: number;
    name: string;
    iconFamily: 'MaterialCommunityIcons' | 'MaterialIcons' | 'Ionicons';
}

const Icon: FC<IconProps> = ({ color, size, name, iconFamily }) => {
    return (
        <>
            {iconFamily === 'MaterialCommunityIcons' && <MaterialCommunityIcons name={name} color={color} size={RFValue(size)} />}
            {iconFamily === 'MaterialIcons' && <MaterialIcons name={name} color={color} size={RFValue(size)} />}
            {iconFamily === 'Ionicons' && <Ionicons name={name} color={color} size={RFValue(size)} />}
        </>
    )
}

export default Icon