import { ArrowBendUpLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const ButtonSignUp = styled.TouchableOpacity`
    height: 52px;
    width: 320px;
    margin-left: 5px;
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