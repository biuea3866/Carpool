import React from 'react';
import { View } from 'react-native';
import RegisterFooter from './components/RegisterFooter';
import RegisterForm from './components/RegisterForm';
import RegisterHeader from './components/RegisterHeader';
import styles from './styles/register';

const RegisterScreen = () => {
    return(
        <View style={ styles.register_screen }>
            <RegisterHeader />
            <RegisterForm />
            <RegisterFooter />
        </View>
    );
};

export default RegisterScreen;