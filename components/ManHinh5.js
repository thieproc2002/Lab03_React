import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput , TouchableOpacity, Image} from 'react-native';
import {EyeFilled, FacebookFilled} from '@ant-design/icons';
export default function ManHinh5() {
  return (
    <View style = {styles.container}>
        <Text style={styles.login}>LOGIN</Text>
        <View style={styles.inputs}>
            <TextInput style={styles.email} placeholder='Email' ></TextInput>
        </View>
        <View style={styles.inputs}>
            <TextInput style={styles.email} placeholder='Password' ></TextInput>
            
            <EyeFilled style={{fontSize: 35, paddingRight:15}}></EyeFilled>
        </View>
        
        <View style={styles.button}>
          <TouchableOpacity style={{height: '100%'}}>
            <View style={styles.btn}>
              <Text style={styles.text_btn}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.text2}>When you agree to terms and conditions</Text>
        <Text style={styles.text3}>For got your password?</Text>
        <Text style={{top:213, fontSize: 16, fontFamily:'Arial'}}>Or login with</Text>

        <View style={styles.fzg}>
            <View style={styles.mxh}>
            <FacebookFilled style={styles.fb}></FacebookFilled>
            </View>
            <View style={styles.mxh }>
              <Image style={styles.zalo}
               source={require('../image/zalo-icon.png')}
               >
            </Image>
            </View>
            <View style={styles.mxh}>
              <Image style={styles.gg }
               source={require('../image/Gg.png')}>
            </Image>
            </View>
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#cdf1cb',
    alignItems: 'center'
  },
  login:{
    width: '100%',
    height: 20,
    top: 60,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 30,
    fontWeight: 'bold'
  },
  email:{
    width: '100%',
    height: 50,
    padding:15,
    
  },
  inputs:{
    backgroundColor:'#CDCDB4',
    opacity:0.5,
    width: 340,
    top: 100,
    marginTop: 30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    height:45,
    width: 340,
    top:165,
  },
  btn:{
    height: '100%',
    alignItems: 'center',
    backgroundColor: "#CD5B45",
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
  text2:{
    fontFamily:'Arial',
    fontSize: 16,
    top: 186
  },
  text3:{
    top:200,
    color: 'blue'
  },
  fzg:{
    top:250,
    flexDirection: 'row',
    height: 70,
    width:340,
  },
  mxh:{
    flex:1,
    height:'100%',
  },
  fb:{
    fontSize: 70,
    color: 'blue',
  },
  zalo:{
    height:'100%',
    resizeMode: 'center',
    backgroundColor:'#177FFF',
    borderRadius: 5
  },
  gg:{
    resizeMode: 'center',
    height:'100%'
  }
  
});
