import { StyleSheet } from 'react-native';
import theme from '../../Theme';

export default StyleSheet.create({
  input: {
    fontSize: 17,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 30,
    fontFamily: theme.font.normal,
  },
});
