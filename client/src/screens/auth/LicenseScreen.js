import React from 'react';
import { View } from 'react-native';
import styles from './styles/register';
import LicenseForm from './components/LicenseForm';
import LicenseHeader from './components/LicenseHeader';
import LicenseFooter from './components/LicenseFooter';

const LicenseScreen = () => {
    return (
        <View style={ styles.license_screen }>
            <LicenseHeader />
            <LicenseForm />
            <LicenseFooter />
        </View>
    );
};

export default LicenseScreen;