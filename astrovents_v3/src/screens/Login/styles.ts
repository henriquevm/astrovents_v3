import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const FormLogin = styled.View`
    width: 80%;
`;

export const InputEmailPass = styled.TextInput`
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_REGULAR};
    font-size: 16px;
    margin-bottom: 35px;
    padding-left: 12px;
    height: 65px;
    border-width: 3px;
    border-color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
    border-style: solid;
    border-radius: 3px;
`;

export const ViewForgotPassword = styled.View`
    align-items: flex-end;
    padding-top: 10px;
    padding-bottom: 30px;
`;

export const TxtForgotPassword = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
`;

export const ButtonSignUp = styled.TouchableOpacity`
    height: 52px;
    width: 320px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
    border-width: 2px;
`;

export const TxtSignUp = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE_STAR};
`;