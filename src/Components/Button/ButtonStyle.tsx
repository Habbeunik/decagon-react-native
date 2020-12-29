import { StyleSheet } from 'react-native';
import theme from '../../Theme';

export default StyleSheet.create({
  wrapper: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
    width: '100%',
  },
  disabled: {
    backgroundColor: theme.colors.grey,
  },
  label: {
    fontSize: 16,
    color: theme.colors.white,
    textAlign: 'center',
    fontFamily: theme.font.normal,
  },
});
