import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.COLORS.WHITE_STAR};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme})=>({
    color: theme.COLORS.BLACK_SPACE,
    size: "large"
}))``;