import React from 'react'

import { ThemeProvider } from 'styled-components/native'

import Groups from './src/screens/Groups';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Comfortaa_700Bold, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';
import Start from './src/screens/Start';
import Login from './src/screens/Login';
import RecoverPassword from './src/screens/RecoverPassword';
import SignupName from './src/screens/SignupName';


export default function App() {

  const [loadsFonts] = useFonts({ Roboto_400Regular, Roboto_700Bold, Comfortaa_700Bold, Comfortaa_400Regular });

  return (

    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {loadsFonts ? <SignupName /> : <Loading />}

    </ThemeProvider>

  );
}


