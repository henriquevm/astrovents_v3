import { Container, ViewLogo, TxtLogo, ImgOpenLogo, FormLogin, InputEmailPass, ViewForgotPassword, TxtForgotPassword } from "./styles";

import { ButtonBlack } from "../../components/ButtonBlack";
import { ReturnButton } from "../../components/ReturnButton";
import { useTheme } from "styled-components/native";

export default function Login() {
    
    const {COLORS} = useTheme();

    return (
        <Container>
            <ReturnButton/>
            <ViewLogo>
                <TxtLogo>Astrovents</TxtLogo>
                <ImgOpenLogo source={require('../../../img/openLogo.png')} />
            </ViewLogo>
            <FormLogin>
                <InputEmailPass
                    placeholder='E-mail'
                    placeholderTextColor={COLORS.GRAY_SKY}
                />
                <InputEmailPass
                    placeholder='Senha'
                    placeholderTextColor={COLORS.GRAY_SKY}
                />
                <ViewForgotPassword>
                    <TxtForgotPassword>
                        Esqueci minha senha
                    </TxtForgotPassword>
                </ViewForgotPassword>
                <ButtonBlack buttonText="ENTRAR" />
            </FormLogin>
        </Container>
    );
}


