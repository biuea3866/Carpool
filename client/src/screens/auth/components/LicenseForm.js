import React from 'react';
import { View } from 'react-native';
import BottomlineInput from '../../common/BottomlineInput';
import styles from '../styles/register';
import palette from '../../../utils/palette';

const LicenseForm = () => {
    return (
        <View style={ styles.license_form }>
            <BottomlineInput inputAccessoryViewID="birthDate"
                             placeholder="Birth Date"
                             placeholderTextColor={ palette.gray[5] }
            />
            <BottomlineInput inputAccessoryViewID="name"
                             placeholder="Name"
                             placeholderTextColor={ palette.gray[5] }
            />
            <BottomlineInput inputAccessoryViewID="licNumber"
                             placeholder="License Number"
                             placeholderTextColor={ palette.gray[5] }
            />
        </View>
    );
};

export default LicenseForm;