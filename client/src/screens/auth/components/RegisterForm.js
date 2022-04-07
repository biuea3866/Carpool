import React from 'react';
import { View } from 'react-native';
import BottomlineInput from '../../common/BottomlineInput';
import palette from '../../../utils/palette';
import styles from '../styles/register';

const RegisterForm = () => {
    return(
        <View style={ styles.register_form }>
            <BottomlineInput inputAccessoryViewID="email"
                             placeholder="E-mail"
                             placeholderTextColor={ palette.gray[5] }
            />
            <BottomlineInput inputAccessoryViewID="password"
                             placeholder="Password"
                             placeholderTextColor={ palette.gray[5] }
            />
            <BottomlineInput inputAccessoryViewID="passwordConfirm"
                             placeholder="Re-password"
                             placeholderTextColor={ palette.gray[5] }
            />
            <BottomlineInput inputAccessoryViewID="nickname"
                             placeholder="Nickname"
                             placeholderTextColor={ palette.gray[5] }
            />
        </View>
    );
};

export default RegisterForm;