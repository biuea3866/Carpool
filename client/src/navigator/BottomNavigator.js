import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import palette from '../utils/palette';
import HomeScreen from '../screens/home/HomeScreen';
import ChatScreen from '../screens/chat/ChatScreen';
import CarpoolScreen from '../screens/carpool/CarpoolScreen';
import MypageScreen from '../screens/user/MypageScreen';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
    return(
        <Tab.Navigator screenOptions={({ route }) => ({ 
                tabBarIcon: ({ 
                    focused,
                    color
                }) => {
                    var name;
                    
                    if(route.name === 'Home') name = focused ? 'home' : 'home-outline';
                    else if(route.name === 'Chat') name = focused ? 'chatbubble' : 'chatbubble-outline';
                    else if(route.name === 'Carpool') name = focused ? 'car' : 'car-outline';
                    else if(route.name === 'Mypage') name = focused ? 'person' : 'person-outline';
                
                    return <Ionicons size={ 28 }
                                     name={ name }
                                     color={ color }
                           />;
                },
                tabBarActiveTintColor: palette.sky[0], 
                tabBarInactiveTintColor: palette.gray[4]    
            })}
        >
            <Tab.Screen name="Home"
                        component={ HomeScreen }
                        options={{ headerShown: false }}
            />
            <Tab.Screen name="Chat"
                        component={ ChatScreen }
                        options={{ headerShown: false }}
            />
            <Tab.Screen name="Carpool"
                        component={ CarpoolScreen }
                        options={{ headerShown: false }}
            />
            <Tab.Screen name="Mypage"
                        component={ MypageScreen }
                        options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigator;