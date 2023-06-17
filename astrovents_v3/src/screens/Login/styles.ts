import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const ViewLogo = styled.View`
    top: 100px;
    height: 200px;
    flex-direction: row;
`;

export const ImgOpenLogo = styled.Image`
    width: 80px;
    height: 80px;
`;

export const TxtLogo = styled.Text`
    color: #000000;
    font-size: 45px;
    padding-top: 10px;
`;

export const FormLogin = styled.View`
    width: 320px;
`;

export const InputEmailPass = styled.TextInput`
    font-size: 16px;
    margin-bottom: 35px;
    padding-left: 12px;
    height: 65px;
    border-width: 3px;
    border-color: #000000;
    border-style: solid;
    border-radius: 3px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
    height: 52px;
    width: 320px;
    background-color: #0c0c0c;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border-color: #000000;
    border-width: 2px;
`;

export const TxtSignUp = styled.Text`
    color: #f8f8f8;
`;

export const ViewForgotPassword = styled.View`
    align-items: flex-end;
    padding-top: 10px;
    padding-bottom: 30px;
`;

export const TxtForgotPassword = styled.Text`
    color: #6E2307;
`;