import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/register';

const NoticeText = ({ text }) => {
    return (
        <Text style={ styles.normal_font_18 }>
            { text }
        </Text>
    );
};

export default NoticeText;