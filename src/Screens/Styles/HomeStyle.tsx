import { StyleSheet } from 'react-native';
import theme from '../../Theme';

export default StyleSheet.create({
  home: {
    justifyContent: 'center',
  },
  inputWrapper: {
    marginTop: 25,
    marginBottom: 15,
  },
  headline: {
    fontFamily: theme.font.bold,
    fontSize: 25,
    color: theme.colors.dark,
    textAlign: 'center',
  },
  caption: {
    fontFamily: theme.font.normal,
    color: theme.colors.greyLight,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
  },
});
