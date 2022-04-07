import React from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import palette from '../../../utils/palette';
import FullButton from '../../common/FullButton';
import BorderButton from '../../common/BorderButton';
import BottomlineInput from '../../common/BottomlineInput';
import styles from '../styles/login';

const LoginForm = () => {
    const navigation = useNavigation();
    const toMainScreen = e => {
        navigation.dispatch(CommonActions.reset({
            routes: [{ name: 'BottomNavigator' }]
        }));
    };
    const toSignupScreen = e => {
        navigation.navigate('SignupScreen');
    };

    return (
        <View style={ styles.login_form }>
            <BottomlineInput inputAccessoryViewID="email"
                             placeholder="E-mail"
                             placeholderTextColor={ palette.gray[4] }
            />
            <BottomlineInput inputAccessoryViewID="password"
                             placeholder="Password"
                             placeholderTextColor={ palette.gray[4] }
            />
            <FullButton text="Signin"
                        onPress={ toMainScreen }
            />
            <BorderButton text="Signup"
                          onPress={ toSignupScreen }
            />
        </View>
    );
};

export default LoginForm;