import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput , TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import {LockFilled, MailOutlined} from '@ant-design/icons';

export default function ManHinh3() {
  return (
    <View style = {styles.container}>
      <LinearGradient colors={['#C7F4F6','#C7F4F6','#C7F4F6','#D1F4F6','#E5F4F5','#E5F4F5','#00CCF9']} style = {styles.background}>
        <View style={{top:76}}>
          <LockFilled style = {styles.key}></LockFilled>
        </View>
        
        <Text style ={styles.text1}>FORGET{'\n'}PASSWORD</Text>
        <Text style ={styles.text2}>Provide your account’s email for which you want to reset your password</Text>

        <View style={styles.input_email}>
          <View style={{ width: 60}}>
            <MailOutlined style={{fontSize:28, textAlign: 'center'}}></MailOutlined>
          </View>
          <TextInput placeholder='Email' style={styles.email}></TextInput>
        </View>
        

        <View style={styles.button}>
          <TouchableOpacity style={{height: '100%'}}>
            <View style={styles.btn}>
              <Text style={styles.text_btn}>NEXT</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  key:{
    fontSize: 117,
  },
  text1:{
    width: 150,
    height: 58,
    top: 110,
    fontFamily: 'Roboto',
    fontSize: 25,
    lineHeight: 29.3, 
    textAlign: 'center',
    color: "black",
    fontWeight: 700
  },
  text2: {
    width: 302,
    height: 53,
    top: 150,
    fontFamily: 'Roboto',
    fontSize: 15,
    lineHeight: 17.58, 
    textAlign: 'center',
    color: "black",
    fontWeight: 700
  },
  input_email:{
    width: 305,
    height: 45,
    top:160,
    backgroundColor: '#C4C4C4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  email:{
    left: 100,
    width: '100%',
    height: "100%"
  },
  button:{
    height:45,
    width: 305,
    top:200,
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
