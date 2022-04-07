import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './BottomNavigator';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LicenseScreen from '../screens/auth/LicenseScreen';

const Stack = createStackNavigator();
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SigninScreen"
                              component={ LoginScreen }
                              options={{ headerShown: false }}
                />        
                <Stack.Screen name="SignupScreen"
                              component={ RegisterScreen }
                />  
                <Stack.Screen name="LicenseScreen"
                              component={ LicenseScreen }
                />
                <Stack.Screen name="BottomNavigator"
                              component={ BottomNavigator }
                              options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;