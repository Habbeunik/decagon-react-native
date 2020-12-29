import { StyleSheet } from 'react-native';
import theme from '../../Theme';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    width: 50,
    height: 30,
    borderRadius: 5,
    marginRight: 15,
  },
  content: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.greyLightest,
    paddingBottom: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: theme.colors.dark,
    fontFamily: theme.font.bold,
  },
  caption: {
    fontSize: 14,
    color: theme.colors.greyLight,
    fontFamily: theme.font.normal,
  },
  convertAmountWrapper: {
    position: 'absolute',
    top: '40%',
    right: 25,
  },
  convertAmount: {
    fontSize: 19,
    color: theme.colors.dark,
    fontFamily: theme.font.bold,
  },
});
