//import { StyleSheet, ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const ImgBackground = styled.ImageBackground`
    flex: 1;
    resize: cover;
    align-items: center;
    justify-content: center;
`;

export const ViewLogo = styled.View`
    flex-direction: row;
`;

export const ImgOpenLogo = styled.Image`
    width: 80px;
    height: 80px;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    align-items:  center;
    justify-content: center;
`;

export const TextLogo = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
    font-size: 45px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.COMFORTAA_REGULAR};
`;

export const ViewButtons = styled.View`
    position: absolute;
    bottom: 35px;
    flex-direction: row;
    justify-content: flex-end;
`;

export const ButtonLogin = styled.TouchableOpacity`
    height: 52px;
    width: 167px;
    margin-right: 5px;
    background-color: ${({ theme }) => theme.COLORS.WHITE_STAR};
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
    border-width: 2px;
`;

export const TextLogin = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
    color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
`;

export const ButtonSignUp = styled.TouchableOpacity`
    height: 52px;
    width: 167px;
    margin-left: 5px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
    border-width: 2px;
`;

export const TextSignUp = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE_STAR};
`;