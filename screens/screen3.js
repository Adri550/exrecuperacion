import React, { useContext } from "react";
import { StyleSheet, Button, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from "react-native-elements";
import { FrasesContext } from "../context/context";



export default function Screen3({ navigation }) {
    const { quotes } = useContext(FrasesContext)
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text h3 style={{ textAlign: 'center', paddingBottom:30}}>Frase del dia</Text>
                {quotes.map((a,index) =>
                    <View style={{paddingBottom:30}}>
                        <Text h4 style={{ textAlign: 'center' }}>Frase {index+1}</Text>
                        <Text h4 style={{ textAlign: 'center' }}>{a.q}</Text>
                    </View>
                )}
                <Button title="Regresar" onPress={()=>navigation.goBack()}/>

            </ScrollView>

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
        paddingTop:30
    },
});