import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 60 : 10,
        flex: 1,
        padding: 15,
        backgroundColor: '#f1f1f1',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 50,
        marginBottom: 20,
    },
    buttonSpace: {
      paddingTop: 10,
      alignSelf: 'center',
    },
    button: {
        borderRadius: 5,
        backgroundColor: 'blue',
        width: 120,
        height: 30,
        paddingTop: 4,
    },
    buttonText: {
       color: 'white',
       fontSize: 16,
       fontWeight: 'bold',
       alignSelf:'center',
       justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#dbdbdb',
        borderRadius: 6,
        backgroundColor: '#fff',
        color: '#363636',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 10,
        width: '70%',
        alignSelf: 'center',
    },
});