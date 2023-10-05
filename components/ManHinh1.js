import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,  TouchableOpacity} from 'react-native';

export default function ManHinh1() {
  return (
    <View style={styles.container}>
      <View style = {styles.circle}>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    alignItems: 'center',
  },
  circle:{
    top: 105,
    width: 140,
    height: 140,
    borderStyle: 15,
    borderWidth: 15,
    borderColor: "black",
    borderRadius: "50%"
  },
  text_1:{
    width: 198,
    height: 58,
    top: 172,
    fontFamily: "Roboto",
    lineHeight: 29.3,
    textAlign: 'center',
    fontSize:25,
    color: 'black',
    fontWeight: 500
  },
  text_2:{
    width: 302,
    height: 36,
    top: 252,
    fontFamily: "Roboto",
    lineHeight: 17.58,
    textAlign: 'center',
    fontSize:15,
    color: 'black',
  },
  buttons:{
    width: 302,
    top: 363,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn:{
    width:119,
    height: 48,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text_3:{
    fontWeight:'bold',
    fontSize:17,
    color:'black'
  }

});
