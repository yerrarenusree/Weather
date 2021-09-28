import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
   display: 'flex',
   flexDirection: 'row',
   padding: 50,
   paddingBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  btn: {
    paddingLeft: 20,
  },
  errorMessage: {
    fontSize: 16,
    color:"red",
    paddingLeft: 50,
  },
})