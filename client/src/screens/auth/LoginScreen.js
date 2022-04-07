import React from 'react';
import { View } from 'react-native';
import LoginForm from './components/LoginForm';
import styles from './styles/login';

const LoginScreen = () => {
    return(
        <View style={ styles.login_screen }>
            <LoginForm />
        </View>
    );
};

export default LoginScreen;