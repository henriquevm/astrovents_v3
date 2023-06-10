import { ActivityIndicator} from 'react-native';
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import Groups from './src/screens/Groups';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Comfortaa_700Bold, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import { Loading } from './src/components/Loading';


export default function App() {
  
  const [loadsFonts] = useFonts({Roboto_400Regular, Roboto_700Bold, Comfortaa_700Bold, Comfortaa_400Regular});

  return (

    <ThemeProvider theme={theme}>
      
      { !loadsFonts ? <Groups /> : <Loading/>}
      
    </ThemeProvider>

  );
}


