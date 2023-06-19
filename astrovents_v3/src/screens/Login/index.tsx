import { Container, ViewLogo, TxtLogo, ImgOpenLogo, FormLogin, InputEmailPass, ViewForgotPassword, TxtForgotPassword } from "./styles";

import { ButtonBlack } from "../../components/ButtonBlack";
import { ReturnButton } from "../../components/ReturnButton";

export default function Login() {
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
                    placeholderTextColor='#313234'
                />
                <InputEmailPass
                    placeholder='Senha'
                    placeholderTextColor='#313234'
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


