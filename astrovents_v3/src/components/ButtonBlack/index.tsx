import { ButtonSignUp, TxtSignUp } from './styles';

interface ButtonBlackProps {
    buttonText: string;
}

export function ButtonBlack({ buttonText }: ButtonBlackProps) {
    return (
        <ButtonSignUp>
            <TxtSignUp>{buttonText}</TxtSignUp>
        </ButtonSignUp>
    );
}