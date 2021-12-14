import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';

const st= createNativeStackNavigator();//creacion del objeto

export default function Stack (){
    return (

        <st.Navigator>
            <st.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <st.Screen name="Screen1" component={Screen1} options={{ headerShown: false }}/>
            <st.Screen name="Screen2" component={Screen2} options={{ headerShown: false }}/>
            <st.Screen name="Screen3" component={Screen3} options={{ headerShown: false }}/>
        </st.Navigator>// objeto para navegar


    )

}