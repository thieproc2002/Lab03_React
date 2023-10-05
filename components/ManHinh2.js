import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function ManHinh2() {
  return (
    <View style = {styles.container}>
      <LinearGradient colors={['#C7F4F6','#C7F4F6','#C7F4F6','#D1F4F6','#E5F4F5','#E5F4F5','#00CCF9']} style = {styles.background}>
        <View style = {styles.circle}></View>
        <Text style = {styles.text_1}>GROW{'\n'}YOUR BUSINESS</Text>
        <Text style = {styles.text_2}>We will help you to grow your business using
         online server</Text>
    
         <View style = {styles.buttons}>
            <TouchableOpacity >
              <View style = {styles.btn}>
                <Text style = {styles.text_3}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style = {styles.btn}>
                <Text style = {styles.text_3}>SIGN IN</Text>
              </View>
            </TouchableOpacity>
        </View>

        <Text style = {styles.text_4}>HOW WE WORK?</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background:{
    height: '100%',
    alignItems: 'center',
  },
  circle:{
    top: 69,
    width: 142,
    height: 142,
    borderStyle: 15,
    borderWidth: 15,
    borderColor: "black",
    borderRadius: "50%"
  },
  text_1:{
    width: 250,
    height: 58,
    top: 137,
    fontFamily: "Roboto",
    lineHeight: 29.3,
    textAlign: 'center',
    fontSize:25,
    color: 'black',
    fontWeight: 'bold'
  },
  text_2:{
    width: 302,
    height: 36,
    top: 200,
    fontFamily: "Roboto",
    lineHeight: 17.58,
    textAlign: 'center',
    fontSize:15,
    color: 'black',
    fontWeight: 'bold'
  },
  buttons:{
    width: 302,
    top: 240,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn:{
    width:128,
    height: 48,
    backgroundColor: '#E3C000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text_3:{
    fontWeight:'bold',
    fontSize:17,
    color:'black'
  },
  text_4:{
    width:302,
    height: 53,
    top: 280,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: 21.09, 
    textAlign: 'center'
  }
});
