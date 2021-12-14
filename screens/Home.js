import React from "react";
import {StyleSheet,Button, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from "react-native-elements";



export default function Home ({navigation}){

    return (
        <View style={styles.container}>
          <Text h1 style={{textAlign:'center'}}>Examen recuperacion</Text>
          <Button title="Frase del dia" onPress={()=>navigation.navigate('Screen1')}/> 
          <Button title="Frase random" onPress={()=>navigation.navigate('Screen2')}/>
          <Button title="Frases surtidas" onPress={()=>navigation.navigate('Screen3')}/>


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
  
