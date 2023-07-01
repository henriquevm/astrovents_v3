import { Container, FormLogin, InputEmailPass, ViewForgotPassword, TxtForgotPassword } from "./styles";

import { ButtonBlack } from "../../components/ButtonBlack";
import { ReturnButton } from "../../components/ReturnButton";
import { useTheme } from "styled-components/native";
import { TitlePageBig } from "../../components/TitlePageBig";

export default function Login() {
    
    const {COLORS} = useTheme();

    return (
        <Container>
            <ReturnButton/>
            <TitlePageBig title="Astrovents"/>
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