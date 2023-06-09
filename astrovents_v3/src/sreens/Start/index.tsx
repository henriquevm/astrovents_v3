import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native';
//import { styles } from "./styles";
import styles from 'styled-components'

import { ImgBackground } from './styles'

export default function Start() {
    return (
        <View>
            <ImgBackground>
                <ImageBackground source={require('../../../img/open.png')}>
                    
                    
                </ImageBackground>
            </ImgBackground>
        </View>
    );
}


