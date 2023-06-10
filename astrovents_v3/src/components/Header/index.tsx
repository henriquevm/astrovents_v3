import { Container, Logo } from './styles';

import logoImg from '../../../img/openLogo.png';

export function Header(){
    return(
        <Container>
            <Logo source={logoImg}/>
        </Container>
    );
}