import React from 'react';
import { View } from 'react-native';
import styles from '../styles/register';
import NoticeText from './NoticeText';

const LicenseHeader = () => {
    return (
        <View style={ styles.license_header }>
            <NoticeText text={ "운전자 등록 화면입니다. \n등록을 하시려면 사항들을 기입해주세요. \n미등록의 경우 가입 버튼을 눌러주세요!" } />
        </View>
    );
};

export default LicenseHeader;