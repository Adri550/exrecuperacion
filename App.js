import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stack from './navigations/stacknavigation';
import {NavigationContainer} from '@react-navigation/native';
import FrasesProvider from './context/context';

export default function App() {
  return (
    <FrasesProvider>
    <NavigationContainer>
      <Stack/>

    </NavigationContainer>
    </FrasesProvider>
    
  );
}

