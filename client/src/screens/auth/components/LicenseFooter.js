import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import BorderButton from '../../common/BorderButton';
import FullButton from '../../common/FullButton';
import styles from '../styles/register';

const LicenseFooter = () => {
    const navigation = useNavigation();
    const onDriverRegister = e => {
        navigation.dispatch(CommonActions.reset({
            routes: [{ name: 'SigninScreen' }]
        }));
    };
    const onPassengerRegister = e => {
        navigation.dispatch(CommonActions.reset({
            routes: [{ name: 'SigninScreen' }]
        }));
    };

    return (
        <View style={ styles.license_footer }>
            <FullButton text="For Driver" 
                        onPress={ onDriverRegister }
            />
            <BorderButton text="For Passenger"
                          onPress={ onPassengerRegister }
            />
        </View>
    );
};

export default LicenseFooter;