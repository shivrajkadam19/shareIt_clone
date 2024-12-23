import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { optionStyles } from '../../styles/optionsStyles';
import Icon from '../global/Icon';
import { Colors } from '../../utils/Constants';
import CustomText from '../global/CustomText';

const Options: FC<{
    isHome: boolean,
    onMediaPickedUp?: (media: any) => void;
    onFilePickedUp?: (file: any) => void;
}> = ({ isHome, onMediaPickedUp, onFilePickedUp }) => {


    const handleUniversalPicker = async (type: string) => {
        // const options = {
        //     mediaType: type === 'media' ? 'photo' : 'file',
        //     quality: 1,
        //     includeBase64: true,
        //     selectionLimit: 1,
        //     mediaType: 'photo',
        //     storageOptions: {
        //         skipBackup: true,
    }
    return (
        <View style={optionStyles.container}>
            <TouchableOpacity
                style={optionStyles.subContainer}
                onPress={() => handleUniversalPicker('media')}>
                <Icon iconFamily={'Ionicons'} name='images' color={Colors.primary} size={20} />
                <CustomText fontFamily={'Okra-Medium'} style={{ marginTop: 5, textAlign: 'center' }}>Photo</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
                style={optionStyles.subContainer}
                onPress={() => handleUniversalPicker('file')}>
                <Icon iconFamily={'Ionicons'} name='musical-notes-sharp' color={Colors.primary} size={20} />
                <CustomText fontFamily={'Okra-Medium'} style={{ marginTop: 5, textAlign: 'center' }}>Audio</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
                style={optionStyles.subContainer}
                onPress={() => handleUniversalPicker('file')}>
                <Icon iconFamily={'Ionicons'} name='folder-open' color={Colors.primary} size={20} />
                <CustomText fontFamily={'Okra-Medium'} style={{ marginTop: 5, textAlign: 'center' }}>Files</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
                style={optionStyles.subContainer}
                onPress={() => handleUniversalPicker('file')}>
                <Icon iconFamily={'MaterialCommunityIcons'} name='contacts' color={Colors.primary} size={20} />
                <CustomText fontFamily={'Okra-Medium'} style={{ marginTop: 5, textAlign: 'center' }}>Contacts</CustomText>
            </TouchableOpacity>
        </View>
    )
}

export default Options