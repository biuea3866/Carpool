import React from 'react';
import { View } from 'react-native';
import styles from '../styles/register';
import NoticeText from './NoticeText';

const RegisterHeader = () => {
    return (
        <View style={ styles.register_header }>
            <NoticeText text={ "회원가입을 위한 \n기본정보를 입력해주세요!" }/>
        </View>
    );
};

export default RegisterHeader;