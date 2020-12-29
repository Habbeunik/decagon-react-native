import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
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
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    color: '#909090',
  },
});
