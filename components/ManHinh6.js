import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';
import {EyeFilled} from '@ant-design/icons';

export default function ManHinh6() {
    const [checked, setChecked] = useState('first');
  return (
    <View style={styles.container}>
      <Text style={styles.register}>REGISTER</Text>
      <View style={{top: 70}}>
        <TextInput style={styles.input} placeholder='Name'></TextInput>
        <TextInput style={styles.input} placeholder='Phone'></TextInput>
        <TextInput style={styles.input} placeholder='Email'></TextInput>
        <View style={styles.input}>
            <TextInput style={{width:'100%', height:'100%'}} placeholder='Password' ></TextInput>
            <EyeFilled style={{fontSize: 35, paddingRight:15, paddingTop: 10}}></EyeFilled>
        </View>
        <TextInput style={styles.input} placeholder='Birthday'></TextInput>
      </View>

      <View style={{flexDirection:'row', top: 90, alignItems: 'center', width:330}}>
        <RadioButton 
            value='first'
            status={checked==='first'?'checked':'unchecked'}
            onPress={()=>setChecked('first')}
            
        >
        </RadioButton>
        <Text style={styles.textRadio}>Male</Text>
        <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
        >
        </RadioButton>
        <Text style={styles.textRadio}>Female</Text>
      </View>

      <View style={styles.button}>
          <TouchableOpacity style={{height: '100%'}}>
            <View style={styles.btn}>
              <Text style={styles.text_btn}>REGISTER</Text>
            </View>
          </TouchableOpacity>
        </View>
      <Text style={styles.textEnd}>When you agree to terms and conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#cdf1cb',
    alignItems: 'center'
  },
  register:{
    width: 136,
    height: 29,
    top: 40,
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 29.3,
    textAlign: 'center'
  },
  input:{
    marginTop:15,
    height: 54,
    width: 330,
    borderWidth: 1,
    opacity: 0.3,
    borderColor:'#F2F2F2',
    backgroundColor: "#C4C4C4",
    flexDirection: 'row',
    paddingLeft: 15
  },
  button:{
    height:45,
    width: 330,
    top:105,
  },
  btn:{
    height: '100%',
    alignItems: 'center',
    backgroundColor: "#E53935",
    justifyContent: 'center'
  },
  text_btn:{
    color: 'white',
    fontFamily:'Roboto',
    fontSize: 20,
    fontWeight:'bold',
    lineHeight: 23.44,
    textAlign: 'center'
  },
  textEnd:{
    width:260,
    height: 20,
    top: 130,
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16.41,
    textAlign: "center"
  },
  textRadio:{
    fontFamily:'Roboto',
    fontWeight: 400,
    fontSize:18,
    lineHeight: 21.09,
    textAlign:'center',
    marginRight: 30,
  },
 
});
