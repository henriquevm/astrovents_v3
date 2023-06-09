import { ImageBackground, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from "./styles";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Text style={styles.txtLogo}>Astrovents</Text>
                <Image source={require('../../../img/openLogo.png')} style={styles.imgOpenLogo} />
            </View>
            <View style={styles.formLogin}>

                <TextInput
                    style={styles.inputEmailPass}
                    placeholder='E-mail'
                    placeholderTextColor={'#5b5959'}
                />
                <TextInput
                    style={styles.inputEmailPass}
                    placeholder='Senha'
                    placeholderTextColor={'#5b5959'}
                />
                <View style={styles.viewForgotPassword}>
                    <Text style={styles.txtForgotPassword}>
                        Esqueci minha senha
                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonSignUp}>
                    <Text style={styles.txtSignUp}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


