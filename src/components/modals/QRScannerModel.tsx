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

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const QRScannerModel: FC<ModalProps> = ({ visible, onClose }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [codeFound, setCodeFound] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const device = useCameraDevice('back'); // Use directly without casting.

  const shimmerTranslateX = useSharedValue(-300);
  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shimmerTranslateX.value }],
  }));

  useEffect(() => {
    const checkPermission = async () => {
      const cameraPermissions = await Camera.requestCameraPermission();
      setHasPermission(cameraPermissions === 'granted');
    };
    checkPermission();
  }, []); // Dependency array added to prevent repeated calls.

  useEffect(() => {
    if (visible) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 400);
      return () => clearTimeout(timer);
    }
  }, [visible]); // Only run this effect when `visible` changes.

  useEffect(() => {
    shimmerTranslateX.value = withRepeat(
      withTiming(300, { duration: 1500, easing: Easing.linear }),
      -1, // Backward animation enabled.
      false
    );
  }, []); // Proper dependency array added.

  const handleScan = (data: any) => {
    const [connectionData, deviceName] = data.replace('tcp://', '').split('|');
    const [host, port] = connectionData?.split(':');
    console.log(`Host: ${host}, Port: ${port}, Device Name: ${deviceName}`);
  };


  const codeScanner = useMemo<CodeScanner>(() => ({

    // codeType: ['qr', 'codebar'],
    onCodeScanned: (codes) => {
      if (codeFound) {
        return;
      }
      console.log(codes?.length);
      if (codes?.length > 0 && !codeFound) {
        const scannedData = codes[0].value;
        console.log(`Scanned data: ${scannedData}`);
        setCodeFound(true);
        handleScan(scannedData);
      }
    },
    codeTypes: ['qr','codabar']
  }), [codeFound]);


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
          {loading ? (
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
            <>
              {!device || !hasPermission ? (
                <View style={modalStyles.skeleton}>
                  <Image
                    source={require('../../assets/images/no_camera.png')}
                    style={modalStyles.noCameraImage}
                  />
                </View>
              ) : (
                <View style={modalStyles.skeleton}>
                  <Camera
                    style={modalStyles.camera}
                    isActive={visible}
                    device={device}
                    codeScanner={codeScanner}
                  />
                </View>
              )}
            </>
          )}
        </View>

        {/* Information */}
        <View style={modalStyles.info}>
          <CustomText style={modalStyles.infoText1}>
            Ensure you are on the same Wi-Fi network.
          </CustomText>
          <CustomText style={modalStyles.infoText2}>
            Ask the receiver to show a QR code to connect and transfer files.
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

export default QRScannerModel;
