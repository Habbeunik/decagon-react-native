import { StyleSheet } from 'react-native';

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
    borderBottomColor: '#F2f2f2',
    paddingBottom: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#585858',
    fontFamily: 'WorkSansBold',
  },
  caption: {
    fontSize: 14,
    color: '#909090',
    fontFamily: 'WorkSans',
  },
  convertAmountWrapper: {
    position: 'absolute',
    top: '40%',
    right: 25,
  },
  convertAmount: {
    fontSize: 19,
    color: '#585858',
    fontFamily: 'WorkSansBold',
  },
});
