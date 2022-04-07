import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles/bottomline.input';

const BottomlineInput = ({
    inputAccessoryViewID,
    placeholder,
    placeholderTextColor,
    onChange,
    value
}) => {
    return <TextInput style={ styles.input }
                      inputAccessoryViewID={ inputAccessoryViewID }
                      placeholder={ placeholder }
                      placeholderTextColor={ placeholderTextColor }
                      onChange={ onChange }
                      value={ value }
           />;
};

export default BottomlineInput;