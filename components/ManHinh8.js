import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput , TouchableOpacity, Image} from 'react-native';
import {UserOutlined, LockTwoTone,UserAddOutlined,FacebookFilled,WifiOutlined} from '@ant-design/icons';

export default function ManHinh8() {
  return (
    <View style = {styles.container}>
        <Image 
            style={styles.mat}
            source={require('../image/images.jpg')}
            >
        </Image>

        <View style={styles.input}>
            <UserOutlined style={{fontSize:35, color: '#386FFC'}}></UserOutlined>
            <TextInput style={{height:'100%', paddingLeft:10, opacity:0.7}} placeholder='Please input user name'></TextInput>
        </View>
        <View style={styles.input}>
            <LockTwoTone style={{fontSize:35}}></LockTwoTone>
            <TextInput style={{height:'100%', paddingLeft:10, width:"100%", opacity:0.7}}  placeholder='Plese input user password'></TextInput>
        </View>
        <View style={styles.button}>
            <TouchableOpacity style={{height: '100%'}}>
                <View style={styles.btn}>
                    <Text style={styles.text_btn}>LOGIN</Text>
                </View>
              </TouchableOpacity>
        </View>

        <View style={{width:330,flexDirection:"row",top:125, alignItems: "space-around"}}>
            <Text style={[styles.text_ps,{textAlign:'left'}]}>Register</Text>
            <Text style={[styles.text_ps,{textAlign:'right'}]}>Forgot Password</Text>
        </View>

        <View style={{top: 150,height:40, width:330, alignItems: 'center', flexDirection:'row'}}>
            <View style={styles.line}></View>
            <Text style={{fontSize:18, padding:5}}>Other Login Methods</Text>
            <View style={styles.line}></View>
        </View>

        <View style={{top: 170, flexDirection: 'row', width:'100%', justifyContent:'space-around'}}>
            <View style={styles.icon_userAdd}>
                <UserAddOutlined ></UserAddOutlined>
            </View>
            <View style={styles.icon_wifi}>
                <WifiOutlined></WifiOutlined>
            </View>
            <View style={styles.icon_fb}>
                <FacebookFilled></FacebookFilled>
            </View>
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  input:{
    width:330,
    height: 54,
    opacity: 0.5,
    top: 50,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor:'#C4C4C4'
  },
  button:{
    height:45,
    width: 330,
    top:100,
  },
  btn:{
    height: '100%',
    alignItems: 'center',
    backgroundColor: "#0099FF",
    justifyContent: 'center',
    borderRadius:10
  },
  text_btn:{
    color: 'white',
    fontFamily:'Arial',
    fontSize: 18,
    fontWeight:'bold',
    lineHeight: 21.09,
    textAlign: 'center'
  },
  text_ps:{
    flex:1,
    fontFamily:'Roboto',
    fontWeight:400,
    fontSize:18,
    lineHeight:21.09
  },
  line:{
    width:70,
    height:0,
    borderColor:'#0099FF',
    borderWidth:1
  },
  icon_userAdd:{
    width:74,
    height:74,
    fontSize:50,
    color:'white',
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor:'skyblue',
    borderRadius:10
  },
  icon_wifi:{
    width:74,
    height:74,
    fontSize:50,
    color:'white',
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor:'#FF9933',
    borderRadius:10
  },
  icon_fb:{
    width:74,
    height:74,
    fontSize:80,
    color:'#0066CC',
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor:'white',
    borderRadius:10
  },
  mat:{
    resizeMode:'contain',
    width:140,
    height:140,
    gap:10,
    borderRadius:20,
    top:33

  }
});
