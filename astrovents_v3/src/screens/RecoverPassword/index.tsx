import { Container, FormLogin, InputEmailPass} from "./styles";

import { ButtonBlack } from "../../components/ButtonBlack";
import { ReturnButton } from "../../components/ReturnButton";
import { useTheme } from "styled-components/native";
import { TitlePage } from "../../components/TitlePage";

export default function RecoverPassword() {
    
    const {COLORS} = useTheme();

    return (
        <Container>
            <ReturnButton/>
            <TitlePage title="Recuperar senha"/>
            <FormLogin>
                <InputEmailPass
                    placeholder='Seu E-mail'
                    placeholderTextColor={COLORS.GRAY_SKY}
                />
                <ButtonBlack buttonText="ENVIAR NOVA SENHA" />
            </FormLogin>
        </Container>
    );
}