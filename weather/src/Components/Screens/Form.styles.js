import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 60 : 20,
        flex: 1,
        padding: 20,
        backgroundColor: '#f1f1f1',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 50,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#dbdbdb',
        borderRadius: 4,
        backgroundColor: '#fff',
        color: '#363636',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 10,
    },
});