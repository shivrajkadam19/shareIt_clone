import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { bottomTabStyles } from '../../styles/bottomTabStyle';
import Icon from '../global/Icon';
import { navigate } from '../../utils/NavigationUtil';
import QRScannerModel from '../modals/QRScannerModel';
import QRGenerateModal from '../modals/QRGenerateModal';

const AbsoluteQRBottom = () => {
    const [isVisible, setVisible] = useState(false);

    return (
        <>
            <View style={bottomTabStyles.container}>
                {/* Navigate to Received File Screen */}
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="apps-sharp" iconFamily="Ionicons" color="#333" size={24} />
                </TouchableOpacity>

                {/* Show QR Code Scanner */}
                <TouchableOpacity
                    style={bottomTabStyles.qrCode}
                    onPress={() => setVisible(true)}
                >
                    <Icon
                        name="qrcode-scan"
                        iconFamily="MaterialCommunityIcons"
                        color="#fff"
                        size={26}
                    />
                </TouchableOpacity>

                {/* Additional Action */}
                <TouchableOpacity>
                    <Icon name="beer-sharp" iconFamily="Ionicons" color="#333" size={24} />
                </TouchableOpacity>
            </View>
            {
                isVisible && <QRScannerModel visible={isVisible} onClose={() => setVisible(false)} />
            }
        </>
    );
};

export default AbsoluteQRBottom;
