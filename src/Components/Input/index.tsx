import React from 'react';
import { TextInput } from 'react-native';
import { mergeStyle } from '../../Utils';

import styles from './InputStyle';

const Input = (props) => (
  <TextInput {...props} style={mergeStyle(styles.input, props.style)} />
);

export default Input;
