import React, { useContext } from "react";
import { StyleSheet, Button, View, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from "react-native-elements";
import { FrasesContext } from "../context/context";



export default function Screen2({ navigation }) {
    const { random } = useContext(FrasesContext)
    return (
        <View style={styles.container}>
            <Text h3 style={{ textAlign: 'center' }}>Frase del dia</Text>
            {random.map((a) =>
                <Text h3 style={{ textAlign: 'center' }}>{a.q}</Text>
            )}
            <Button title="Regresar" onPress={()=>navigation.goBack()}/>



            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
