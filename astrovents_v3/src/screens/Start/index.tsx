import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ImgBackground, styles } from './styles'

export default function Start() {
    return (
        <ImgBackground source={require('../../../img/open.png')}>
            <View style={styles.viewLogo}>
                <Image source={require('../../../img/openLogo.png')} style={styles.imgOpenLogo} />
                <Text style={styles.txtLogo}>Astrovents</Text>
            </View>
            <View style={styles.viewButtons}>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.txtLogin}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSignUp}>
                    <Text style={styles.txtSignUp}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </ImgBackground>
    );
}


