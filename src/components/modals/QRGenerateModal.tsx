import React, { FC, useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { modalStyles } from '../../styles/modalStyles';
import Icon from '../global/Icon';
import CustomText from '../global/CustomText';
import { Camera, CodeScanner, CodeType, useCameraDevice } from 'react-native-vision-camera';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import { multiColor } from '../../utils/Constants';
import DeviceInfo from 'react-native-device-info';
interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const QRGenerateModal: FC<ModalProps> = ({ visible, onClose }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [qrValue, setQrValue] = useState<string>("Shivraj");

  const shimmerTranslateX = useSharedValue(-300);
  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shimmerTranslateX.value }],
  }));

  const setUpSever = async () => {
    const deviceName = await DeviceInfo.getDeviceName();
    const ipAddress = await DeviceInfo.getIpAddress();
    const qrData = `http://${ipAddress}:3000?name=${deviceName}`;
    setQrValue(qrData);
    setLoading(false);
  }
  useEffect(() => {
    shimmerTranslateX.value = withRepeat(
      withTiming(300, { duration: 1500, easing: Easing.linear }),
      -1,
      false
    );

    if (visible) {
      setLoading(true);
      setUpSever();
    }
  }, [visible]);

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="formSheet"
      onDismiss={onClose}
    >
      <View style={modalStyles.modalContainer}>
        {/* QR Scanner */}
        <View style={modalStyles.qrContainer}>

          {loading || qrValue === null || qrValue === "" ? (
            <View style={modalStyles.skeleton}>
              <Animated.View style={[shimmerStyle, modalStyles.shimmerOverlay]}>
                <LinearGradient
                  colors={['#f3f3f3', '#fff', '#f3f3f3']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={modalStyles.shimmerGradient}
                />
              </Animated.View>
            </View>
          ) : (
            <QRCode
              value={qrValue}
              size={250}
              logoSize={60}
              logoBackgroundColor={'#fff'}
              logoMargin={2}
              logoBorderRadius={10}
              logo={require('../../assets/images/profile2.jpg')}
              linearGradient={multiColor}
              enableLinearGradient />
          )}
        </View>

        {/* Information */}
        <View style={modalStyles.info}>
          <CustomText style={modalStyles.infoText1}>
            Ensure you are on the same Wi-Fi network.
          </CustomText>
          <CustomText style={modalStyles.infoText2}>
            Ask the sender to scan the QR code to connect and transfer files.
          </CustomText>
        </View>

        {/* Activity Indicator */}
        {loading && (
          <ActivityIndicator
            size="small"
            color="#000"
            style={{ alignSelf: 'center' }}
          />
        )}

        {/* Close Button */}
        <TouchableOpacity style={modalStyles.closeButton} onPress={onClose}>
          <Icon
            name="close"
            iconFamily="Ionicons"
            color="#000"
            size={24}
          />
        </TouchableOpacity>
      </View>

    </Modal>
  );
};

export default QRGenerateModal;
