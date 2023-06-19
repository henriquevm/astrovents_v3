import { BackArrow, BackButton, Container } from './styles';

export function ReturnButton() {
    return (
        <Container>
            <BackButton>
                <BackArrow />
            </BackButton>
        </Container>
    );
}