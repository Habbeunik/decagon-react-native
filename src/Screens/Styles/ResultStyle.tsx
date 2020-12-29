import { StyleSheet } from 'react-native';
import theme from '../../Theme';

export default StyleSheet.create({
  headline: {
    color: theme.colors.dark,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.greyLightest,
    paddingBottom: 10,
    fontFamily: theme.font.bold,
  },
  emptyContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    fontFamily: theme.font.normal,
  },
  back: {
    marginBottom: 20,
    fontSize: 18,
    fontFamily: theme.font.bold,
    color: theme.colors.dark,
  },
  converWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
