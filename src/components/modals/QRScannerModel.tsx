import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { modalStyles } from '../../styles/modalStyles';
import Icon from '../global/Icon';
import CustomText from '../global/CustomText';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const QRScannerModel: FC<ModalProps> = ({ visible, onClose }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [codeFound, setCodeFound] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const device = useCameraDevice('back') as any;

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
        <TouchableOpacity
          style={modalStyles.closeButton}
          onPress={onClose}
        >
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
