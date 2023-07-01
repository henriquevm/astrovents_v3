import styled from "styled-components/native";

export const ViewLogo = styled.View`
    top: 80px;
    height: 200px;
    width: 80%;
    flex-direction: row;
`;


export const TxtLogo = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.COMFORTAA_REGULAR};
    color: ${({ theme }) => theme.COLORS.BLACK_SPACE};
    font-size: 45px;
`;

export const ImgOpenLogo = styled.Image`
    width: 80px;
    height: 80px;
`;