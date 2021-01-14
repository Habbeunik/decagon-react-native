import React from 'react';
import { StyleProp, TextInput, TextInputProps } from 'react-native';
import { mergeStyle } from '../../Utils';

import styles from './InputStyle';

interface InputProps extends TextInputProps {
  onChangeText: (value: string) => void;
  value: string;
  style?: StyleProp<any>;
  placeholder?: string;
}
const Input: React.FC<InputProps> = (props) => (
  <TextInput {...props} style={mergeStyle(styles.input, props.style)} />
);

export default Input;
