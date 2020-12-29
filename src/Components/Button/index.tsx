import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { mergeStyle } from '../../Utils';

import Styles from './Style';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onPress: () => void;
}
const Button: React.FC<ButtonProps> = ({ label, disabled, onPress }) => (
  <TouchableOpacity onPress={disabled ? undefined : onPress}>
    <View style={mergeStyle(Styles.wrapper, disabled ? Styles.disabled : {})}>
      <Text style={Styles.label}>{label}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
