import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput , TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {UserOutlined, LockFilled, EyeFilled} from '@ant-design/icons';

export default function ManHinh7() {
  return (
    <View style = {styles.container}>
        <LinearGradient colors={['#FBCB00','#BF9A00']} style={{height:'100%',width:'100%', alignItems:'flex-start', paddingLeft:30,paddingRight:30}}>
            <Text style={styles.login}>LOGIN</Text>
            <View style={styles.input}>
              <UserOutlined style={{fontSize:35}}></UserOutlined>
              <TextInput style={{height:'100%', paddingLeft:10}} placeholder='Name'></TextInput>
            </View>
            <View style={styles.input}>
              <LockFilled style={{fontSize:35}}></LockFilled>
              <TextInput style={{height:'100%', paddingLeft:10, width:"100%"}}  placeholder='Password'></TextInput>
              <EyeFilled  style={{fontSize:35, paddingRight:10}}></EyeFilled>
            </View>
            
            <View style={styles.button}>
              <TouchableOpacity style={{height: '100%'}}>
                <View style={styles.btn}>
                  <Text style={styles.text_btn}>LOGIN</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.textAccount}>CREATE ACCOUNT</Text>
        </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  login:{
    fontFamily:'Roboto',
    fontWeight:700,
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: 'left',
    width:'100%', 
    height: 35,
    top: 82,
  },
  input:{
    width:330,
    height: 54,
    borderWidth: 1,
    backgroundColor:"#F2F2F2",
    opacity: 0.5,
    top: 110,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button:{
    height:45,
    width: 340,
    top:170,
  },
  btn:{
    height: '100%',
    alignItems: 'center',
    backgroundColor: "black",
    justifyContent: 'center'
  },
  text_btn:{
    color: 'white',
    fontFamily:'Arial',
    fontSize: 18,
    fontWeight:'bold',
    lineHeight: 21.09,
    textAlign: 'center'
  },
  textAccount:{
    width: '100%',
    height: 27,
    top: 270,
    fontFamily:"Roboto",
    fontSize: 20,
    lineHeight: 23.44,
    textAlign: 'center',
    fontWeight: 700
  }
  
});
