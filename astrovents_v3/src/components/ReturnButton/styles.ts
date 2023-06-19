import { ArrowBendUpLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin-top: 10px;
    top: 40px;
    left: 10%;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const BackArrow = styled(ArrowBendUpLeft).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.BLACK_SPACE
}))``;