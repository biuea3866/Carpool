import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/full.button';

const FullButton = ({
    onPress,
    text
}) => {
    return(
        <TouchableOpacity style={ styles.button }
                          onPress={ onPress }
        >
            <Text style={ styles.text }>
                { text }
            </Text>
        </TouchableOpacity>
    );
};

export default FullButton;