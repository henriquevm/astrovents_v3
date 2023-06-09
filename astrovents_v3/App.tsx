import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import styled, { ThemeProvider } from 'styled-components/native'

import Groups from './src/sreens/Groups';
import theme from './src/theme';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>

    //Proximo passo incluir o theme

    // <View style={styles.container}>
    //   <Text>Ola</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}


