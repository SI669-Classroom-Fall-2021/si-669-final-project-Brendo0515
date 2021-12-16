import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import { getDataModel } from './DataModel';
import { getAuth, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";

const auth = getAuth(); 


export function LoginPage ({navigation, route}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('')
  const [mode, setMode] = useState('login');
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
              placeholder='Enter Email' 
              autoCapitalize='none'
              spellCheck={false}
              value={email}
              onChangeText={(text)=>{setEmail(text)}}
            />
          </View>
        </View>

        {mode === 'signup' ? 
          <View style={styles.loginRow}>
            <View style={styles.loginInputContainer}>
              <TextInput 
                style={styles.loginInputBox}
                placeholder='Enter Display Name' 
                autoCapitalize='none'
                spellCheck={false}
                value={displayName}
                onChangeText={(text)=>{setDisplayName(text)}}
              />
            </View>
          </View>
          :
          <View></View>
        }

        <View style={styles.loginRow}>
          <View style={styles.loginInputContainer}>
            <TextInput 
              style={styles.loginInputBox}
              placeholder='Enter Password' 
              secureTextEntry={true}
              autoCapitalize='none'
              spellCheck={false}
              value={password}
              onChangeText={(text)=>{setPassword(text)}}
            />
          </View>
        </View>
  
        <View style={styles.loginButtonRow}>
        <Button
            title={mode==='login'?'Log in':'Sign up'}
            color='red'
            onPress={async ()=>{
              if (mode === 'login') {
                try {
                  const credential = 
                    await signInWithEmailAndPassword(auth, email, password);
                  const authUser = credential.user;      
                  const user = await dataModel.getUserForAuthUser(authUser);
                  navigation.navigate('Home', {currentUserId: user.key});
                } catch(error) {
                  Alert.alert(
                    "Login Error",
                    error.message,
                    [{ text: "OK" }]
                  );
                }
                setEmail('');
                setPassword('');
            } else {
              try {
                const credential = 
                  await createUserWithEmailAndPassword(auth, email, password);  
                const authUser = credential.user;
                await updateProfile(authUser, {displayName: displayName});
                const user = await dataModel.getUserForAuthUser(authUser);
                navigation.navigate('Home', {currentUserId: user.key});
              } catch(error) {
                Alert.alert(
                  "Sign Up Error",
                  error.message,
                  [{ text: "OK" }]
                );
              }
              setEmail('');
              setPassword('');
            }
          }}

          />
        </View>

        <View style={styles.modeSwitchContainer}>
          {mode === 'login' ?
            <Text>New user? 
              <Text 
                onPress={()=>{setMode('signup')}} 
                style={{color: 'blue'}}> Sign up </Text> 
            instead!</Text>
          :
            <Text>Existing user? 
            <Text 
              onPress={()=>{setMode('login')}} 
              style={{color: 'blue'}}> Log In </Text> 
            instead!</Text>
          }
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
      flex: 0.4,
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
    },

    modeSwitchContainer:{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
  });

export default LoginPage;