import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { getDataModel } from './DataModel';


export function LoginPage ({navigation, route}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dataModel = getDataModel();
  
  return (
    <View style={styles.body}>
      <View style={styles.logoContainer}>
          <Text style={styles.logo}>Jam</Text>
          <Text style={styles.logo}>Session</Text>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.loginRow}>
          <View style={styles.loginInputContainer}>
            <TextInput 
              style={styles.loginInputBox}
              placeholder='Enter Username' 
              autoCapitalize='none'
              spellCheck={false}
              value={username}
              onChangeText={(text)=>{setUsername(text)}}
            />
          </View>
        </View>

        <View style={styles.loginRow}>
          <View style={styles.loginInputContainer}>
            <TextInput 
              style={styles.loginInputBox}
              placeholder='Enter Password' 
              secureTextEntry={true}
              value={password}
              onChangeText={(text)=>{setPassword(text)}}
            />
          </View>
        </View>
  
        <View style={styles.loginButtonRow}>
          <Button
            title="Log in"
            color="red"
            onPress={async ()=>{
                navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '2%'
    },
    logo: {
      fontSize: 40,
      color: '#853E99',
    },
    logoContainer: {
      flex: 0.25,
      alignItems: 'center',

      width: '100%',
    },
    loginContainer: {
      flex: 0.35,
      justifyContent: 'center',
      width: '100%',
    },
    loginRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    loginLabelContainer: {
      flex: 0.4,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    loginLabelText: {
      fontSize: 18
    },
    loginInputContainer: {
      flex: 0.6,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
    },
    loginInputBox: {
      width: '100%',
      borderColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 18,
      padding: '2%',
    },
    loginButtonRow: {
      flex: 1, 
      width: '100%',
      justifyContent: 'center', 
      alignItems: 'center',
    }
  });

export default LoginPage;