import { Container, FormLogin, InputEmailPass} from "./styles";

import { ButtonBlack } from "../../components/ButtonBlack";
import { ReturnButton } from "../../components/ReturnButton";
import { useTheme } from "styled-components/native";
import { TitlePage } from "../../components/TitlePage";

export default function SignupName() {
    
    const {COLORS} = useTheme();

    return (
        <Container>
            <ReturnButton/>
            <TitlePage title="Crie uma conta "/>
            <FormLogin>
                <InputEmailPass
                    placeholder='Primeiro nome'
                    placeholderTextColor={COLORS.GRAY_SKY}
                />
                <InputEmailPass
                    placeholder='Segundo nome'
                    placeholderTextColor={COLORS.GRAY_SKY}
                />
                <ButtonBlack buttonText="PRÓXIMO" />
            </FormLogin>
        </Container>
    );
}