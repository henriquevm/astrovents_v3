import styled from "styled-components/native";

export const ButtonSignUp = styled.TouchableOpacity`
    height: 52px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const TxtSignUp = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE_STAR};
`;