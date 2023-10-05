import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput , TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ManHinh4() {
    return (
      <View style={styles.container}>
         <LinearGradient colors={['#C7F4F6','#C7F4F6','#C7F4F6','#D1F4F6','#E5F4F5','#E5F4F5','#00CCF9']} style = {{height: '100%', alignItems:'center'}}>
            <Text style={styles.text1}>CODE</Text>
            <Text style = {styles.text2}>VERIFICATION</Text>
            <Text style = {styles.text3}>Enter ontime password sent on{'\n'}++849092605798</Text>
            <View style = {styles.passWork}>
              <TextInput style = {styles.cell}></TextInput>
              <TextInput style = {styles.cell}></TextInput>
              <TextInput style = {styles.cell}></TextInput>
              <TextInput style = {styles.cell}></TextInput>
              <TextInput style = {styles.cell}></TextInput>
              <TextInput style = {styles.cell}></TextInput>
            </View>

            <View style={styles.button}>
              <TouchableOpacity style={{height: '100%'}}>
                <View style={styles.btn}>
                 <Text style={styles.text_btn}>VERIFY CODE</Text>
                </View>
              </TouchableOpacity>
            </View>
         </LinearGradient>
      </View>
    );
  }
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    text1:{
        width: 174,
        height: 70,
        top: 113,
        fontFamily:'Roboto',
        fontWeight: 700,
        fontSize: 60,
        lineHeight: 70.31,
        textAlign: 'center'
    },
    text2:{
      width: 302,
      height: 53,
      top: 170,
      fontFamily:'Roboto',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 23.44,
      textAlign: 'center'
    },
    text3:{
      width: 302,
      height: 53,
      top: 200,
      fontFamily:'Roboto',
      fontWeight: 700,
      fontSize: 15,
      lineHeight: 23.44,
      textAlign: 'center'
    },
    passWork:{
      width: 300,
      height: 50,
      top:240,
      flexDirection: 'row'
    },
    cell:{
      width: 50,
      height: 50,
      borderColor: 'black',
      borderStyle: 1,
      borderWidth: 1
    },
    button:{
      height:50,
      width: 339,
      top:270,
    },
    btn:{
      height: '100%',
      alignItems: 'center',
      backgroundColor: "#E3C000",
      justifyContent: 'center'
    },
    text_btn:{
      fontFamily:'Roboto',
      fontSize: 18,
      fontWeight:'bold',
      lineHeight: 21.09,
      textAlign: 'center'
    }
});