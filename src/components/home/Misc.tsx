import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomText from '../global/CustomText';

const Misc = () => {
  return (
    <View style={styles.container}>
      {/* Custom Text Component */}
      <CustomText fontSize={13} fontFamily="Okra-Bold">
        Explore
      </CustomText>
      
      {/* Image Component */}
      <Image
        source={require('../../assets/icons/wild_robot.jpg')}
        style={styles.adBanner}
      />

      <View style={styles.flexRowBetween}>
        <CustomText fontFamily="Okra-Bold" style={styles.text} fontSize={22}>
          #1 World Best File Sharing App!
        </CustomText>
        <Image
          source={require('../../assets/icons/share_logo.jpg')}
          style={styles.image}
        />
      </View>
      <CustomText fontFamily="Okra-Medium" style={styles.text2}>
        Made With ❤️ - Shivraj Kadam
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  adBanner: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 25,
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    opacity: 0.5,
    width: '60%',
  },
  text2: {
    opacity: 0.5,
    marginTop: 10,
  },
  image: {
    resizeMode: 'contain',
    height: 120,
    width: '35%',
  },
});

export default Misc;
