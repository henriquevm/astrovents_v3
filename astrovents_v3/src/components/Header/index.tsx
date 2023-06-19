import { BackArrow, BackButton, Container, Logo } from './styles';
import logoImg from '../../../img/openLogo.png';

export function Header() {
    return (
        <Container>
            <BackButton>
                <BackArrow />
            </BackButton>
            {/*<Logo source={logoImg} />*/}
        </Container>
    );
}