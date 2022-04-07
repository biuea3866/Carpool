import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import FullButton from '../../common/FullButton';
import styles from '../styles/register';

const RegisterFooter = () => {
    const navigation = useNavigation();
    const toLicenseScreen = e => {
        navigation.navigate('LicenseScreen');
    };

    return (
        <View style={ styles.register_footer }>
            <FullButton onPress={ toLicenseScreen }
                        text="Next"
            />
        </View>
    )
};

export default RegisterFooter;