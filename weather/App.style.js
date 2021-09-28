import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  }
})