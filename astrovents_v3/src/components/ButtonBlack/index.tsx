import { ButtonSignUp, TxtSignUp } from './styles';

type ButtonBlackProps = {
    buttonText: string;
}

export function ButtonBlack({ buttonText }: ButtonBlackProps) {
    return (
        <ButtonSignUp>
            <TxtSignUp>{buttonText}</TxtSignUp>
        </ButtonSignUp>
    );
}

