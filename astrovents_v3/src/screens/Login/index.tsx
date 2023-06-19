import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Container, ViewLogo, TxtLogo, ImgOpenLogo, FormLogin, InputEmailPass, ViewForgotPassword, TxtForgotPassword, ButtonSignUp, TxtSignUp } from "./styles";

import { ButtonBlack } from "../../components/ButtonBlack";

export default function Login() {
    return (
        <Container>
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
                <ButtonBlack />
            </FormLogin>
        </Container>
    );
}


