import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/border.button';

const BorderButton = ({
    text,
    onPress
}) => {
    return(
        <TouchableOpacity style={ styles.button }
                          onPress={ onPress }
        >
            <Text style={ styles.text }>{ text }</Text>
        </TouchableOpacity>
    );
};

export default BorderButton;