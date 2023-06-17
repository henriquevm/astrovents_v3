import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Container, ViewLogo, TxtLogo, ImgOpenLogo, FormLogin, InputEmailPass, ViewForgotPassword, TxtForgotPassword, ButtonSignUp, TxtSignUp } from "./styles";

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
                    placeholderTextColor='#5b5959'
                />
                <InputEmailPass
                    placeholder='Senha'
                    placeholderTextColor='#5b5959'
                />
                <ViewForgotPassword>
                    <TxtForgotPassword>
                        Esqueci minha senha
                    </TxtForgotPassword>
                </ViewForgotPassword>
                <ButtonSignUp>
                    <TxtSignUp>ENTRAR</TxtSignUp>
                </ButtonSignUp>
            </FormLogin>
        </Container>
    );
}


