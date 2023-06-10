import { StyleSheet, ImageBackground } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //height: 100%
        //backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    viewLogo: {
        top: 100,
        height: 200,
        flexDirection: 'row'
    },
    imgOpenLogo: {
        width: 80,
        height: 80
    },
    txtLogo: {
        color: '#000000',
        fontSize: 45,
        paddingTop: 10
    },
    formLogin: {
        width: 320,
    },
    inputEmailPass: {
        fontSize: 16,
        marginBottom: 35,
        paddingStart: 8,
        height: 65,
        borderWidth: 3,
        borderColor: '#000000',
        borderStyle: 'solid',
        borderRadius: 3,
    },
    buttonSignUp: {
        height: 52,
        width: 320,
        backgroundColor: '#0c0c0c',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 2
    },
    txtSignUp: {
        color: '#f8f8f8'
    },
    viewForgotPassword: {
        alignItems: 'flex-end',
        paddingTop: 10,
        paddingBottom: 30
    },
    txtForgotPassword: {
        color: '#6E2307',
    }
});