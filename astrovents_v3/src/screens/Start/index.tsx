import { ImgBackground, ViewLogo, ImgOpenLogo, TextLogo, ViewButtons, ButtonLogin, TextLogin, ButtonSignUp, TextSignUp } from './styles';

export default function Start() {
    return (
        <ImgBackground source={require('../../../img/open.png')}>
            <ViewLogo>
                <ImgOpenLogo source={require('../../../img/openLogo.png')} />
                <TextLogo>Astrovents</TextLogo>
            </ViewLogo>
            <ViewButtons>
                <ButtonLogin>
                    <TextLogin>ENTRAR</TextLogin>
                </ButtonLogin>
                <ButtonSignUp>
                    <TextSignUp>CADASTRAR</TextSignUp>
                </ButtonSignUp>
            </ViewButtons>
        </ImgBackground>
    );
}


